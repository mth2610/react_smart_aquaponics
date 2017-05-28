import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './views/Home';
import Services from './views/Services';
import CountCircles from './views/Services/CountCircles';
import Sites from './views/Monitoring';
import Details from './views/Monitoring/Details'
import 'semantic-ui-css/semantic.min.css';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/services'} component={Services}/>
          <Route path={'/services/count_circles'} component={CountCircles} />
          <Route exact path={'/monitoring'} component={Sites} />
          <Route path={'/monitoring/details'} component={Details} />
        </Switch>
      </Router>
    );
  }
}

export default App;
