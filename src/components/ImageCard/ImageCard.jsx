import styles from './ImageCard.module.css';

export const ImageCard = ({
  image: { alt_description, color, description, likes, urls, user },
}) => {
  return (
    <div className={styles.wrap}>
      <img className={styles.img} src={urls.small} alt={alt_description} />
    </div>
  );
};

// style={{ backgroundColor: color }}
