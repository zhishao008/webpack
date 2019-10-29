
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from "./app";
import Login from "./container/login";
import Mode from "./component/mode";
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
    <Route exact path="/" component={Mode} />
    <Route path='/app' component={App} />
    <Route path='/mode' component={Login} />
  </Switch>
</BrowserRouter>;
ReactDOM.render(<Provider store={store}>{routeConfig}</Provider>, document.getElementById('root'));
