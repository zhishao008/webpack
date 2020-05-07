import React, { Component } from 'react';
import echarts from 'echarts';
import options from "./options";
export default class EchartTest extends Component {
  constructor(props){
    super(props);
    this.ChartLine1 = React.createRef();
    this.ChartLine2 = React.createRef();
    this.ChartLine3 = React.createRef();
    this.ChartLine4 = React.createRef();
    this.Histogram1 = React.createRef();
    this.Histogram2 = React.createRef();
    this.ChartPie1 = React.createRef();
    this.ChartPie2 = React.createRef();
  }
  componentDidMount(){
    echarts.init(this.ChartLine1).setOption(options.ChartLine1);
    echarts.init(this.ChartLine2).setOption(options.ChartLine2);
    echarts.init(this.ChartLine3).setOption(options.ChartLine3);
    echarts.init(this.ChartLine4).setOption(options.ChartLine4);
    echarts.init(this.Histogram1).setOption(options.Histogram1);
    echarts.init(this.Histogram2).setOption(options.Histogram2);
    echarts.init(this.ChartPie1).setOption(options.ChartPie1);
    echarts.init(this.ChartPie2).setOption(options.ChartPie2);
  }
  render() {
    return <div style={{ display: "flex", margin: "20px 0", flexWrap: "wrap"}}>
        <div ref={elem => this.ChartLine1 = elem} style={{width: "560px",height:"300px", border: "1px solid #ccc"}}></div>
        <div ref={elem => this.ChartLine2 = elem} style={{width: "560px",height:"300px", border: "1px solid #ccc"}}></div>
        <div ref={elem => this.ChartLine3 = elem} style={{width: "560px",height:"300px", border: "1px solid #ccc"}}></div>
        <div ref={elem => this.ChartLine4 = elem} style={{width: "560px",height:"300px", border: "1px solid #ccc"}}></div>
        <div ref={elem => this.Histogram1 = elem} style={{width: "560px",height:"300px", border: "1px solid #ccc"}}></div>
        <div ref={elem => this.Histogram2 = elem} style={{width: "560px",height:"300px", border: "1px solid #ccc"}}></div>
        <div ref={elem => this.ChartPie1 = elem} style={{width: "560px",height:"300px", border: "1px solid #ccc"}}></div>
        <div ref={elem => this.ChartPie2 = elem} style={{width: "560px",height:"300px", border: "1px solid #ccc"}}></div>
    </div>
  }
}
