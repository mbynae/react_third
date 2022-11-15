import React from "react";
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="search">
        <label className="glass" htmlFor="searchInput">
            <FaSearch />
        </label>
        <input type="text" id="searchInput" className="input__search" placeholder="찾고싶은 동물을 검색하세요." title="검색"/>
    </div>
  );
};

export default SearchBar;
