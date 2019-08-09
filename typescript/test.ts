/**基础类型 */

/** 布尔*/ let isDone: boolean = false;
/**数字 */ let decLiteral: number = 6;
/**字符串 */ let newstr: string = "str";
/**数组 */ 
let list: number[] = [1,2,3];  // 普通声明方式
let list1: Array<number> = [1,2,3];  //使用数组泛型声明
/**
 * 元组 Tuple 
 * 允许表示一个已知元素数量和类型的数组
 * */
let x: [string, number] = ["hello",12];
/**
 * 枚举
 */
enum Color { Red, Green, Blue};
let c: Color = Color.Green;   // console.log(c);  1
/**
 * Any 未指定的类型
 */
let notSure: any = 4;
let arraylist: any[] = [1,"dd"];
/**
 * Void  表示没有任何类型
 */
function warnUser(): void {}
let unusable: void = undefined || null;
/**
 * null 和 undefined 是所有类型的子类型，可以把null和undefined赋值给其他类型
 */
/**
 * Never类型表示的是那些用不存在的值的类型
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

/**
 * Object
 * 非原始类型
 */
declare function create(o:object | null):void;
/**
 * 【类型断言】 两种语法
 */
let someValue: any = "this is";
let strLength: number = (<string>someValue).length;

let someValues: any = "this is s";
let strLengths: number = (someValues as string).length;  //JSX只支持此种方式

