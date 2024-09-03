// function syntax
// named function
function nameOfFunction() {
  // code goes here
}
// to run function we call it or invoke it
nameOfFunction();

// function to say hello
// function greeting(){
//   console.log("Hello");
//   // return true;
// }
// greeting();

// difference between arguments and parameters
// arguments are sent to a function
// parameters accept the values from the arguments
// function area(length, width) {
//   return length * width;
// }
// let result = area(2, 3);
// console.log(result);
// console.log(area(4,3));

// function areaRectangle(length = 5, width = 5) {
//   return length * width;
// }
// console.log(areaRectangle());
// console.log(areaRectangle(6,6));
// console.log(areaRectangle(6));
// console.log(areaRectangle(undefined, 6));

// anonymous functions do not have names
// (function () {
//   console.log("Who are you?");
// })();

// named function
// function makeMore(element){
//   console.log(element + "'s");
// }

// let animals = ["Oliphant", "Uruk-hai", "Warg"];
// animals.forEach(makeMore);

// fat arrows are the modern way to write functions
// function greeting() {
//   console.log("Hello");
// }

// let newGreeting = () => {
//   console.log("hello");
// };

// greeting();
// newGreeting();

// convert to fat arrow
// function area(length, width) {
//   return length * width;
// }

// let area = (length = 5, width = 5) =>{
//   return length * width
// }
// let area = (length = 5, width = 5) => length * width
// let area = (length = 5, width = 5) => (
//   // double the length then times the width
//   (length*2) * width
// )
// console.log(area(5, 12));

// let greeting = (arg) => `Hello, ${arg}`;

// console.log(greeting("Jon-Mikel"));

let animals = ["Oliphant", "Uruk-hai", "Warg"]; 
let multiples = (animals) => {
  let newAnimals = []
  animals.forEach(el => newAnimals.push(el + "'s"))
  return newAnimals
}
let manyAnimals = multiples(animals)
console.log(manyAnimals[manyAnimals.length-1]);

