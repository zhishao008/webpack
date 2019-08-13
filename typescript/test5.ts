/**
 * 泛型
 */

 //泛型变量
 function logginIdentity<T>(arg: T[]):T[]{
     console.log(arg.length);
     return arg;
 }
 //同上
 function loggingIdenntity<T>(arg: Array<T>):Array<T>{
    console.log(arg.length);
    return arg;
 }

 logginIdentity(["sfa","fasd"]);
 loggingIdenntity(["sfa","fasd"]);

 /**泛型类型 */
 function identity<T>(arg: T):T{
     return arg;
 }
 //泛型函数1
 let ideninstances: <U>(arg: U) => U = identity;
 //泛型函数2
 let ideninstance: {<T>(arg: T):T} = identity;
 //泛型接口
 interface Gener{
     <T>(arg: T):T;
 }
 let idnentiasd: Gener = identity;

 interface GenersFn<T>{
     (arg: T):T;
 }
 let minsdefas: GenersFn<number> = identity;

 /**泛型类 */
 class Generclass<T>{
     zeroValue: T;
     add:(x:T, y:T) => T;
 }
 let myGen = new Generclass<number>();
 myGen.zeroValue = 0;
 myGen.add = function(x, y){return x+y};

 /**泛型约束 */
 interface Lengthwise{
     length: number;
 }
 function loggafjasldjf<U extends Lengthwise>(arg:U):U{
     console.log(arg.length);
     return arg;
 }
 