import React, { Component } from 'react';
import echarts from 'echarts';
export default class EchartTest extends Component {
  constructor(props){
    super(props);
    this.bingtu = React.createRef();
    this.bingtu = React.createRef();
    this.bingtu = React.createRef();
    this.bingtu = React.createRef();
  }
  componentDidMount(){
    echarts.init(this.bingtu).setOption({
      series: {
          type: 'pie',
          data: [
              {name: 'A', value: 1212},
              {name: 'B', value: 2323},
              {name: 'C', value: 1919}
          ]
      }
    });
  }
  render() {
    return <div>
        <div ref={elem => this.bingtu = elem} style={{width: "600px",height:"400px"}}></div>
    </div>
  }
}
