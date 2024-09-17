// const imgArray = ["1.jpg", "2.jpg", "3.jpg"];
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const img = document.getElementsByTagName("img")[0];

let counter = 0;
nextBtn.addEventListener("click", () => {
  counter++;
  if (counter >= imgArray.length) {
    counter = 0;
  }
  let path = `./assets/${imgArray[counter]}.jpg`;
  img.src = path;
});

prevBtn.addEventListener("click", () => {
  counter--;
  console.log(counter);
});
