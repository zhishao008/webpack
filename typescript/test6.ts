/**枚举 */
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
//不初始化 默认是从0 开始

//字符串枚举
enum Directions {
    up = "up",
    down = "down"
}
//异构枚举  可以混合枚举，但是不建议这么使用
enum Heter{
    no = 0,
    yes = "yes"
}

enum E { x } // x=0

//反向映射
enum Enum { A }
let a = Enum.A;
let nameOfA = Enum[a];   //  "A"

//常量枚举  不允许包含计算成员
const enum HHH { a, b ,c};
//外部枚举
declare enum Enums {
    A = 1,
    B,
    C = 2,
}


/**类型推论 */
// 最佳通用类型   上下文类型

/**迭代器 和  生成器 */
//当一个对象实现了Symbol.iterator属性时，我们认为它是可迭代的。 
//一些内置的类型如 Array，Map，Set，String，Int32Array，Uint32Array等都已经实现了各自的Symbol.iterator。 对象上的 Symbol.iterator函数负责返回供迭代的值
//for..of  迭代的是值  关注于迭代对象的值
//for..in  迭代的是键  可以操作任何对象
// 生成器  代码生成   ES6 => es3