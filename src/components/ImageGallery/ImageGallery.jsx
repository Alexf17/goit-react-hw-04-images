import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryWrap } from './ImageGallery.styled';


export const ImageGallery = ({ dataResponse }) => {
  return (
    <ImageGalleryWrap>
      {dataResponse.map(data => (
        <ImageGalleryItem key={data.id} data={data} />
      ))}
    </ImageGalleryWrap>
  );
};

ImageGallery.propTypes = {
  dataResponse: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      data: PropTypes.objectOf(
        PropTypes.shape({
          webformatURL: PropTypes.string.isRequired,
          largeImageURL: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};
