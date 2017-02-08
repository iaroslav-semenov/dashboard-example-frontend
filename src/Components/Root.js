import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import Login from './Layouts/Login';
import Dashboard from './Layouts/Dashboard';
import NotFound from './Layouts/NotFound';

class Root extends React.Component {
    constructor() {
        super();
    }

    checkAccess(nextState, replace, callback) {
        let isAuthorized = false;
        console.log('isAuthorized', isAuthorized);
        if (!isAuthorized) {
            replace('/login');
        }

        callback();
    };

    checkIfAuthorized(nextState, replace, callback) {
        let isAuthorized = false;

        if (isAuthorized) {
            replace('/');
        }

        callback();
    };

    render() {
        return (
            <Router history={ this.props.history }>
                <Route path="/" onEnter={ this.checkAccess }>
                    <IndexRoute component={ Dashboard }/>
                    <Route path="/dashboard" component={ Dashboard } />
                </Route>
                <Route path="/login" component={ Login } onEnter={ this.checkIfAuthorized } />
                <Route path='*' component={ NotFound } />
            </Router>
        );
    }
}

Root.PropTypes = {
    history: PropTypes.object.isRequired
};

export default Root;