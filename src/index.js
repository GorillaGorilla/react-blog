import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
    <Provider>
        <BrowserRouter>
        <div>
            <Route path='/' component={PostsIndex}/>
        </div>
        </BrowserRouter>
    </Provider>
    
    , document.getElementById('root'));
registerServiceWorker();
