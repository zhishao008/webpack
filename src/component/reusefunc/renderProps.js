import React from 'react';
// https://www.cnblogs.com/monsterooo/p/8799447.html
// const Bar = () => (<p>我是Bar组件</p>);
// const Foo = ({ title, component }) => (
//   <div>
//     <p>{title}</p>
//     {component()}
//   </div>
// );
// export class RenderProps1 extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>这是一个示例组件</h2>
//         <Foo title={<p>大家好，我是土豆</p>} component={() => <Bar /> } />
//       </div>
//     );
//   }
// }


const Bar = ({ title }) => (<p>{title}</p>);

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '我是一个state的属性' };
  }
  render() {
    const { render } = this.props;
    const { title } = this.state;
    
    return (
      <div>
        {render(title)}
      </div>
    )
  }
}

export default class RenderProps2 extends React.Component {
  renderFoo(title) {
    return <Bar title={title} />;
  }
  render() {
    return (
      <div>
        <h2>这是一个示例组件</h2>
        <Foo render={this.renderFoo} />
      </div>
    );
  }
}