function primeNumber(n) {
  // 모든 수를 소수로 가정하고 true로 초기화
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

  // 제곱근까지만 반복
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        // 배수라면 소수가 아님 => false
        isPrime[j] = false;
      }
    }
  }

  // true 값만 배열로 출력
  return isPrime.map((isPrime, index) => (isPrime ? index : null)).filter((num) => num !== null);
}
