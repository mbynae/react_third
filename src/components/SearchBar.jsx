import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSearch()
    }
  }

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <div className="search" onKeyPress={onKeyPress}>
      <label className="glass" htmlFor="searchInput">
        <FaSearch />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="찾고싶은 동물을 검색하세요."
        title="검색"
        value={searchTerm || ''} //서치바에 빈칸 있으면 오류나서 || '' 을 추가해줌
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
