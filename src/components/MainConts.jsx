import React, {useState, useEffect} from "react";
import { fetchAPI } from "../utils/fetchAPI";
import {Category, Videos} from "./";



const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('내셔널지오그래픽 동물');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchAPI(`search?q=${selectCategory}&type=video&part=snippet%2Cid&regionCode=kr&order=date`).then((data) => 
      // setVideos(data.items)
      setVideos(data.items)
    )  
  }, [selectCategory])

  return (
    <main id="main">
      <div id="aside">
        <Category 
          selectCategory = {selectCategory}
          setSelectCategory = {setSelectCategory}
        />
      </div>
      <section id="contents">
        <h2>
          <em>{selectCategory}</em> 채널
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
    
  );
};

export default MainConts;
