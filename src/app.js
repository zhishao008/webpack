import React, { Component } from 'react';
import './index.less';
// import ZhiReactIndex from "./test16.8";
import Login from "./container/login";
import { Router,Link,Route } from "react-router-dom";
const HomePage =() => <div>Home Page</div>
class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
       App fdddddddddddddddddddddddddddd
       {/* <Router>
        <Link to="/app">app</Link>
        <Route path="/app" component={HomePage} />
       </Router> */}
      </div>
    );
  }
}

export default App;