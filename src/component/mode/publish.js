import React, { Component } from 'react';
import { SubjectWork } from '../../logic/subpubsubject';
import { Publish } from '../../logic/subpub';
export default class Publisher extends Component {
  render() {
    return <div>
      <button onClick={this.publish1}>publish1</button>
      {/* <button onClick={this.publish2}>pub2</button> */}
    </div>
  }
  publish1 = () => {
    let pub = new Publish();
    pub.addSubject(SubjectWork);
    pub.publish(SubjectWork, 'lizhi');
  }
  // publish2 = () => {
  //   subject2.notify();
  // }
}
