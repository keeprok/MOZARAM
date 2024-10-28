// 유클리드 호제법을 사용한 GCD 계산 함수
function getGcdFun(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

// 최소공배수(LCM) 계산 함수
function getLcmFun(a, b) {
  return (a * b) / getGcdFun(a, b);
}

// 테스트 실행
console.log(getGcdFun(10, 35)); // 출력: 5
console.log(getLcmFun(10, 35)); // 출력: 70
