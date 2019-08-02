/**
 * 本次培训react使用是基于16.8.0版本
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from "./routeConfig";
import App from "./app";
import Login from "./component/login/login";
import HiddenDangers from "./component/hiddenDangers/index";
const routeConfig = <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/hidden' component={HiddenDangers} />
    </Switch>
</BrowserRouter>;
ReactDOM.render(routeConfig, document.body);
