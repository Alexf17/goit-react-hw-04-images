import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { fetch } from 'API/API';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';

import { Wrap } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [respons, setRespons] = useState([]);
  const [total, setTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = query => {
    setQuery(query);
    setRespons([]);
    setCurrentPage(1);
  };

 

  const getImage = async (query, page) => {
    try {
      setIsLoading(true);
      const images = await fetch(query, page);

      if (!images.totalHits) {
        return toast.error('🟡 Sorry , но по Вашему запросу нет картинок ');
      } else {
        setTotal(images.totalHits);
        setRespons(prevState => [...prevState, ...images.hits]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onLoadMoreButton = () => {
    setCurrentPage(prevState => prevState + 1);
  };

   useEffect(() => {
    if (!query) {
      return;
    }

    getImage(query, currentPage);
   }, [currentPage, query]);
  
  return (
    <Wrap>
      <ToastContainer />
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery dataResponse={respons} />
      {total > respons.length && <Button onLoadMore={onLoadMoreButton} />}

      {isLoading && <Loader />}
    </Wrap>
  );
};
