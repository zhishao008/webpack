// 目标者类
class Subject {
  constructor() {
    this.observers = [];  // 观察者列表
  }
  // 添加观察者
  add(observer) {
    this.observers.push(observer);
  }
  // 删除观察者
  remove(observer) {
    let idx = this.observers.findIndex(item => item === observer);
    idx > -1 && this.observers.splice(idx, 1);
  }
  // 通知观察者
  notify(data) {
    for (let observer of this.observers) {
      observer.update(data);
    }
  }
}

// 观察者类
export class Observer {
  constructor(callback) {
    this.callback = callback;
  }
  // 目标对象更新时触发的回调
  update(data) {
    this.callback(data);
  }
}

/**管理多个主题对象 */
export const subject1 = new Subject();
export const subject2 = new Subject();


//观察者模式 目标 可以增加观察者 删除观察者 通知观察者  一个目标和多个观察者之间的模式  目标发生变化 会通知多个观察者
