class Observer {
  constructor() {
    this.handle = [];
  }
  addSubscribe(topic, fn) {
    this.handle.push({ topic: topic, fn: fn });
    console.log(this.handle);
  }
  removeSubscribe(topic, fn) {
    let index;
    this.handle.forEach(function (data, i) {
      if (data.topic == topic && data.fn == fn) {
        index = i;
      }
    });
    delete this.handle[index];
    console.log(this.handle);
  }
  publish(topic, message) {
    this.handle.forEach(function (data) {
      if (data.topic == topic) {
        data.fn(message);
      }
    })
  }
}