function getGcdFun(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function getArrGcd(arr) {
  return arr.reduce((acc, cur) => getGcdFun(acc, cur));
}

function getDivideFun(gcd, arr) {
  return arr.every((num) => num % gcd !== 0);
}

function solution(a, b) {
  let gcdA = getArrGcd(a);
  let gcdB = getArrGcd(b);
  let answer = 0;

  if (getDivideFun(gcdA, b)) {
    answer = Math.max(answer, gcdA);
  }
  if (getDivideFun(gcdB, a)) {
    answer = Math.max(answer, gcdB);
  }

  return answer;
}
