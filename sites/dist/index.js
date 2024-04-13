import './index.html'
import './index.scss'
import './modules/task.js'
// import { mult, sum} from './modules/calc.js'

const input3 = document.getElementById("input3");
const btnResult = document.getElementById("buttonResult");
let sign = '';
let numberString1 = '';
let numberString2 = '';

document.getElementById('numberContainer')
  .addEventListener('click', (event) => {
		// Getting value on click
		let contentValue = event.target.value;
		// The condition for arithmetic signs
    if (event.target.nodeName.toLowerCase() === 'button' && contentValue === '+' || contentValue === '-' || contentValue === '*' || contentValue === '/' || contentValue === '**') {
			sign = contentValue;
			numberString2 = numberString1;
			numberString1 = '';
		}
		// The condition for root extraction
		else if (event.target.nodeName.toLowerCase() === 'button' && contentValue === 'sqrt'){
			sign = contentValue;
			numberString2 = Math.sqrt(numberString1)
		}
		// The condition for changing the sign of a number
		else if (event.target.nodeName.toLowerCase() === 'button' && contentValue === '+-') {
			numberString1 *= -1;
			input3.value = numberString1
		}
		// Clear all
		else if (event.target.nodeName.toLowerCase() === 'button' && contentValue === 'AC') {
			input3.value = '';
			numberString1 = '';
			numberString2 = '';
		}
		else {
			numberString1 = numberString1 + contentValue;
			input3.value = numberString1
		}
  });

btnResult.onclick = function () {
		if (sign == '+') {
			input3.value = Number(numberString2) + Number(numberString1)
			numberString1 = input3.value;
			numberString2 = '';
	}
	else if (sign == '-') {
		input3.value = Number(numberString2) - Number(numberString1)
		numberString1 = input3.value;
		numberString2 = '';
	}
	else if (sign == '*') {
		input3.value = Number(numberString2) * Number(numberString1)
		numberString1 = input3.value;
		numberString2 = '';
	}
	else if (sign == '/') {
		input3.value = Number(numberString2) / Number(numberString1)
		numberString1 = input3.value;
		numberString2 = '';
	}
	else if (sign == '**') {
		input3.value = Number(numberString2) ** Number(numberString1)
		numberString1 = input3.value;
		numberString2 = '';
	}
	else if (sign == 'sqrt') {
		input3.value = numberString2
		numberString1 = input3.value;
		numberString2 = '';
	}
	else {
		input3.value = 'Error'
	}
}
