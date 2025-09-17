// Exercise 1: VAT calculation
function vatCalculation() {
  let rawPrice = parseFloat(prompt("Enter the raw price:"));
  let vatRate = 18.5 / 100;
  let finalPrice = rawPrice + rawPrice * vatRate;
  console.log("Final price with VAT:", finalPrice.toFixed(2));
}

// Exercise 2: Multiplication table
function multiplicationTable() {
  let num = parseInt(prompt("Enter a number between 2 and 9:"));
  if (num >= 2 && num <= 9) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  } else {
    console.log("Number must be between 2 and 9.");
  }
}

// Exercise 3: Array operations
function arrayOperations() {
  const values = [3, 11, 7, 2, 9, 10];
  let sum = values.reduce((acc, val) => acc + val, 0);
  console.log("Sum:", sum);

  function average(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
  console.log("Average:", average(values));

  function minMax(arr) {
    return { min: Math.min(...arr), max: Math.max(...arr) };
  }
  console.log("Min & Max:", minMax(values));
}

// Exercise 4: Temperature conversion
function temperatureConversion() {
  let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
  let fahrenheit = celsius * 9 / 5 + 32;
  console.log(`${celsius}°C = ${fahrenheit}°F`);

  function toCelsius(f) {
    return (f - 32) * 5 / 9;
  }
  console.log("32°F =", toCelsius(32), "°C");
}

// Exercise 5: String reversal
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Exercise 6: Vowel counting
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

// Menu
let choice = parseInt(prompt("Choose exercise (1-6):"));
switch (choice) {
  case 1: vatCalculation(); break;
  case 2: multiplicationTable(); break;
  case 3: arrayOperations(); break;
  case 4: temperatureConversion(); break;
  case 5: 
    let str1 = prompt("Enter a string:");
    console.log(reverseString(str1));
    break;
  case 6: 
    let str2 = prompt("Enter a string:");
    console.log("Vowel count:", countVowels(str2));
    break;
  default: console.log("Invalid choice");
}
