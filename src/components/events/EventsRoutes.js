import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage from '../utility/HomePage';

const BrandsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

export default BrandsRoutes;
