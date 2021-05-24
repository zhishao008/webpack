import React, { Component } from 'react';
import RenderProps2 from "./renderProps";
import { Counter } from "./hooks";
export default class Mode extends Component {
  state = {
    a:'123'
  }
  render() {
    return <div>
      <h1>函数复用对比</h1>
      <p>高阶函数  renderProps  Hooks</p>
      <RenderProps2 />
      <Counter aa={this.state.a}>
        <div>1233123123123131</div>
      </Counter>
      <div onClick={()=>this.setState({ a: '321'})}></div>
    </div>
  }
}
