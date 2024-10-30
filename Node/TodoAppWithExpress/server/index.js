// FOUNDATION
// Where is all my stuff coming from?
// What do I need to run my server?
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// If deployed DO NOT run the logger
if (!process.env.NODE_ENV || process.env.NODE_ENV !== "production") {
  const logger = require("morgan");
  app.use(logger("dev"));
}

// body-parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// When working with a database you need to know three things:
// CONNECTION
const conn = require("./connections/pgconnection");

// BLUEPRINTS
// ALREADY done by the DBA
// {
//   id: Number,
//   note: String - 255 char
//   is_completed: Boolean
// }

// QUERIES

// ROUTE HANDLERS
// when we go to a certain route, what happens?
app.get("/", (req, res) => {
  res.send("server running");
});

// CRUD
// READ
app.get("/api/todos", (req, res) => {
  let query = `SELECT * FROM todo;`;

  conn
    .query(query)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => {
      console.log("Error reading data from database: ", err);
      res
        .status(444)
        .json({ message: "Unable to READ data from database at this time." });
    });
});

// CREATE
app.post("/api/todos", (req, res) => {
  let query = `INSERT INTO todo (note, is_completed)
                VALUES ('${req.body.note}', false)
                RETURNING *`;

  conn
    .query(query)
    .then((data) => res.status(200).json(data.rows[0]))
    .catch((err) => {
      console.log("Error creating data in database: ", err);
      res
        .status(445)
        .json({ message: "Unable to CREAT data in database at this time." });
    });
});

// LISTENER
app.listen(port, console.log(`Todo App with Express on port ${port}`));
