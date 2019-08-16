import React, { Component } from 'react';
export default class HiddenDangers extends Component {
    constructor(props){
      super(props);
      this.state = {
        list: [
          {id:1,name:"张三"},
          {id:2,name:"李四"},
          {id:3,name:"王五"}
        ]
      }
    }
    render(){
      const { list } = this.state;
        console.log(this.props.match.params.name);
        return (
        <div>
          <h1>HiddenDangersPage</h1>
          {list.map((value,index)=><div key={value.id}>{value.name}</div>)}
        </div>
        );
    }
}