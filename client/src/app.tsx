import NavBar from 'components/NavBar';
import router from 'navigation/router';
import FootBallLivePage from 'pages/footbalLivePage';
import FootBallMatchDetailsPage from 'pages/footballMatchDetailsPage';
import HomePage from 'pages/homePage';
import NoFoundPage from 'pages/noFoundPage';
import TennisLivePage from 'pages/tennisLivePage';
import React from 'react';
import {
  Route,
  RouterProvider, Routes,
} from 'react-router-dom';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="*" element={<NoFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/tennis" element={<TennisLivePage />} />
      <Route path="/football" element={<FootBallLivePage />} />
      <Route path="/football/:matchId" element={<FootBallMatchDetailsPage />} />
    </Routes>
  </>

);

export default App;
