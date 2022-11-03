let elems = document.querySelectorAll('p');
elems.forEach(elem => console.log(elem))// работает;
elems.map(el => el + 2)//не работает
elems.push("1");//не работает

