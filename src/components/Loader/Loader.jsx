import { DNA } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass={styles.wrapper}
    />
  );
};
