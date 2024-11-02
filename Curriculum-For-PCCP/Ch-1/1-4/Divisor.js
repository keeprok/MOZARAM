///모든 수를 나눠서 약수 구하기

function getDdivisorsAll(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  return result;
}
/// 주어진 수의 절반을 대상으로만 확인하기

function getDivisorsHalf(n) {
  let result = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  result.push(num);
  return result;
}

/// 제곱근(Math.sqrt) 사용하기

function getresultSqrt(n) {
  const result = new Set();
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.add(i);
      result.add(n / i);
    }
  }
  return Array.from(result);
}
