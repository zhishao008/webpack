import App from "./app";
import Login from "./component/login/login";
import HiddenDangers from "./component/hiddenDangers/index";
// import { Router,Route } from "react-router-dom";
// import React from "react";
const routes = [
    {path: "/",component: App, name:"app"},
    {path: "/login",component: Login, name: "login"},
    {path: "/hiddenDangers", component: HiddenDangers, name:"hiddenDangers"}
]
// const routeConfig = <Router>
//     <Route path="/" component={App}>
//     <Route path="about" component={Login} />
//     <Route path="inbox" component={HiddenDangers} />
//     </Route>
// </Router>
export default routes;