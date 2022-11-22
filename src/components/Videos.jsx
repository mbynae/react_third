import React from 'react'
import { VideoCard, Loader } from './'

const Videos = ({ videos, layout }) => {
  if (!videos?.length) return <Loader /> //갯수가 맞아야 아래를 출력하도록 해줌 ?는 videos가 없을때 에러가 안뜨도록 해주는 것.

  return (
    <article className={`videos__inner ${layout}`}>
      {videos.map((item, idx) => (
        <VideoCard key={idx} video={item} />
      ))}
    </article>
  )
}

export default Videos
