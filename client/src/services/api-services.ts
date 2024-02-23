import axios from 'axios';

const serverApi = axios.create({
  headers: {
    'X-RapidAPI-Key': 'dad7f18104mshc5fe191143f15efp173eaajsnd8423c9d9c7c',
    'X-RapidAPI-Host': 'sports-live-scores.p.rapidapi.com',
  },
  baseURL: 'http://localhost:5024',
});

const fetchOddsName = async () => {
  const { status, data } = await serverApi.get('/matches');

  if (status !== 200) {
    return 'Problems to fetch data';
  }

  return data;
};

const apiServices = {
  fetchOddsName,
};

export default apiServices;
