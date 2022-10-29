import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { ImageGalleryImg, ImageGalleryLi } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ data }) => {
  const [visible, setVisible] = useState(false);

  const VisibleToggle = () => {
    setVisible(prevState => !prevState);
  };

  const { webformatURL, largeImageURL, tags } = data;
  return (
    <>
      <ImageGalleryLi>
        <ImageGalleryImg
          onClick={VisibleToggle}
          src={webformatURL}
          alt={tags}
        />
      </ImageGalleryLi>
      {visible && (
        <Modal onClick={VisibleToggle} img={largeImageURL} alt={tags} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
