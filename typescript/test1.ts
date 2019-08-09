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
// https://www.tslang.cn/docs/handbook/interfaces.html
