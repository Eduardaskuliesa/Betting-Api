import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import FootBallLivePage from 'pages/footbalLivePage';
import FootBallMatchDetailsPage from 'pages/footballMatchDetailsPage';

const router = createBrowserRouter([
  {
    children: [
      {
        index: true,
        element: <FootBallLivePage />,
      },
      {
        path: '/matchdetails/:matchId',
        element: <FootBallMatchDetailsPage />,
      },
    ],
  },
]);

export default router;
