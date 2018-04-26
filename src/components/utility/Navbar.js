import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/" className="navbar-item">Home</Link>
        {' '}
        <Link to="/events" className="navbar-item">Events</Link>
        {' '}
        { !!Auth.isAuthenticated() && <Link to="/apparel" className="navbar-item">Apparel</Link>}
        {' '}
        {/* <h1>CLK:WRK</h1> */}
        {' '}
        {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
        {' '}
        { !Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
        {' '}
        { !!Auth.isAuthenticated() && <a href="#" className="navbar-item" onClick={logout}>Logout</a>}
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
