import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { Grid, Row, Col } from 'react-bootstrap';

import Auth from '../../lib/Auth';

class EventsIndex extends Component {
  state = {
    events: [],
    // categories: [],
    // query: '',
    // categoryQuery: ''
  }

  componentDidMount() {
    Axios
      .get('/api/events')
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      <Grid className="container">
        <Row className="container">
          { this.state.events.map(event => {
            return(
              <Col key={event.id} xs={6} sm={4} md={4} lg={4}>
                <Link to={`/events/${event.id}`}>
                  <div className="image-container" style={{ backgroundImage: `url('${event.image1}')` }}>
                    <p className="event-title">{event.name}</p>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Grid>
    </div>
    );
  }
}

export default EventsIndex;
