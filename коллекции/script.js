let inputs = document.querySelectorAll('input');
let map = new Map
let i = 1;
for(let elem of inputs){
    map.set(elem, i++);
}
for(let elem of inputs){
    elem.addEventListener('click', function() {
        this.value = map.get(elem);
    })
}