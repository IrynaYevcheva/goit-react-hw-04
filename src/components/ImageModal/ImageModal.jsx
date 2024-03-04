import Modal from 'react-modal';
import { IoMdHeartEmpty } from 'react-icons/io';
import styles from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({
  modalIsOpen,
  closeModal,
  imageInfo: { user, likes, description, alt_description, imgUrl },
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className={styles.wrapper}>
        <img className={styles.img} src={imgUrl} alt={alt_description} />
      </div>
      <div className={styles.info}>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatar}
            src={user?.profile_image.small}
            alt={alt_description ?? 'Unrecognized image'}
          />
          <span>@{user?.username}</span>
        </div>
        <div className={styles.likes}>
          <IoMdHeartEmpty size={20} />
          <span>{likes}</span>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.description}>{description}</p>
      </div>
    </Modal>
  );
};
