import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './msgDialog.css';
class Alert extends Component{

  constructor(props) {
    super(props);
    this.containerNode = React.createRef();
  }
  componentDidMount() {
    console.log('1')
    setTimeout(() => {
      this.containerNode.current.style.opacity = 1;
      this.containerNode.current.style.height = "200px";
    }, 0);
    
  }
  // 关闭弹框
  confirm = () => {
    this.props.closeAlert();
    this.props.parentNode.parentNode.removeChild(this.props.parentNode);
  }

  render(){
    return (
      <div className="msgDialog-con" ref={this.containerNode}>
        <div className="msgDialog-title">危险源报警</div>
        <div className="msgDialog-content">危险源报警xxxxxxx</div>
          <div className="msgDialog-btns">
            <div className="btns-comfirm" onClick={this.confirm}>处理</div>
            <div className="btns-close" onClick={this.confirm}>关闭</div>
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