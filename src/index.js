import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Clock from './component/Clock';

ReactDOM.render(<Clock />, document.getElementById('root'));
registerServiceWorker();
