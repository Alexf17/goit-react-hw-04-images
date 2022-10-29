import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29780363-e0273b64f82bba5b73a3e8070';
const FILTERS = 'image_type=photo&orientation=horizontal&per_page=12';

export const fetch = async (query, page) => {
    const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&${FILTERS}`
  );

  

  
  return response.data;
};
