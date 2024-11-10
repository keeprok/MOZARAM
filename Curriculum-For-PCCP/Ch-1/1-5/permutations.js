function getPermutations(arr, selectNumber) {
  if (selectNumber === 1) return arr.map((el) => [el]);
  // getPermutations([1, 2, 3], 1) -> [[1], [2], [3]] 반환
  const result = [];

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // fixed를 제외하고 나머지 예를 들면[1, 2, 3] 중 fixed가 1일경우 rest는 [2,3]
    const permutations = getPermutations(rest, selectNumber - 1);
    // 위에서 한번더 반복하여 만약 selectNumber가 2일경우 [2], [3]
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    // attached = [1, 2], [1, 3]
    result.push(...attached);
    // 즉 위 3과정을 반복하면  [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]] 됨
  });

  return result;
}

// 예시 실행
console.log(getPermutations([1, 2, 3], 2)); // [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
