import React from 'react';

import LoginForm from '../Components/Layouts/Login/LoginForm';

/** Storage */
import Store from '../Controll/Store';
import * as Actions from '../Controll/Actions/Authorization';

class Login extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const { username, password } = event.target;

        if (username.value == 'user' && password.value == '123') {
            Store.dispatch(Actions.login(username.value));
        } else {
            console.log('Incorrect username and password');
        }
    }

    render() {
        return(
            <LoginForm
                onSubmit={ this.onSubmit.bind(this) }
                />
        );
    }
}

export default Login;