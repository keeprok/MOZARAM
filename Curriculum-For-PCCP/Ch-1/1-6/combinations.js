function getCombinations(arr, selectNumber) {
  if (selectNumber === 1) return arr.map((el) => [el]);

  const result = [];

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    // 이부분만차이가 나는데 중복된 조합을 방지하는 방식이 된다
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    result.push(...attached);
  });

  return result;
}

// 예시 실행
console.log(getCombinations([1, 2, 3, 4], 2)); // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
