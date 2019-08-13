/**
 * 函数
 */
function add(x:number, y:number):number{
    return x+y;
}
let myAdd = function(x:number,y:number):number{ return x+y};

let myAdds: (base:number, increat:number) => number = function(x:number,y:number):number{return x+y};

//函数类型包含两部分，参数类型和返回值类型

/**推断类型 */
let myAddss: (base:number, increat:number) => number = function(x,y):number{return x+y};

/**可选参数 */
//可选参数必须在必选参数后面
function buildName(first:string, last?:string):string{
    return "";
}
function buildNames(first:string, last = "smith"):string{
    return first + last;
}
let res = buildNames("zhi", undefined);
//默认参数初始化 都是可选的  和 可选参数是一样的
/**剩余参数 */
function buildN(first: string, ...restOfName: string[]):string{
    return first + restOfName.join("");
}
let buildNFun: (fname: string, ...rest: string[]) => string = buildN;
let emName = buildN("sjsj","sjjs","fasdf");
/**【this参数】 需要好好看看 */

/** 
 * 重载 
 * 为同一个函数提供多个函数类型定义来进行函数重载
 * */
function pickCard(x:{suit:string;card:number;}[]):number;
function pickCard(x:number):{suit: string;card:number};
function pickCard(x):any{}