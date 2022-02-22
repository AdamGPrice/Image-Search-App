import axios from "axios";

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '25821230-ddaeb33da34f1d5d8a623f083';

export const apiGetImages = async (query) => {
  await new Promise(resolve => setTimeout(resolve, 500)); // small delay to see pending / fulfilled better
  const response = await axios.get(`${BASE_URL}/?key=${API_KEY}&q=${query}`);
  return response.data.hits;
}