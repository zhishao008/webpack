import React, { Component } from 'react';
 
import Alert from "./alert.js";
import Test from "./test.js";
 
class Two extends Component {
    constructor(props){
        super(props);
        this.state = {
            num:1
        };
    }
 
    open=()=>{
      Alert({
        containerElem: document.getElementById("root"),
        contentElem: <Test aa="123"/>,
        alertTip:"这是一个测试弹框",
        closeAlert:function(){
            console.log("关闭了...");
        }
      });
    }
  createWs = () => {
    if(window.WebSocket){
        var ws = new WebSocket('ws://192.168.95.159:8090');

        ws.onopen = function(e){
            console.log("连接服务器成功");
            ws.send("game1");
        }
        ws.onclose = function(e){
            console.log("服务器关闭");
        }
        ws.onerror = function(){
            console.log("连接出错");
        }

        ws.onmessage = function(e){
            console.log("jjjjj")
        }
    }
  }
  render() {
    return (
       <div className="Two">
          <button onClick={this.open}>
          开启宝藏
          </button>
        <button onClick={this.createWs}>建立websocket</button>
       </div>
    );
  }
}
 
export default Two;