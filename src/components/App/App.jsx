import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { fetchImages } from '../../images-api';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ImageModal } from '../ImageModal/ImageModal';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageInfo, setImageInfo] = useState({});
  const [totalPageQuery, setTotalPageQuery] = useState(0);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getImages() {
      try {
        setIsLoading(true);
        setError(false);
        const { results, total_pages } = await fetchImages({ query, page });
        setImages(prevResults => {
          return [...prevResults, ...results];
        });
        if (!results.length) {
          setEmpty(true);
          return;
        }
        setTotalPageQuery(total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(false);
    setTotalPageQuery(0);
    setEmpty(false);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = values => {
    setIsOpen(true);
    setImageInfo(values);
  };

  const closeModal = () => {
    setIsOpen(false);
    setImageInfo({});
  };

  return (
    <div className={styles.wrapper}>
      <SearchBar onSearch={handleSearch} />
      {!isLoading && !error && empty && (
        <ErrorMessage>
          Sorry we didn't find any results matching this search...
        </ErrorMessage>
      )}
      {!totalPageQuery && error && (
        <ErrorMessage>
          Oops, something went wrong! Please try again!
        </ErrorMessage>
      )}
      {!error && images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {images.length > 0 && totalPageQuery > page && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        imageInfo={imageInfo}
      />
    </div>
  );
}
