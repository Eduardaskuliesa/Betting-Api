import React from 'react';
import { IoMdFootball } from 'react-icons/io';
import { MdOutlineStarRate } from 'react-icons/md';
import { HiQuestionMarkCircle } from 'react-icons/hi2';
import classes from './match-table.module.scss';

type MatchTableProps = {
  league: string,
  matches: Match[]
};

const MatchTable: React.FC<MatchTableProps> = ({ league, matches }) => (
  <div key={league} className={classes.matchTableWrapper}>
    <table className={classes.matchTable}>
      <thead>
        <tr className={classes.tableHeadRow}>
          <th className={classes.truncate}>
            <MdOutlineStarRate className={classes.icon} />
            {league}
          </th>
          <th>Score</th>
          <th>A</th>
          <th>Draw</th>
          <th>H</th>
          <th className={classes.hiddenMob}>Status</th>
        </tr>
      </thead>
      <tbody>
        {matches.map((match) => (
          <tr key={match['Match ID']}>
            <td className={classes.typography}>
              <div className={`${classes.row} ${classes.truncate}`}>
                <IoMdFootball className={classes.icon} />
                {`${match['Away Team']} (A): `}

              </div>
              <div className={`${classes.row} ${classes.truncate}`}>
                <IoMdFootball className={classes.icon} />
                {`${match['Home Team']} (H): `}

              </div>
            </td>
            <td>
              <div className={classes.col}>
                <span className={classes.score}>{match['Away Score']}</span>
                <span className={classes.score}>{match['Home Score']}</span>
              </div>
            </td>

            <td>
              {match['Live Away Odd'] !== null ? (
                <div className={classes.miniBox}>{match['Live Away Odd']}</div>
              ) : (
                <div className={classes.miniBox}>
                  <HiQuestionMarkCircle className={classes.iconU} />
                </div>
              )}
            </td>
            <td>
              {match['Live Draw Odd'] !== null ? (
                <div className={classes.miniBox}>{match['Live Draw Odd']}</div>
              ) : (
                <div className={classes.miniBox}>
                  <HiQuestionMarkCircle className={classes.iconU} />
                </div>
              )}
            </td>
            <td>
              {match['Live Home Odd'] !== null ? (
                <div className={classes.miniBox}>{match['Live Home Odd']}</div>
              ) : (
                <div className={classes.miniBox}>
                  <HiQuestionMarkCircle className={classes.iconU} />
                </div>
              )}
            </td>
            <td className={classes.hiddenMob}>{match.Status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MatchTable;
