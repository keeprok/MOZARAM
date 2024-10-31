function getGcdFun(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function getLcmFun(a, b) {
  return (a * b) / getGcdFun(a, b);
}

function solution(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = getLcmFun(result, arr[i]);
  }
  return result;
}
