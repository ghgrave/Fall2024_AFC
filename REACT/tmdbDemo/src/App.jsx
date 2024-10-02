import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import MovieCard from "./components/MovieCard"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import {useState} from "react"
import axios from "axios"
import "./App.css";
import Button from '@mui/material/Button';

function App() {
  const [movies, setMovies] = useState([])
  // https://api.themoviedb.org/3/movie/now_playing
  const baseUrl = "https://api.themoviedb.org/3"

  const handleClick = () => {
    console.log("Clicked");
    // scaffolding for axios
    let route = "movie/now_playing"
    // let endpoint = `${baseUrl}/${route}`
    // const options = {method: "get", url:`${endpoint}`}
  
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGUzZjEzYTRjZGQwNTgzMWI5NWE5N2QzYjNlMmRhNiIsIm5iZiI6MTcyNzg4NDM3OS42Njc3MTQsInN1YiI6IjVjMzU0YWMxOTI1MTQxNDgyYmRkY2U3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t7aDRk2ZNyN93cP_ldpxoaQpHEOXBogvOJ1qDK-SuV8'
      }
    };
    axios(options)
    .then(response =>  {
      console.log(response)
      // response.data.results => array of movie objects
      let movieArray = response.data.results.map((movie) => {
        return <MovieCard doggy={movie} />
      })
      setMovies(movieArray)
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <hr />
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </div>
        </div>
      </Router>
      <Button onClick={handleClick} variant="contained" color="success">Now Playing</Button>
      {movies}
    </>
  );
}

export default App;
