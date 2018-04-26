import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { Grid, Row, Col } from 'react-bootstrap';

import Auth from '../../lib/Auth';

class ApparelShow extends Component {
  // state = {
  //   brands: [],
  //   categories: [],
  //   query: '',
  //   categoryQuery: ''
  // }

  // componentDidMount() {
  //   Axios
  //     .get('/api/apparel/:id')
  //     .then(res => this.setState({ brands: res.data }))
  //     .catch(err => console.log(err));
  // }


  render() {
    return (
      <div>
        <h1>APPAREL SHOW PAGE</h1>
      </div>
    );
  }
}

export default ApparelShow;
