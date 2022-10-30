import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryWrap } from './ImageGallery.styled';


export const ImageGallery = ({ dataResponsee }) => {
  return (
    <ImageGalleryWrap>
      {dataResponsee.map(data => (
        <ImageGalleryItem key={data.id} data={data} />
      ))}
    </ImageGalleryWrap>
  );
};

ImageGallery.propTypes = {
  dataResponsee: PropTypes.arrayOf(
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
