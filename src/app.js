import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';

import Root from './Components/Root';

/** Styles */
import 'bootstrap/dist/css/bootstrap.css';
import style from './Styles/global.scss';

/** Storage */
import Store from './Controll/Store';

render(<Root history={ browserHistory } store={ Store } />, document.getElementById('app'));
