const getMilk = () => {
	alert('My Javascript is working!');
};
//------------------------------------------------------------------
//Creating an alert
const userInput = () => {
	let myVar = document.getElementById('myInput').value;
	console.log(myVar);
	// alert(myVar);
	changeHeading(myVar);
};

const changeHeading = (myVar) => {
	document.getElementById(
		'change'
	).innerHTML = `<h2 style="color:red;">${myVar}</h2>`;
};
//------------------------------------------------------------------
//Wheres My Mouse
const docHeight = window.innerHeight;
const docWidth = window.innerWidth;
const printY = (e) => {
	let mouseY = e.clientY;
	let mouseX = e.clientX;
	if (mouseX < docWidth / 2 && mouseY < docHeight / 2) {
		document.getElementById(
			'reading'
		).innerHTML = `<h2  style="color:purple;">Its Top Left by ${mouseX} & ${mouseY}</h2>`;
	} else if (mouseX > docWidth / 2 && mouseY < docHeight / 2) {
		document.getElementById(
			'reading'
		).innerHTML = `<h2  style="color:orange;">Its Top Right by ${mouseX} & ${mouseY}</h2>`;
	} else if (mouseX > docWidth / 2 && mouseY > docHeight / 2) {
		document.getElementById(
			'reading'
		).innerHTML = `<h2  style="color:Green;">Its Bottom Right by ${mouseX} & ${mouseY}</h2>`;
	} else if (mouseX < docWidth / 2 && mouseY > docHeight / 2) {
		document.getElementById(
			'reading'
		).innerHTML = `<h2  style="color:red;">Its Bottom Left by ${mouseX} & ${mouseY}</h2>`;
	}
};
//------------------------------------------------------------------
//switch Statements
const showHide = (x) => {
	switch (x) {
		case 'html':
			document.getElementById(x).style.display = 'grid';
			break;
		case 'css':
			document.getElementById(x).style.display = 'grid';
			break;
		case 'js':
			document.getElementById(x).style.display = 'grid';
			break;
		default:
			console.log('invalid');
	}
};
