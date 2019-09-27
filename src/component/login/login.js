/**
 * 展示组件
 */
import React, { Component } from 'react';
export default class Login extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <div>
      <h1>Login Page</h1>
      <h2>这里展示的是ducks层的数据name： {this.props.name}</h2>
      <hr />
      <h2><button onClick={this._changeName}>Change name</button></h2>
      <hr />
      <h2><button onClick={this._goApp}>Go app page</button></h2>
      <hr />
      <h2><button onClick={this._goHidden}>Go hidden page</button></h2>
    </div>
  }

  _changeName = () => {
    this.props.changeName("admin1")
  }
  _goApp = () => {
    window.goRoute("app");
  }
  _goHidden = () => {
    window.goRoute({ pathname: 'hidden' });
  }
}
