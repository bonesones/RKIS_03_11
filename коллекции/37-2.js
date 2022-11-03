let elems = document.querySelectorAll('input');

let map = new Map;
let inputArr = [];

for (let elem of elems) {
	elem.addEventListener('keyup', function(event) {
		if (event.keyCode == 13) {
			inputValue.push(this.value);
		}
	});
	elem.onblur = function() {
		console.log(inputValue);
	}
}
