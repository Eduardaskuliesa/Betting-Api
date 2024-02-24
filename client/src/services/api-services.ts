import axios from 'axios';

const serverApi = axios.create({
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
