import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiServices from 'services/api-services';

const FootBallMatchDetailsPage = () => {
  const { matchId } = useParams<{ matchId: string }>();
  const [matchStats, setMatchStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMatchStats = async () => {
      try {
        const stats = await apiServices.fetchFootBallMatchById(matchId);
        setMatchStats(stats);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch match statistics');
        setLoading(false);
        console.error(err);
      }
    };

    fetchMatchStats();
  }, [matchId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>Hello</div>
  );
};

export default FootBallMatchDetailsPage;
