import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import DogImageCard from "../components/DogImageCard";
import { Stack, Button } from "@mui/material";

const App = () => {
  // comsuming an api
  // http request
  // click a button
  // get a radom dog image

  // fetch(endpoint) // utlize an endpoint
  // .then(response) // get a response - parse if good, else throw error
  // .then(parsedData) // do somehting with data
  // .catch(error) // handle errors

  // skeleton or scaffolding
  // axios.method(endpoint)
  // .then(response)
  // .catch(error)

  const [dogImage, setDogImage] = useState("");
  const endpoint = `https://dog.ceo/api/breeds/image/random`;
  const handleClick = () => {
    console.log("Clicked");
    axios
      .get(endpoint) // utilize enpoint
      .catch((error) => {
        console.error("Error: ", error.message);
      })
      .then((response) => setDogImage(response.data.message));
  };

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => setDogImage(response.data.message))
      .catch((error) => {
        console.error("Error: ", error.message);
      });
  }, []);

  return (
    <>
      <h1>Rando Dog Image Generator</h1>
      <button onClick={handleClick}>Click Me</button>
      <DogImageCard imagePath={dogImage} />
      <Stack direction="row" spacing={2}>
        <Button  variant="outlined" color="success" size="large">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button size="small" variant="outlined" color="error">
          Error
        </Button>
      </Stack>
    </>
  );
};

export default App;
