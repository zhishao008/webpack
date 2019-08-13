/**
 * 接口 interface
 */
//老的写法
function printLabel(labelledObj: { label:string }){

}
//新的接口式对参数的约束 写法
interface LabelPrint{
  label: string;
}

function printLabels(labelledObj: LabelPrint){

}
/**
 * 可选属性  color?: string  属性名后面加 冒号
 * 只读属性 readonly  ReadonlyArray<number>
 */
interface Point{
  color?: string;
  readonly blone: number;
}

/**
 * 函数类型
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function(source: string, subString: string) {
  return false;
}
/**
 * 可索引类型
 */
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ["bob","Fred"];
let myStr: string = myArray[0];
/**
 * 类类型
 */

// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date);
// }
// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime(d: Date){
//     this.currentTime = d;
//   }
//   constructor(h: number, m: number){};
// }

/**【重点】 */
interface ClockInterface{
  tick();
}
interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface;
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface{
  return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface{
  constructor(h:number, m:number){};
  tick(){
    console.log();
  }
}
let digital = createClock(DigitalClock, 12, 17);

/**
 * 继承接口
 */
interface Shape{
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}
let square = <Square>{}; // ?
square.color = "blue";
square.sideLength = 10;

interface PenStroke {
  penWidth: number;
}
interface Square1 extends Shape, PenStroke {  //继承多个
  sideHeight: number;
}
/**
 * 混合类型
 */
interface Counter {
  (start: number):string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number){};
  counter.interval = 123;
  counter.reset = function(){};
  return counter;
}

/**
 * 【接口继承类】
 * 接口会继承类的private 和 protected 的成员
 * 只有子类才可以实现继承父类的接口
 */
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl{
  select(){};
}
// class Image implements SelectableControl{  //没有继承Control 报错
//   select(){};
// }
//在上面的例子里，SelectableControl包含了Control的所有成员，包括私有成员state。 因为 state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。 因为只有 Control的子类才能够拥有一个声明于Control的私有成员state

