class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // 요소 삽입: [값, 우선순위] 형태로 저장
  enqueue(value, priority) {
    this.queue.push({ value, priority });
    // 우선순위에 따라 정렬 (작은 수가 높은 우선순위)
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  // 우선순위가 가장 높은 요소 제거
  dequeue() {
    return this.queue.shift(); // 가장 앞의 요소 반환 및 삭제
  }

  // 큐가 비어 있는지 확인
  isEmpty() {
    return this.queue.length === 0;
  }
}
