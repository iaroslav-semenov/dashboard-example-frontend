import React, { PropTypes } from 'react';
import { render } from 'react-dom';

import Footer from './Shared/Footer';
import Navigation from './Dashboard/Navigation';
import Contentblock from './Dashboard/Contentblock';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Contentblock/>
                <Footer/>
            </div>
        );
    }
}

export default Dashboard;