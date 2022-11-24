import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Category, Videos } from './'

const SearchConts = () => {
  const [selectCategory, setSelectCategory] = useState('')
  const [videos, setVideos] = useState(null)
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchAPI(
      `search?q=${selectCategory}&type=video&part=snippet%2Cid&regionCode=kr&order=date`
    ).then((data) => setVideos(data.items))
  }, [selectCategory])

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  return (
    <main id="main">
      <div id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </div>
      <section id="contents">
        <h2>
          <em>{searchTerm}</em> 검색 결과입니다.
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  )
}

export default SearchConts
