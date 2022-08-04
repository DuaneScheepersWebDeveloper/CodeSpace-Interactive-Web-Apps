const userInputNumber = () => {
	let number = document.getElementById('myInputNumber').value;
	console.log(number);
	changeNumber(number);
};

const changeNumber = (number) => {
	if (number % 2 == 0) {
		document.getElementById(
			'changeNumber'
		).innerHTML = `<h2 style="color:green;">${number} is an even number</h2>`;
		alert('The number is even.');
		console.log('The number is even.');
	} else {
		document.getElementById(
			'changeNumber'
		).innerHTML = `<h2 style="color:red;">${number} is an Odd number</h2>`;
		alert('The number is odd.');
		console.log('The number is odd.');
	}
};
