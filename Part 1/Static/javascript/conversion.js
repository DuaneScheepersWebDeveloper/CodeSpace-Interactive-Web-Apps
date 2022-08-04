const convert = () => {
	let km = document.getElementById('km').value;
	let miles = km / 1.609;
	miles = miles.toFixed(4);
	console.log(km + ' kilometers');
	console.log(miles + ' miles');
	document.getElementById('res').innerHTML = ' ' + miles + ' miles';
};
