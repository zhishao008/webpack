import React, { Component } from 'react';
import { SubjectWork } from '../../logic/subpubsubject';
import { Subscribe } from '../../logic/subpub';
export default class Subscriber extends Component {
  componentDidMount() {
    let Sub1 = new Subscribe((data) => { console.log('sub1' + data) });
    let Sub2 = new Subscribe((data) => { console.log('sub2' + data) });
    SubjectWork.addSubscriber(Sub1);
    SubjectWork.addSubscriber(Sub2);
  }
  render() {
    return <div>

    </div>
  }

}
