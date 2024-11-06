// 최빈값 구하기
function solution(array) {
  const frequencyMap = new Map();

  // 각 요소의 빈도를 계산
  array.forEach((num) => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  });

  // 최빈값 찾기
  let maxFrequency = 0;
  let mode = -1;
  let isDuplicate = false;

  for (const [num, frequency] of frequencyMap.entries()) {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      mode = num;
      isDuplicate = false;
    } else if (frequency === maxFrequency) {
      isDuplicate = true;
    }
  }

  // 최빈값이 여러 개일 경우 -1 반환
  return isDuplicate ? -1 : mode;
}
