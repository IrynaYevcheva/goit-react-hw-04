import { ImageCard } from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.list}>
      {images.map(image => (
        <li className={styles.item} key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
