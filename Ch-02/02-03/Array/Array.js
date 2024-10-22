export default class Stack {
  constructor() {
    this.items = [];
  }

  // 데이터를 스택에 추가
  push(item) {
    this.items.push(item);
  }

  // 가장 최근에 추가된 데이터 제거 및 반환
  pop() {
    if (this.isEmpty()) {
      throw new Error('스택이 비어 있습니다.');
    }
    return this.items.pop();
  }

  // 스택의 가장 위에 있는 데이터 확인 , 확인후 제거 되는것이 아닌 유지된채 값만 받아옴
  peek() {
    if (this.isEmpty()) {
      throw new Error('스택이 비어 있습니다.');
    }
    return this.items[this.items.length - 1];
  }

  // 스택이 비어있는지 확인 , 비어있는경우 true를 반환
  isEmpty() {
    return this.items.length === 0;
  }

  // 스택의 크기 확인
  size() {
    return this.items.length;
  }
}
