import React, { Component } from 'react';
import { subject1, subject2, Observer } from '../../logic/observer';
export default class Observers extends Component {
  componentDidMount() {
    /**模拟观察者模式  添加观察者 */
    let obs1 = new Observer((data) => { console.log("ob1" + data); });
    let obs2 = new Observer((data) => { console.log("ob2" + data) });
    let obs3 = new Observer((data) => { console.log("ob3" + data) });
    let obs4 = new Observer((data) => { console.log("ob4" + data) });
    subject1.add(obs1);
    subject1.add(obs2);
    subject2.add(obs3);
    subject2.add(obs4);
  }
  render() {
    return <div>
      <button onClick={this.publish1}>pub1</button>
      <button onClick={this.publish2}>pub2</button>
    </div>
  }
  publish1 = () => {
    /**模拟观察者模式  主题目标发送消息 */
    subject1.notify('zhuti 1');
  }
  publish2 = () => {
    subject2.notify('zhuti 2');
  }
}
