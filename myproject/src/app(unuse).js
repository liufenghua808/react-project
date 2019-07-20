import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import routes from './routes/route_config';
import renderRoutes from './routes/index';


class App extends Component {
  render() {
    console.log(routes)
    return (
      <Router>
        {renderRoutes(routes)}
      </Router>
    );
  }
}

export default App;