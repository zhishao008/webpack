/**
 * 本次培训react使用是基于16.8.0版本
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from "./routeConfig";
import App from "./app.js";
import Login from "./component/login/login.js";
// let RouteConfig = 
// const Tacos = ({ match }) => (
//     // here's a nested div
//     <div>
//       {/* here's a nested Route,
//           match.url helps us make a relative path */}
//       <Route path={match.url + "/login"} component={Login} />
//     </div>
//   );

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>
  

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}>
        {/* <Route path='login' component={Login} /> */}
        {/* <Route path='/register' component={Register} /> */}
        <Route path="/app" component={HomePage} />
        <Route path="/users" component={UsersPage} />
        </Route>
    </Switch>
</BrowserRouter>, document.body);
