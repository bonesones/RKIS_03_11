let div = document.querySelector('div')
let elems1 = document.querySelectorAll('p');     // NodeList
let elems2 = document.getElementsByTagName('p'); // HTMLCollection

let p = document.createElement('p');
div.append(p);
console.log(div.childNodes) //NodeList(8) [text, p, text, p, text, p, text, p]
console.log(div.children) //HTMLCollection(4) [p, p, p, p]