import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage from '../utility/HomePage';
import EventsIndex from './EventsIndex';


const BrandsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/events" component={EventsIndex} />
    </Switch>
  );
};

export default BrandsRoutes;
