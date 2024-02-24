import React, { useState } from 'react';
import classes from './index.module.scss';

type FootballLiveProps = Match;

const FootballLiveCard: React.FC<FootballLiveProps> = ({
  League: league,
  Status: status,
  'Home Score': homeScore,
  'Home Team': homeTeam,
  'Away Score': awayScore,
  'Away Team': awayTeam,
}) => {
  const [name, setName] = useState('');

  return (
    <div className={classes.wrapper}>
      <div className={classes.homeTeamWrapper}>
        <div className={classes.vissual}>
          <img className={classes.icon} src="education-19-512.webp" alt="football ball icon" />
          <span className={classes.name}>{homeTeam}</span>
        </div>
      </div>
      <div className={classes.middlePart}>
        <div className={classes.dotWrapper}>
          <div className={classes.dot} />
          <div className={classes.dot} />
        </div>
        <div className={classes.leagueName}>{league}</div>
      </div>

      <div className={classes.awayTeamWrapper}>
        <div className={classes.vissual}>
          <img className={classes.icon} src="education-19-512.webp" alt="football ball icon" />
          <span className={classes.name}>{awayTeam}</span>
        </div>
      </div>
    </div>
  );
};

export default FootballLiveCard;
