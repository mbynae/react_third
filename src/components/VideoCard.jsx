import React from "react";
import {Link} from "react-router-dom";

const VideoCard = ({video, video: {id: {videoId}, snippet, }}) => {   //변수 안의 변수를 불러오는 방식
  return (
    <div className="box">
        <Link to={`/video/${videoId}`} className="Vbox_cont">
            <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title}/>
        </Link>
        <div className="Vbox_text">
            <Link to={`/video/${videoId}`} >
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
            </Link>
            <Link to={`/channel/${snippet.channelId}`} className="Vname">
                <span>{video.snippet.channelTitle}</span>
                <em>{video.snippet.publishTime}</em>
            </Link>
        </div>
    </div>
  );
};

export default VideoCard;
