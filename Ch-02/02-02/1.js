//문제: Array.from() + 반복문을 이용해 2차원 배열을 값으로 초기화하려면? // 다시하기

let arr = Array.from(Array(4), () => Array.from(Array(5), () => 0));
console.log(arr);
