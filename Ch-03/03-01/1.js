function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // 현재 위치를 최소값으로 가정

    // i+1부터 끝까지 탐색하면서 최소값의 인덱스를 찾음
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 최소값을 현재 위치로 교환
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// 테스트
const array = [64, 25, 12, 22, 11];
console.log(selectionSort(array)); // [11, 12, 22, 25, 64]
