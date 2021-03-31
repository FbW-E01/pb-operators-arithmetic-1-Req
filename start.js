// 0. Declare two variables "snackServings" and "guests" and assign them number values.
const snackServings = 61;
const guests = 9;
console.log(snackServings, guests);

// 1. Add snackServings and guests.
console.log(snackServings + guests);

// 2. Subtract guests from snackServings. Then, subtract snackServings from guests.
console.log(snackServings - guests);
console.log(guests - snackServings);

// 3. Multiply snackServings and guests.
console.log(snackServings * guests);

// 4. Divide snackServings by guests.
console.log(snackServings / guests);

// 5. Declare another variable "drinks" with value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne". Print "resultOne" to the console.
const drinks = 10;
const resultOne = snackServings * guests / drinks;
console.log(resultOne);

// 5. Declare two variables: "monkeys" with value 15, and "bananas" with value 9. Divide monkeys by bananas.
let monkeys = 15;
let bananas = 9;
console.log(monkeys / bananas);

// 6. Declare another variable "monkeyfights" with value 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo".  Print "resultTwo" to the console.
const monkeyfights = 20;
const resultTwo = (monkeys + bananas) * monkeyfights;
console.log(resultTwo);

// 7. Increment monkeys.
monkeys++;
console.log(monkeys);

// 8. Decrement bananas.
bananas--;
console.log(bananas);

// 9. Subtract monkeys from bananas and store this in a new variable "happiness". Add happiness and monkeyfights.
const happiness = bananas - monkeys;
console.log(happiness + monkeyfights);

// 10. Print the remainder when "resultOne" is divided by "resultTwo" to the console.
console.log(resultOne % resultTwo);

5%2; // The number two goes into five two times, with a remainder of one
