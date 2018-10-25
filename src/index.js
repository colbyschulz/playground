import React from 'react';
import { render } from 'react-dom';

import App from './components/app';

const target = document.getElementById('root');

render(<App />, target);

module.hot.accept();