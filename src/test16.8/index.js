import React, { Component } from 'react';
import RenderTest from './renderTest';
//import ErrorBoundAry from './errorBoundary';  //异常捕获
import CreatePortal from "./createPortal";
import Fragment from "./fragment/fragment";
import Provider from "./context/provider";
import Consumer from "./context/consumer";
import RenderProps from "./render props/mouseTracker";
import ForwardRef from "./forwardRef";
import Fiber from "./fiber";
import Hooks from "./hooks/index";
import Lazy from "./lazy-suspense/lazy";
export default class Index extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      name: "lizhi",
      age: 30
    }
    // this._checkoutDialog = this._checkoutDialog.bind(this);
  }
  componentDidMount(){
      console.log(this.myRef)
  }
  //生命周期测试
  fibers = () => {
    this.setState({name:"zhishao"})
  }
  fiberss = () => {
    this.setState({age: 20})
  }
  _checkoutDialog = v => {
    console.log("_checkoutDialog = " + v);
    this.props.changeStatus(v);
  }
  render() {
    const { status } = this.props;
    console.log("dialogStatus = " + status);
    return (
      <div className="root">
        <hr />
        <div ref={this.myRef}>ref</div>
        <hr />
        <RenderTest />
        <hr />
        {/* <ErrorBoundAry /> */}
        <hr />
        <h2><button onClick={()=>this._checkoutDialog(true)}>弹出 一个 Dialog</button></h2>
        { status ? <CreatePortal><span onClick={()=>this._checkoutDialog(false)}>I am a Dialog</span></CreatePortal> : null }
        <hr />
        <Fragment />
        <hr />
        <Provider>
            <Consumer/>
        </Provider>
        <hr />
        {/* <RenderProps /> */}
        <ForwardRef name={this.state.name} age={this.state.age}/>
        <hr />
        <Fiber>   
          <button onClick={this.fibers}>props change1</button>
          <button onClick={this.fiberss}>props change2</button>
        </Fiber>
        <hr />
        <Lazy />
        <hr />
        <Hooks />
      </div>
    );
  }
}