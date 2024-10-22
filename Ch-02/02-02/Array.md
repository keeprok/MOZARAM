## 배열의 시간 복잡도

#### O(1)

- push
  - 기존 배열의 가장끝에 특정 요소를 추가하는 메소드
  - 배열을 순회할필요없이 사용되기때문에 O(1)
    ex) const arr =[1,2,3]
    arr.push(4)
    arr= [1,2,3,4]
- pop
  - 기존 배열의 가장 끝에 요소를 제거하는 메소드
  - 배열을 순회할 필요없어 O(1)
    ex) const arr =[1,2,3,4,5]
    arr.pop(5)
    arr= [1,2,3,4]

#### 0(n)

- unshift

  - 기존 배열의 가장 앞에 특정요소를 추가하는 메소드
  - idx로 봤을때 0번이였던부분이 특정 요소 때문에 idx가 1로변경 되는식으로 배열을 순회하기때문에 O(n)
    ex) const arr = [ 1, 2, 3, 4 ]
    arr.unshift( 0 )
    arr= [0,1,2,3,4]

- splice

  - 기존 배열의 중간에 특정요소를 추가하는 메소드
  - 특정요소가 특정위치에 추가되면 idx를 재부여 가 필요하므로 O(n)

- concat, slice, shift
  - 배열을 이어주고 , 자르고 ,값을 삭제형식 (spread?)
  - idx를 조정해야한다 O(n)
- forEach, map, filter, reduce
  - 배열의 메서드도 결국 배열의 길이만큼 배열을 순회해야하므로 O(N)

#### O(NlogN)

- sort

  - 인자값으로 넘어온 함수에 따라 값을 정렬
  - 평균적으로 NlogN의 시간 복잡도를 가진다

- indexOf
- Arrary
