/**
 * 展示组件
 */
import React, { Component, memo, useMemo } from 'react';
import LoginChild from "./child";

export default class Login extends Component {
  constructor(){
    super();
    this.childLogin = React.createRef();
  }

  componentDidMount() {
    // console.log(this.props);
    console.log(this.childLogin.current.focus());
  }
  render() {
    return (
      <div>
        <LoginChild ref={this.childLogin}/>
        <h1>Login Page</h1>
        <h2>这里展示的是ducks层的数据name： {this.props.name}</h2>
        <hr />
        <h2>
          <button onClick={this._changeName}>Change name</button>
        </h2>
        <hr />
        <h2>
          <button onClick={this._goApp}>Go app page</button>
        </h2>
        <hr />
        <h2>
          <button onClick={this._goHidden}>Go hidden page</button>
        </h2>
      </div>
    );
  }

  _changeName = () => {
    this.props.uichangeName('uichangeName');
    this.props.changeName('changeName');
  };
  _goApp = () => {
    window.goRoute('app');
  };
  _goHidden = () => {
    window.goRoute({ pathname: 'hidden' });
  };
}
