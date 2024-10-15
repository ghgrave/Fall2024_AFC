// let dog = {
//   breed: "Bulldog",
//   name: "Atlas",
//   age: 4,
//   isMarried: false
// }
// console.log(dog.isMarried);
// console.log(dog["isMarried"]);
// let typeOfDog = "breed"
// console.log(dog.typeOfDog);
// console.log(dog[typeOfDog]);

// let person = {
//   fName: "George",
//   lName: "Of the Jungle",
//   age: 24,
//   married: true,
//   family: ["Jane", "Boy", "Cheetah"],
//   fullname: function(){
//     return `${this.fName} ${this.lName}`
//   },
//   animals: [
//     {
//       deadly: true,
//       type: "snake"
//     },
//     {
//       deadly: false,
//       type: "kitten"
//     }
//   ]
// }

// console.log(person.animals[1].type)
// console.log(person["animals"][1]["type"])
// console.log(person.fullname());
// console.log(person.family[2]);
// console.log(person["family"][2]);

// Day 2 - 9/3/24
// destructuring
let person = {
  fName: "George",
  lName: "Of the Jungle",
  age: 24,
  married: true,
  family: ["Jane", "Boy", "Cheetah"],
  fullname: function(){
    return `${this.fName} ${this.lName}`
  },
  animals: [
    {
      deadly: true,
      type: "snake"
    },
    {
      deadly: false,
      type: "kitten"
    }
  ]
}
let {fname, lName, age, animals} = person
// let fName = person.fName
// let lName = person.lName
// let age = person.age
// let animals = person.animals
console.log(`${fName} ${lName} is ${age} years old`);