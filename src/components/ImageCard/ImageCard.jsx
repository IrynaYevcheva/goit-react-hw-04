import styles from './ImageCard.module.css';

export const ImageCard = ({
  image: { alt_description, description, likes, urls, user },
  openModal,
}) => {
  return (
    <div className={styles.wrap}>
      <img
        className={styles.img}
        src={urls.small}
        alt={alt_description}
        onClick={() =>
          openModal({
            alt_description,
            imgUrl: urls.regular,
            user,
            likes,
            description,
          })
        }
      />
    </div>
  );
};
