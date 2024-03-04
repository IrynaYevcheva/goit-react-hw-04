import styles from './ErrorMessage.module.css';

export const ErrorMessage = ({ children }) => {
  return <div className={styles.massage}>{children}</div>;
};
