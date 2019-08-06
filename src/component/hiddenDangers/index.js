import React, { Component } from 'react';
export default class HiddenDangers extends Component {
    render(){
        console.log(this.props.match.params.name);
        return <div>HiddenDangers</div>
    }
}