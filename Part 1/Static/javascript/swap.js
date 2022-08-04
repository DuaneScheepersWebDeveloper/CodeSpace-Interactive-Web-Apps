let varOne = prompt('Enter first variable');
let varTwo = prompt('Enter second variable');

let varThree;
varThree = varOne;
varOne = varTwo;
varTwo = varThree;

console.log(`The value of varOne after swapping is: ${varOne}`);
console.log(`The value of varTwo after swapping is: ${varTwo}`);

const appElement = document.getElementById('app');
appElement.innerHTML += `The value of varOne after swapping is: ${varOne}`;
appElement.innerHTML += '<br><br>';
appElement.innerHTML += `The value of varTwo after swapping is: ${varTwo}`;
