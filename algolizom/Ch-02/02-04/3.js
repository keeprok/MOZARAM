class Queue {
  constructor() {
    this.stroge = {};
    this.front = 0;
    this.rear = 0;
  }

  add(value) {
    this.items[this.rear] = element;
    this.rear++;
  }

  popleft() {
    if (this.isEmpty()) return undefined;

    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.front === this.rear;
  }

  peek() {
    return this.items[this.front];
  }
}
