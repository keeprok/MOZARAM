// 배열의 평균값

function solution(numbers) {
  let answer = 0;
  for (i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return answer / numbers.length;
}
// 실제 제출 정답
function solution(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
// reduce를통해 **평균** 이라는 느낌을 쉽게 구현하는방법 (찾아보고 첨삭)
