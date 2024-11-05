// 분수의 덧셈
// 실패 코드
function solution(numer1, denom1, numer2, denom2) {
  let lcd = (denom1 * denom2) / gcd(denom1, denom2);
  let numer = numer1 * (lcd / denom1) + numer2 * (lcd / denom2);
  let answer = [numer, lcd];
  return answer;
}
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
// 성공 코드
function solution(numer1, denom1, numer2, denom2) {
  let lcd = (denom1 * denom2) / gcd(denom1, denom2);

  let numer = numer1 * (lcd / denom1) + numer2 * (lcd / denom2);

  let gcdValue = gcd(numer, lcd);

  let answer = [numer / gcdValue, lcd / gcdValue];

  return answer;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
// 차이점  > 분수로 만들고 즉시 제출했을경우 6/48 으로 나올경우 사실 6/48 = 1/8 과 같은 결과를 가져오는데 결과값으로서는[6.48] , [1,8] 전혀 다른 결과를 나타나게 되서
// let gcdValue = gcd(numer, lcd);
// let answer = [numer / gcdValue, lcd / gcdValue];
// 위 과정이 필요하다
