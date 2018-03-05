export default class Stack {
  constructor() {
    this.data = [];
  }

  push(map) {
    this.data.push(map);

    return this;
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  get self() {
    return this;
  }
}
