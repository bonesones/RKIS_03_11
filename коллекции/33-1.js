let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];


map.set(arr1, 'test1');
map.set(arr2, 'test2');
map.set(arr3, "test3");

console.log(map.get(arr1));
console.log(map.get(arr2))
console.log(map.get(arr3))