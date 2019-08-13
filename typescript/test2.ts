/**
 * 继承
 */

 class Animal {
     move(distance: number = 0){
         console.log(distance);
     }
 }
 class Dog extends Animal{
     bark(){
         console.log('brak');
     }
 }
 const dog = new Dog();

/**
0*派生类 
*派生类 包含构造函数，塔必须调用super(),他会执行基类的构造函数
*在构造函数访问this之前，一定要调用super() 
*/
class Ani {
    name: string;
    constructor(theName: string){ this.name = theName};
    move(value: number = 0){
        console.log(`move = ${value}`)
    }
}

class Sanke extends Ani {
    constructor(name: string){ super(name); };
    move(value = 5){
        super.move(value);
    }
}
let tom: Ani = new Sanke("edddd");
tom.move();
/**
 * 公共 public 私有 private 受保护 prtected 的修饰符
 * 默认为public
 * private 不能在声明他的类外部访问
 * protected 和 private 相似，但是它在派生类中仍然可以访问
 */
/**
 * readonly 修饰符  必须在声明时或者构造函数里 被 初始化
 */
/**
 * 静态属性  static 只能通过类来访问
 */
/**
 * 抽象类 作为其他派生类的基类使用  一般都不会被实例化
 * abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法
 * 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
 */
abstract class Animals{
    abstract makeSound():void; //必须在派生类中实现
    move(): void{ console.log()};
}

abstract class Department{
    constructor(public name:string){};
    printName():void{
        console.log("print name");
    }
    abstract printMeeting(value: string):void;
}

class AccountingDeparment extends Department {
    constructor(){
        super("account");  //在派生类的构造函数中必须调用super()
    }
    printMeeting(value: string):void{

    }
}
let department: Department;  //允许创建一个对抽象类的引用
department = new AccountingDeparment();

/**
 * 高级技巧
 */
