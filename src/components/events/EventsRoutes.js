import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage from '../utility/HomePage';
import EventsIndex from './EventsIndex';
import EventsShow from  './EventsShow';
import Apparel from  '../apparel/Apparel';
import ApparelShow from  '../apparel/ApparelShow';



const BrandsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/events" component={EventsIndex} />
      <Route exact path="/events/:id" component={EventsShow} />
      <Route exact path="/apparel/" component={Apparel} />
      <Route exact path="/apparel/:id" component={ApparelShow} />

    </Switch>
  );
};

export default BrandsRoutes;
