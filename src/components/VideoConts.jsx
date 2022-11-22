import React, { useState, useEffect } from 'react'
import { BiLike } from 'react-icons/bi'
import ReactPlayer from 'react-player'
import { useParams, Link } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Category, Videos, Loader } from './'

const VideoConts = () => {
  const [selectCategory, setSelectCategory] = useState('내셔널지오그래픽 동물')
  const [videoDetail, setVideoDatail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(
      `search?q=${selectCategory}&type=video&part=snippet%2Cid&regionCode=kr&order=date`
    ).then((data) => setVideos(data.items))
  }, [selectCategory])

  useEffect(() => {
    fetchAPI(`videos?part-snippet,statistics&id=${id}`).then((data) =>
      setVideoDatail(data.items[0])
    )

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  if (!videoDetail?.snippet) return <Loader />

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail

  return (
    <main id="main">
      <div id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </div>
      <section id="videoCont__inner">
        <div className="videoCont__cont">
          <div className="play">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
          </div>
          <div className="desc">
            <span className="title">{title}</span>
            <div className="channel">
              <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
            </div>
            <div className="count">
              <span className="view">조회수 {viewCount} 회</span>
              <span>/</span>
              <span className="like">
                <BiLike className="likeIcon" />
                {likeCount}
              </span>
            </div>
          </div>
        </div>
        <div className="videoCont__list">
          <Videos videos={videos} layout="side" />
        </div>
      </section>
    </main>
  )
}

export default VideoConts
