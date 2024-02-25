import React from 'react';
import { FaSearch } from 'react-icons/fa';
import classes from './index.module.scss';

type SearchBarProps = {
  searchTerm: string,
  onSearchChange:(e: React.ChangeEvent<HTMLInputElement>) => void
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => (
  <div className={classes.searchBar}>
    <FaSearch className={classes.search} />
    <input
      type="text"
      placeholder="Search Matches..."
      value={searchTerm}
      onChange={onSearchChange}
      className={classes.inputField}
    />
  </div>
);

export default SearchBar;
