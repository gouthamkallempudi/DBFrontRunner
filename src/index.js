import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User/User';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<User />, document.getElementById('root'));
registerServiceWorker();
