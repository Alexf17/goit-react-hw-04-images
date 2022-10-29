import { useEffect } from 'react';
import { ModalWindow, ModalOverlay } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ img, alt, onClick }) => {
  useEffect(() => {
    const EscClick = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', EscClick);

    return () => {
      window.removeEventListener('keydown', EscClick);
    };
  }, [onClick]);

  const BackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return (
    <ModalOverlay onClick={BackdropClick}>
      <ModalWindow>
        <img src={img} alt={alt} />
      </ModalWindow>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
