import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Navbar from './components/utility/Navbar';

// import 'bootstrap-css-only';
// import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar />
            <h1>CLK:WRK</h1>
          </header>
          <main>
            {/* <AuthenticationRoutes />
            <EventsRoutes /> */}
            <h1>Hello</h1>
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
