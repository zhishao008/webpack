import React, { Component } from 'react';
class Login extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return <div>
            <div>login</div>
            <div>{this.props.name}</div>
            <button onClick={this._changeName}>change name</button>
        </div>
    }

    _changeName = () => {
        this.props.changeName("hahah")
    }
}
export default Login;