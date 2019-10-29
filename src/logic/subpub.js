/**
 * 发布订阅模式
 * 发布者 add 主题 add 订阅者
 */

//发布者
class Publish {
  constructor() {
    this.subjectList = [];
  }
  //添加要发布的主题
  addSubject(subject) {
    this.subjectList.push(subject);
  }
  //移除要发布的主题
  removeSubject(subject) {
    let index = this.subjectList.indexOf(subject);
    if (index !== -1) {
      this.subjectList.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
  //发布某个主题的更新
  publish(subject, data) {
    this.subjectList.forEach(item => item === subject && item.notify(data));
  }
}
//主题
class Subject {
  constructor(callback) {
    //订阅者列表
    this.subscribers = [];
    //每个主题更新数据的方法不一样，所以需要传进来
    this.callback = callback || function (data) { console.log(data) }; //暂时不用
  }
  //添加订阅者
  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
    return this;
  }
  //通知订阅者
  notify(data) {
    //通知此主题所有订阅者更新数据
    this.subscribers.forEach(item => item.update(this.callback, data))
  }
}
//订阅者（Watcher）
class Subscribe {
  constructor(callback, val) {
    this.val = val || '';  //暂时不用
    this.callback = callback || function () { };
  }
  update(callback, data) {
    this.callback(data);
  }
}

export { Subject, Subscribe, Publish };