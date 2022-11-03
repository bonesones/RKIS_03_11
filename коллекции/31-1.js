let elems = document.querySelectorAll('p');
let arr = [...elems];
console.log(arr);
arr = Array.from(elems);
console.log(arr)
arr = [];
for(const el of elems){
    arr.push(el)
}


console.log(arr)