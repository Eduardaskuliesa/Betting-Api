import React, { useEffect, useState } from 'react';
import searchFilter from 'utils/normalizeSearch';
import SearchBar from 'components/SearchBar';
import classes from './index.module.scss';
import MatchTable from './match-table';

type MatchTableProps = {
  matches: Match[]
};

const FootballTableLive: React.FC<MatchTableProps> = ({ matches }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMatches, setFilteredMatches] = useState<Match[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filtered = matches.filter((match) => searchFilter.matchFilter(match, searchTerm));
    setFilteredMatches(filtered);
  }, [matches, searchTerm]);

  const liveMatchesByLeague = filteredMatches.reduce((acc, match) => {
    const { League } = match;
    if (!acc[League]) acc[League] = [];
    acc[League].push(match);
    return acc;
  }, {} as { [key: string]: Match[] });

  const hasFilteredMatches = Object.keys(liveMatchesByLeague).length > 0;

  return (
    <div className={classes.matchTablesContainer}>
      <div className={classes.headerWrapper}>
        <SearchBar onSearchChange={handleSearchChange} searchTerm={searchTerm} />
        <h2 className={classes.liveH2}>Football Live Matches</h2>
      </div>
      {hasFilteredMatches ? (
        Object.keys(liveMatchesByLeague).map((league) => (
          <MatchTable key={league} league={league} matches={liveMatchesByLeague[league]} />
        ))
      ) : (
        <div className={classes.noMatches}>There are no matches or leagues playing right now.</div>
      )}
    </div>
  );
};

export default FootballTableLive;
