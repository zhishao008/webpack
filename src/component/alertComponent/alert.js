import React, { Component, Children } from 'react';
import ReactDOM from 'react-dom';
import './alert.css';
import { func } from 'prop-types';
class Alert extends Component{

  constructor(props) {
    super(props);
    this.containerNode = React.createRef();
  }
  componentDidMount() {
    console.log('1')
    const _this = this;
    setTimeout(function () {
      _this.containerNode.current.style.opacity = 1;
      _this.containerNode.current.style.width = "100%";
      _this.containerNode.current.style.height = "100%";
      _this.containerNode.current.style.transform = "scale(1)";
    }, 0);
    
  }
  // 关闭弹框
  confirm = () => {
    this.props.closeAlert();
    this.props.parentNode.parentNode.removeChild(this.props.parentNode);
  }

  render(){
    return (
      <div className="alert-con" ref={this.containerNode}>
          <div className="alert-context">
          <div className="alert-content-detail">{this.props.alertTip}</div>
            {this.props.contentElem}
            <div className="comfirm" onClick={this.confirm}>确认</div>
          </div>
        </div>
    );
  }
}
 
Alert.defaultProps = {
  alertStatus:false,
  alertTip:"提示",
  closeAlert: function () {
    
  },
  ani: ""
}

let mapDialog = (props) => {
  let div = document.createElement('div');
  const newProps = Object.assign({}, props, { parentNode: div })
  if (newProps.containerElem) {
    newProps.containerElem.appendChild(div);
  } else {
    document.body.appendChild(div);
  }
  return ReactDOM.render(React.createElement(
    Alert,
    newProps
  ),div);
};

export default mapDialog;