import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';

import Root from './Components/Root';

/** Styles */
import 'bootstrap/dist/css/bootstrap.css';
import style from './Styles/global.scss';

render(<Root history={ browserHistory } />, document.getElementById('app'));
