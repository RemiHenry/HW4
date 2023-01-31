/* Tutorial 4
   Example 2 JavaScript code
*/

function isFloat(n){
  return Number(n) === n && n % 1 !== 0;
}

const farenheitConverter = (farenheit) => {
  if (!isFloat(farenheit) && !Number.isInteger(farenheit)) {
    return (`Sorry, it is not a valid entry.`);
  } else {
    return (Math.round((farenheit - 32) * (5 / 9)).toString());
  }
}

const displayCelsius1 = () => {
  const farenheit = Number(prompt("Enter a temperature in farenheit:"));
  console.log(`${farenheit}°F = ${farenheitConverter(farenheit)}°C`);
}

const displayCelsius2 = () => {
  const farenheit = Number(prompt("Enter a temperature in farenheit:"));
  console.log(`Temperature of ${farenheit} Fahrenheit is equivalent to ${farenheitConverter(farenheit)} degrees Celsius`);
}

const displayCelsius3 = () => {
  const farenheit = Number(prompt("Enter a temperature in farenheit:"));
  console.log(`Water boiling temperate is ${farenheit} Fahrenheit or ${farenheitConverter(farenheit)} Celsius`);
}

displayCelsius1();
displayCelsius2();
displayCelsius3();