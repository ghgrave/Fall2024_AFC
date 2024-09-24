// foundation
import Child from "./components/Child";

const App = () => {
  let children = ["Janey", "Georgie", "antor"];
  children = children.sort();
  axios(endpoint)
  .then(parseddata => {
    let newArray = parsedData.map((kid, index) => {
      return <Child key={new Date().getTime()} fname={kid} />;
    });
  })
  .catch()
  
  return (
    <>
      <h1>My kids are:</h1>
      {newArray}
    </>
  );
};

export default App;
