const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql2 = require("mysql2");

const db = mysql2.createPool({
  user: "root",
  host: "localhost",
  password: "password",
  database: "imdb",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.post("/userLogin", (req, res) => {
  const userID = req.body.userID;
  const userPassword = req.body.userPassword;
  db.query(
    "SELECT * FROM user WHERE emailID = ? AND password = ?",
    [userID, userPassword],
    (err, result) => {
        if (err){
            res.send({err: err})
        }
        if (result.length>0) {
            console.log("check is working");
            console.log(result);
            res.send(result);
        } else {
            res.send({message: "Wrong combination"});
        }
    //   console.log(err);
    }
  );
});
app.post("/register", (req, res) => {
  const userIDSignup = req.body.userIDSignup;
  const userFirstNameSignup = req.body.userFirstNameSignup;
  const userLastNameSignup = req.body.userLastNameSignup;
  const userAgeSignup = req.body.userAgeSignup;
  const userPasswordSignup = req.body.userPasswordSignup;
  db.query(
    "INSERT INTO user(emailID, fname, lname, age, password) VALUES (?,?,?,?,?)",
    [
      userIDSignup,
      userFirstNameSignup,
      userLastNameSignup,
      userAgeSignup,
      userPasswordSignup,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
