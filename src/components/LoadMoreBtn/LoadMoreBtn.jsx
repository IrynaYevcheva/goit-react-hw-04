import styles from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Load More
    </button>
  );
};
