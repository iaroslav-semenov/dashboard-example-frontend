import React from 'react';

import LoginForm from '../Components/Layouts/Login/LoginForm';

/** Storage */
import Store from '../Controll/Store';
import { loginWithCredentials } from '../Controll/Actions/Authorization';

class Auth extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        Store.dispatch(loginWithCredentials(event.target.login.value, event.target.password.value));
    }

    render() {
        return(
            <LoginForm
                onSubmit={ this.onSubmit.bind(this) }
                />
        );
    }
}

export default Auth;