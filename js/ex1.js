/* Tutorial 4
   Example 1 JavaScript code
*/

const calcutator = () => {
  const number1 = Number(prompt("Enter a number:"));
  const number2 = Number(prompt("Enter a second number:"));
  const operation = prompt("Enter an operation (+, -, *, /):");
  if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
    return (`Sorry, it is not a valid entry.`);
  } else {
    switch (operation) {
      case "+":
        return (`${number1} + ${number2} = ${number1 + number2}`)
      case "-":
        return (`${number1} - ${number2} = ${number1 - number2}`)
      case "*":
        return (`${number1} * ${number2} = ${number1 * number2}`)
      case "/":
        return (`${number1} / ${number2} = ${number1 / number2}`)
      default:
        return (`Sorry, it is not a valid entry.`);
    }
  }
}

console.log(calcutator());