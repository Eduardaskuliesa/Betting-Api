import React, { useState, useEffect } from 'react';
import apiServices from 'services/api-services';
import FootballLiveCard from './components/FooBallLiveCard';
import classes from './index.module.scss';

const FootBallLivePage
: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiServices.fetchOddsName();
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
    <div>
      {matches.length > 0 && (
        <div>
          <h2>FootBall Live Matches</h2>
          <div className={classes.box}>
            {matches.map((match) => <FootballLiveCard key={match['Match ID']} {...match} />)}
          </div>

        </div>
      )}
    </div>
  );
};

export default FootBallLivePage;
