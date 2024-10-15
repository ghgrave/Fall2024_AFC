// Foundation
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// route handlers
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.send("Home route!!!!");
});

app.get("/contact", (req, res) => {
  res.send("Contact route");
});

app.get("/about", (req, res) => {
  res.send("About route");
});

app.get("/fruit/:doggy", (req, res) => {
  // console.log(req.params.doggy)
  res.end(`I am the ${req.params.doggy} page`);
});

// route handler
// /name/<name>/bank/<money>
// send back to browser something like: My name is <name> and I have $<money>
app.get("/name/:fname/bank/:money", (req, res) => {
  const { fname, money } = req.params;
  res.send(
    isNaN(money)
      ? "Danger Rico Robinson!! Needs to be numerical"
      : `My name is ${fname} and I have ${Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "USD",
        }).format(money)}`
  );
});

// catches everything
app.get("*", (req, res) => {
  res.send("No matching route");
});

// listener
app.listen(port, console.log(`Server with Routing on port ${port}`));
