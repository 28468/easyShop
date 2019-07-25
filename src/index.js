import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home/home.js';
import './utils/_mixin.scss'
import './utils/common.scss'
// 引入mobx
import {Provider} from 'mobx-react';
import store from './store'

// 引入fastClick，解决300ms延迟
var FastClick = require('fastclick');
FastClick.attach(document.body);

ReactDOM.render(<Provider {...store}>
        <Home />
    </Provider>, document.getElementById('root'));