import React, { Component } from 'react';
import RenderProps2 from "./renderProps";
import { Counter } from "./hooks";
export default class Mode extends Component {
  render() {
    return <div>
      <h1>函数复用对比</h1>
      <p>高阶函数  renderProps  Hooks</p>
      <RenderProps2 />
      <Counter />
    </div>
  }
}
