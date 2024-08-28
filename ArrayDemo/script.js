let pets = ["moxxi", "Pickle", "Hootchie"]
console.log(pets[0])
console.log(pets)
console.log(pets.length)
let num = pets.length + 3
console.log(num);
console.log(pets.join(" Woof "));
console.log(pets.sort())

pets.forEach(function (doggyHorse){
  console.log((doggyHorse));
})

let numbers = [100, 10, 4, 1, 3]
let newNumbers = numbers.sort((a, b) => a-b)

let testWord = "California"
let words = ["spray", "happy", "       hello", testWord]
let longWords = words.filter( el => el.length > 6)
console.log(longWords);



