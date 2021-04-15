import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';
import Asteroid from '../Asteroid/Asteroid';
import Destroy from '../Destroy/Destroy';
import Main from '../Main/Main';

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}><Main /></Route>
        <Route exact path={AppRoute.DESTROY}><Destroy /></Route>
        <Route exact path={AppRoute.ASTEROID}><Asteroid /></Route>
      </Switch>
    </Router>
  );
}

export default App;
