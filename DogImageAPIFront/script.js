// user clicks button
// consume an api
// send back random image to html

let img = document.getElementsByTagName("img");
img[0].setAttribute(
  "src",
  "https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_3284.jpg"
);
img[0].style.width = "300px";
img[0].style.height = "300px";
// accessing button element and all its methods/properties
let button = document.getElementsByTagName("button");
// assign a listener for a click on the button
button[0].addEventListener("click", () => {
  // consume api

  // 1) endpoint - https://dog.ceo/api/breeds/image/random
  // 2) json or xml - json
  // 3) how much data - 1 object
  // 4) what data looks like - 2 things,message = potential image, success

  // HTTP Request

  // 1) Utilize the endpoint with correct method (verb)
  const baseURL = "https://dog.ceo/api/breeds";
  let route = "image/random";
  let endpoint = `${baseURL}/${route}`;
  fetch(endpoint)
    .then((response) => {
      console.log(response);
      // 2) Get a response: if ok, parse the data, else error
      if (response.ok) {
        // sent down to the next then
        return response.json();
      } else {
        throw Error("Irish broke it!!!");
      }
    })
    .then((data) => {
      // 3) Do something with the parsed data
      img[0].setAttribute("src", data.message);

      console.log("Data: ", data);
    })
    .catch((err) => {
      // 4) Handle the error
      console.log(err);
    });
});
