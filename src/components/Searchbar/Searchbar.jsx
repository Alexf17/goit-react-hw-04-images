import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormButtonLabel,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const changeInput = e => {
    const inputData = e.target.value.trim().toLowerCase();
    setQuery(inputData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      return toast.error('❌ Кажется забыли ввести слово для поиска', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
    onSubmit(query);
    resetInput();
  };

  const resetInput = () => {
    setQuery('');
  };

  return (
    <SearchbarHeader>
      <ToastContainer />
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          onChange={changeInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
