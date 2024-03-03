import React, { useState, useEffect } from 'react';
import apiServices from 'services/api-services';
import NavBar from 'components/NavBar';
import FootballLiveCard from './components/FooBallLiveCard';
import classes from './index.module.scss';
import FootballTableLive from './components/FootballTableLive';

const FootBallLivePage
: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiServices.fetchFootBallLiveMatches();
        console.log('Data from api', data);
        setMatches(data);
      } catch (err) {
        setError('Error on the client side. :(');
      }
    };

    fetchData();
  }, []);

  console.log('Matches', matches);

  return (

    <div className={classes.box}>
      <FootballTableLive matches={matches} />
    </div>
  );
};

export default FootBallLivePage;
