import axios from 'axios';

const serverApi = axios.create({
  baseURL: 'http://localhost:5024',
});

const fetchFootBallLiveMatches = async () => {
  const { status, data } = await serverApi.get('/matches');

  if (status !== 200) {
    return 'Problems to fetch data';
  }

  return data;
};

const fetchFootBallMatchById = async (matchId: string | undefined) => {
  const { status, data } = await serverApi.get(`/statistics?Match%20ID=${matchId}`);

  if (status !== 200) {
    return 'Problems to fetch data';
  }

  return data;
};

const apiServices = {
  fetchFootBallLiveMatches,
  fetchFootBallMatchById,
};

export default apiServices;
