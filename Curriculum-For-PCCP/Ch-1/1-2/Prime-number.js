function sieveOfEratosthenes(number) {
  const s = new Set([2]); // 2를 초기 소수로 추가

  // 3부터 시작해 모든 홀수만 추가
  for (let i = 3; i <= n; i += 2) {
    s.add(i);
  }

  // 3부터 sqrt(n)까지 반복
  for (let j = 3; j <= Math.sqrt(n); j += 2) {
    if (s.has(j)) {
      // j의 배수 제거
      for (let k = j * j; k <= n; k += j * 2) {
        s.delete(k);
      }
    }
  }

  return Array.from(s);
}
// 내꺼 안되서 조이님껄로 수정
