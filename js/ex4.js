/* Tutorial 4
   Example 4 JavaScript code
*/

const values = [3, 11, 7, 2, 9, 10];

const sum = (array) => {
  let sum = 0;
  for (const element of array) {
    sum += element;
  }
  return sum;
}

const min = (array) => {
  let min = array[0];
  for (const element of array) {
    if (element < min) {
      min = element;
    }
  }
  return min;
}

const max = (array) => {
  let max = array[0];
  for (const element of array) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}

console.log(`Sum of all array values is ${sum(values)}`);
console.log(`Minimum value is ${min(values)}`);
console.log(`Maximum value is ${max(values)}`);
