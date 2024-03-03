import React from 'react';
import { Link } from 'react-router-dom';

const NoFoundPage = () => (
  <div>
    404 Not Found
    <Link to="/">Home</Link>
  </div>
);

export default NoFoundPage;
