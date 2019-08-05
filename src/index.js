/**
 * 本次培训react使用是基于16.8.0版本
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import routes from "./routeConfig";
import App from "./app";
import Login from "./container/login";
import HiddenDangers from "./component/hiddenDangers/index";

import rootReducers from "./ducks/index";
window.logger = {
    info: (v) => {
        console.log(v);
    }
}
const store = createStore(rootReducers);    
window.$getState = store.getState();
const routeConfig = <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/hidden' component={HiddenDangers} />
    </Switch>
</BrowserRouter>;
ReactDOM.render(<Provider store={store}>{routeConfig}</Provider>, document.body);
