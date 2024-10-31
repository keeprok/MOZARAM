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

function solution(n, m) {
  return [getGcdFun(n, m), getLcmFun(n, m)];
}
