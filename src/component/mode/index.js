import React, { Component } from 'react';
import Observer from './observer';
import Publisher from './publish';
import Subscriber from './subscribe';
export default class Mode extends Component {
  render() {
    return <div>
      Mode
      <Observer />
      <Publisher />
      <Subscriber />
    </div>
  }
}
