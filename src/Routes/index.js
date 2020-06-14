import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import history from './history';

import Main from '../pages/main';
import Profile from '../pages/profile';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/profile' component={Profile}/>
        </Switch>
    </Router>
);

export default Routes;