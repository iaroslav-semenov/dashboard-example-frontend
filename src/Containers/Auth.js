import React from 'react';

import LoginForm from '../Components/Layouts/Login/LoginForm';

class Auth extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        console.log(event);
        console.log('value', event.target.value);
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