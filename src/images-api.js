import axios from 'axios';

const API_KEY = 'X9xhH7rm04PkhwXkc6GuXljxvauOByEMwp3zKNkqKCs';

axios.defaults.baseURL = `https://api.unsplash.com/`;
axios.defaults.params = {
  client_id: API_KEY,
  per_page: 8,
};

export const fetchImages = async (params = {}) => {
  const { data } = await axios.get('search/photos/', {
    params,
  });
  return data;
};
