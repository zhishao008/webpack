
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from "./app";
import Login from "./container/login";
import EchartTest from "./component/echartTest";
import AlertComponent from "./component/alertComponent";
import Mode from "./component/mode";
import Reusefunc from "./component/reusefunc";
import { createBrowserHistory } from 'history';

import rootReducers from "./ducks/index";
const history = createBrowserHistory();
window.logger = {
  info: (v) => {
    console.log(v);
  }
}
window.goRoute = v => {
  history.push(v);
  history.go();
}
const store = createStore(rootReducers);
window.$getState = store.getState();
const routeConfig = <BrowserRouter>
  <Switch>
    <Route exact path="/" component={EchartTest} />
    <Route path="/echart" component={EchartTest} />
    <Route path="/mode" component={Mode} />
    <Route path='/app' component={App} />
    <Route path='/login' component={Login} />
    <Route path='/reusefunc' component={Reusefunc} />
  </Switch>
</BrowserRouter>;
ReactDOM.render(<Provider store={store}>{routeConfig}</Provider>, document.getElementById('root'));
