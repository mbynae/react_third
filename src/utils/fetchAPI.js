// const axios = require("axios"); 자바스크립트 방식
import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_REPID_APIKEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}