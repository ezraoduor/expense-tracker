import React from 'react';

const SearchBar = ({ search, onSearchChange }) => (
  <input
    className="search"
    type="text"
    placeholder=" Search expenses..."
    value={search}
    onChange={(e) => onSearchChange(e.target.value)}
  />
);

export default SearchBar;
