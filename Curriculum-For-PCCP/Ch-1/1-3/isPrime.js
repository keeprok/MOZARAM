function isPrime(num) {
  if (num <= 1) return false; // 1 = 소수가 아님
  if (num === 2) return true; // 2 = 소수
  if (num % 2 === 0) return false; // 2를 제외한 짝수는 소수가 아님

  const sqrt = Math.sqrt(num); // 제곱근 확인
  for (let i = 3; i <= sqrt; i += 2) {
    // 홀수만 검사
    if (num % i === 0) return false;
  }

  return true;
}
