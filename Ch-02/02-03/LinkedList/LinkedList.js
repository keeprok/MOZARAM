// Node를 만들어주는 생성자 함수
function Node(data) {
  this.data = data;
  this.next = null;
}

// 연결리스트로 스택 구현
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // 스택에 데이터 추가
  push(value) {
    const newNode = new Node(value); // 새 노드 생성
    newNode.next = this.top; // 새 노드의 next가 기존 top을 가리킴
    this.top = newNode; // 새 노드를 스택의 새로운 top으로 설정
    this.size++; // 스택 크기 증가
  }

  // 가장 최근에 추가된 데이터 제거 및 반환
  pop() {
    if (this.isEmpty()) {
      throw new Error('스택이 비어 있습니다.');
    }
    const removedNode = this.top; // 제거할 노드
    this.top = this.top.next; // 두 번째 노드를 새로운 top으로 설정
    this.size--; // 스택 크기 감소
    return removedNode.value; // 제거한 노드의 데이터 반환
  }

  // 스택의 맨 위에 있는 데이터 확인
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.value;
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.size === 0;
  }

  // 스택의 크기 확인
  size() {
    return this.size;
  }
}
