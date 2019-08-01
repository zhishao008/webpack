import React, { Component } from "react";
import { createPortal } from "react-dom";
export default class Dialog extends Component{
    constructor(props){
        super(props);
        this.node = document.body;
        // document.body.appendChild(this.node);
    }
    render(){
        return createPortal(
            <div className="dialog">
                {this.props.children}
            </div>, 
            this.node
        )
    }
}