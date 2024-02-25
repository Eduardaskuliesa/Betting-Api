import router from 'pages/navigation/router';
import React from 'react';
import {
  RouterProvider,
} from 'react-router-dom';

const App = () => (
  <RouterProvider router={router} />
);

export default App;
