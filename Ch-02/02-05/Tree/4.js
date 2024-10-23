class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // 트리의 삽입 메서드.
  insertNode(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  // 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드.
  contains(value) {
    if (this.value === value) {
      return true;
    }

    // 노드가 가진 자식 노드를 순회하는 반복문으로 노드의 children 배열을 탐색
    for (let i = 0; i < this.children.length; i++) {
      const childNode = this.children[i];
      if (childNode.contains(value)) {
        return true;
      }
    }
    // 전부 탐색했음에도 불구하고 찾지 못했다면 false return.
    return false;
  }
}
