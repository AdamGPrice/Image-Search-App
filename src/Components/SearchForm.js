import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getImages } from '../Slices/imagesSlice';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(getImages(query));
    }
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search Images
        <input type="text" value={query} onChange={handleQueryChange} />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchForm;