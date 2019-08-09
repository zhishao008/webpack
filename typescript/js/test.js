/**基础类型 */
/** 布尔*/ var isDone = false;
/**数字 */ var decLiteral = 6;
/**字符串 */ var newstr = "str";
/**数组 */
var list = [1, 2, 3]; // 普通声明方式
var list1 = [1, 2, 3]; //使用数组泛型声明
/**
 * 元组 Tuple
 * 允许表示一个已知元素数量和类型的数组
 * */
var x = ["hello", 12];
/**
 * 枚举
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green; // console.log(c);  1
/**
 * Any 未指定的类型
 */
var notSure = 4;
var arraylist = [1, "dd"];
/**
 * Void  表示没有任何类型
 */
function warnUser() { }
var unusable = undefined || null;
/**
 * null 和 undefined 是所有类型的子类型，可以把null和undefined赋值给其他类型
 */
/**
 * Never类型表示的是那些用不存在的值的类型
 */
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
/**
 * 【类型断言】 两种语法
 */
var someValue = "this is";
var strLength = someValue.length;
var someValues = "this is s";
var strLengths = someValues.length; //JSX只支持此种方式
