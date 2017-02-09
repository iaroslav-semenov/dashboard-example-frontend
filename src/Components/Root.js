import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux'
import { render } from 'react-dom';

import Login from './Layouts/Login';
import Dashboard from './Layouts/Dashboard';
import NotFound from './Layouts/NotFound';

class Root extends React.Component {
    constructor(props) {
        super(props);

        this.props.store.subscribe(this.handleAuth.bind(this));
    }

    handleAuth() {
        if (this.props.store.getState().isAuthorized) {
            this.props.history.push('/');
        } else {
            this.props.history.push('/login');
        }
    }

    isAuthorized() {
        return this.props.store.getState().isAuthorized;
    }

    checkIfAuthorized(nextState, replace, callback) {
        console.log('checkIfAuthorized.next', nextState);

        if (!this.isAuthorized()) {
            replace('/login');
        }

        callback();
    }

    checkIfNotAuthorized(nextState, replace, callback) {
        console.log('checkIfNotAuthorized.next', nextState);

        if (this.isAuthorized()) {
            replace('/');
        }

        callback();
    }

    render() {
        return (
            <Provider store={ this.props.store }>
                <Router history={ this.props.history }>
                    <Route path="/" onEnter={ this.checkIfAuthorized.bind(this) }>
                        <IndexRoute component={ Dashboard }/>
                        <Route path="/dashboard" component={ Dashboard } />
                    </Route>
                    <Route path="/login" component={ Login } onEnter={ this.checkIfNotAuthorized.bind(this) } />
                    <Route path='*' component={ NotFound } />
                </Router>
            </Provider>
        );
    }
}

Root.PropTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default Root;