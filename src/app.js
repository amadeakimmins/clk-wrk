import React    from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>CLK:WRK</h1>
        <p>This website is sick</p>
      </div>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
