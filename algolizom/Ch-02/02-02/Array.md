## 배열의 시간 복잡도

#### O(1)

- push
  - 기존 배열의 가장끝에 특정 요소를 추가하는 메소드
  - 배열을 순회할필요없이 사용되기때문에 O(1)
    ex) const arr =[1,2,3]
    arr.push(4)
    console.log(arr); // [1,2,3,4]
- pop
  - 기존 배열의 가장 끝에 요소를 제거하는 메소드
  - 배열을 순회할 필요없어 O(1)
    ex) const arr =[1,2,3,4,5]
    arr.pop(5)
    console.log(arr); // [1,2,3,4]

#### 0(n)

- unshift

  - 기존 배열의 가장 앞에 특정요소를 추가하는 메소드
  - idx로 봤을때 0번이였던부분이 특정 요소 때문에 idx가 1로변경 되는식으로 배열을 순회하기때문에 O(n)
    ex) const arr = [ 1, 2, 3, 4 ]
    arr.unshift( 0 )
    console.log(arr); // [0,1,2,3,4]

- splice

  - 기존 배열의 중간에 특정요소를 추가하는 메소드
  - 특정요소가 특정위치에 추가되면 idx를 재부여 가 필요하므로 O(n)
    ex) const arr = [1, 2, 4, 5];
    arr.splice(2, 0, 3);
    console.log(arr); // [1, 2, 3, 4, 5]

- concat, slice, shift

  - 배열을 이어주고 , 자르고 ,값을 삭제형식 (spread?)
  - idx를 조정해야한다 O(n)

  #### concat

      ex) const arr1 = [1, 2];
      const arr2 = [3, 4];
      const result = arr1.concat(arr2);
      console.log(result); // [1, 2, 3, 4]

  #### slice

      ex) const arr = [1, 2, 3, 4, 5];
      const sliced = arr.slice(1, 4);
      console.log(sliced); // [2, 3, 4]

  #### shift

      ex) const arr = [1, 2, 3, 4];
      arr.shift();
      console.log(arr); // [2, 3, 4]

- forEach, map, filter, reduce

  - 배열의 메서드도 결국 배열의 길이만큼 배열을 순회해야하므로 O(N)

  #### forEach

      ex) const arr = [1, 2, 3, 4, 5];
      arr.forEach(num => console.log(num)); // [1, 2, 3, 4, 5]

  #### map

      ex) const arr = [1, 2, 3, 4, 5];
      const doubled = arr.map(num => num * 2);
      console.log(doubled); // [2, 4, 6, 8, 10]

  #### filter

      ex) const arr = [1, 2, 3, 4, 5];
      const filtered = arr.filter(num => num > 2);
      console.log(filtered); // [3, 4, 5]

  #### reduce

      ex) const arr = [1, 2, 3, 4, 5];
      const sum = arr.reduce((acc, num) => acc + num, 0);
      console.log(sum); // 15

#### O(NlogN)

- sort

  - 인자값으로 넘어온 함수에 따라 값을 정렬
  - 평균적으로 NlogN의 시간 복잡도를 가진다

    ex) const arr = [5, 3, 8, 1];
    arr.sort((a, b) => a - b); // 오름차순 정렬
    console.log(arr); // [1, 3, 5, 8]

- indexOf

  ex) const arr = [1, 2, 3, 4, 5];
  const index = arr.indexOf(3);
  console.log(index); // 2

- Arrary
