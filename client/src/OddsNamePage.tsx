import React, { useState, useEffect } from 'react';
import apiServices from 'services/api-services';

type Match = {
  'Away Score': number;
  'Away Team': string;
  'Home Score': number;
  'Home Team': string;
  'Initial Away Odd': number;
  'Initial Draw Odd': number;
  'Initial Home Odd': number;
  'League': string;
  'League ID': number;
  'Live Away Odd': number;
  'Live Draw Odd': number;
  'Live Home Odd': number;
  'Match ID': string;
  'Status': string;
};

const OddsNamePage: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiServices.fetchOddsName();
        console.log('Data from api', data);
        setMatches(data.matches);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  console.log('Matches', matches);

  return (
    <div>
      {matches.length > 0 && (
        <div>
          <h2>Leagues</h2>
          <ul>
            {matches.map((match, index) => (
              <li key={index}>
                <div>
                  Match ID:
                  {match['Match ID']}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OddsNamePage;
