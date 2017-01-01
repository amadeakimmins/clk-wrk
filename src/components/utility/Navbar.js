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
        <Link to="/" className="navbar-item"><i className="fa fa-home"></i> Home</Link>
        {' '}
        <Link to="/events" className="navbar-item"><i className="fa fa-shopping-bag"></i> Events</Link>
        {' '}
        { !!Auth.isAuthenticated() && <Link to="/apparel" className="navbar-item"><i className="fa fa-user"></i> Apparel</Link>}
        {' '}
        {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item"><i className="fa fa-sign-in"></i> Login</Link>}
        {' '}
        { !Auth.isAuthenticated() && <Link to="/register" className="navbar-item"><i className="fa fa-edit"></i> Register</Link>}
        {' '}
        { !!Auth.isAuthenticated() && <a href="#" className="navbar-item" onClick={logout}><i className="fa fa-sign-out"></i> Logout</a>}
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
