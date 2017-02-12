import React from 'react';

import LogoutLink from '../Components/Layouts/Shared/LogoutLink';

/** Storage */
import Store from '../Controll/Store';
import * as Actions from '../Controll/Actions/Authorization';

class Logout extends React.Component {
    onClick(event) {
        event.preventDefault();

        Store.dispatch(Actions.logout());
    }

    render() {
        return(
            <LogoutLink
                onClick={ this.onClick.bind(this) }
                username={ Store.getState().Authorization.username }
                />
        );
    }
}

export default Logout;