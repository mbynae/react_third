import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import를 한번에 모아서 쓰는 방법(import 시키는 폴더에 index.js를 만들어서 import를 시킨 후 그 파일을 import 시킴)
import {
  HeaderCont,
  MainConts,
  VideoConts,
  ChannelConts,
  SearchConts,
} from './components/index'

const App = () => {
  return (
    <BrowserRouter>
      <HeaderCont />
      <Routes>
        <Route path="/" element={<MainConts />}></Route>
        <Route path="/video/:id" element={<VideoConts />}></Route>
        <Route path="/channel/:id" element={<ChannelConts />}></Route>
        <Route path="/search/:searchTerm" element={<SearchConts />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
