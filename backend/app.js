// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import bcrypt module
const bcrypt = require("bcrypt");
// import multer module
const multer = require("multer");
// import path module
const path = require("path");
// import axios module
const axios = require("axios");
// import mongoose module
const mongoose = require("mongoose");
// import request module
const request = require("request");
// Connexion with mongoDB named  anonymousDB
mongoose.connect("mongodb://localhost:27017/anonymousDB");

// import User model
const User = require("./models/user");
// import Match model
const Match = require("./models/match");
// import Player model
const Player = require("./models/player");
// creates express application named app
const app = express();
// Body parser Configuration to Send response to FE in JSON format
app.use(bodyParser.json());
// Body parser Configuration to parse received object from FE
// (pour accéder au body dy Request)
app.use(bodyParser.urlencoded({ extended: true }));
// Security Configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// Multer configuration
app.use("/images", express.static(path.join("backend/images")));

const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  // FileName
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});


// backendApp.HTTP-METHOD("/PATH", (req,res)=> {
//    Instructions
//});

// Business Logic : Get ALL Matches
app.get("/matches", (req, res) => {
  // Instructions
  Match.find((err, docs) => {
    if (err) {
      console.log("here error with DB", err);
    } else {
      res.json({ matches: docs, message: "Here all matches, Done" });
    }
  });
});

// Business Logic : Get Match By ID
app.get("/matches/:id", (req, res) => {
  // Recuperer le param nommé id from path
  let x = req.params.id;
  Match.findOne({ _id: x }).then((doc) => {
    console.log("Here doc", doc);
    res.json({ match: doc });
  });
});

// Business Logic : Delete Match By ID
app.delete("/matches/:id", (req, res) => {
  console.log("Here into delete", req.params.id);
  let x = req.params.id;
  Match.deleteOne({ _id: x }).then((response) => {
    console.log("Here response", response);
    if (response.deletedCount == 1) {
      res.json({ message: "Deleted with success" });
    }
  });
});

// Business Logic : Add Match Object
app.post("/matches", (req, res) => {
  console.log("here match object", req.body);
  let match = new Match({
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
  });

  match.save((err, doc) => {
    if (err) {
      console.log("Error with DB", err);
    } else {
      res.json({
        message: "Match added with success",
      });
    }
  });
});

// Business Logic : Edit Match Object
app.put("/matches/:id", (req, res) => {
  console.log("Here match ID", req.params.id);
  console.log("Here match object", req.body);
  Match.updateOne({ _id: req.params.id }, req.body).then((response) => {
    console.log("Here response after update", response);
    if (response.nModified == 1) {
      res.json({ message: "Edited with success" });
    }
  });
});

// Business Logic: Add User (signup)
app.post("/users/signup", (req, res) => {
  bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
    console.log("Here into signup", req.body);
    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      pwd: cryptedPwd,
    });
    user.save((err, doc) => {
      if (err) {
        console.log("Error with DB", err);
        if (err.errors.email.message) {
          res.json({
            message: "0",
          });
        }
      } else {
        res.json({
          message: "1",
          user: doc,
        });
      }
    });
  });
});

// Business Logic: Search user by email and pwd (login)
app.post("/users/login", (req, res) => {
  console.log("Here user", req.body);
  User.findOne({ email: req.body.email })
    .then((doc) => {
      console.log("Here doc ", doc);
      if (!doc) {
        res.json({ message: "0" });
      }
      // compare req.body.pwd with doc.pwd
      return bcrypt.compare(req.body.pwd, doc.pwd);
    })
    .then((pwdResult) => {
      console.log("pwdResult", pwdResult);
      if (!pwdResult) {
        res.json({ message: "1" });
      }

      User.findOne({ email: req.body.email }).then((finalResult) => {
        let userToSend = {
          fName: finalResult.firstName,
          lName: finalResult.lastName,
        };
        res.json({
          message: "2",
          user: userToSend,
        });
      });
    });
});

// Business Logic : Update Player
app.put("/players/:id", (req, res) => {
  console.log("Here into edit Player", req.body);
  console.log("Here into edit Player", req.params.id);
  Player.updateOne({ _id: req.params.id }, req.body).then((response) => {
    console.log("response after edit", response);
    res.json({
      message: "Edited with success",
    });
  });
});

// Business Logic : Add Player
app.post(
  "/players",
  multer({ storage: storageConfig }).single("img"),
  (req, res) => {
    console.log("Here into add player", req.body);
    let url = req.protocol + "://" + req.get("host");
    console.log("image path", url + "/images/" + req.file.filename);
    let player = new Player({
      playerName: req.body.name,
      playerAge: req.body.age,
      playerPosition: req.body.position,
      playerNbr: req.body.nbr,
      img: url + "/images/" + req.file.filename,
    });

    player.save((err, doc) => {
      if (err) {
        console.log("error with save", err);
      } else {
        res.json({
          message: "Player added with success",
        });
      }
    });
  }
);

// Business Logic : Get Player By ID
app.get("/players/:id", (req, res) => {
  // Recuperer le param nommé id from path
  let x = req.params.id;
  Player.findOne({ _id: x }).then((doc) => {
    console.log("Here doc", doc);
    res.json({ player: doc });
  });
});

// Business Logic : Get all players
app.get("/players", (req, res) => {
  Player.find().then((docs) => {
    res.json({ allPlayers: docs });
  });
});

// Business Logic: Search Weather By City
app.post("/weather", (req, res) => {
  console.log("Here into weather", req.body);
  let city = req.body.city;
  let key = "62ee756a34835483299877a61961cafb";
  let apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    key;
  axios.get(apiURL).then(
    (response) => {
      console.log("Here response", response.data);
      let resultWeatherData = {
        pressure: response.data.main.pressure,
        humidity: response.data.main.humidity,
        temp: response.data.main.temp,
        image: response.data.weather[0].icon,
        country: response.data.name,
        wind: response.data.wind.speed,
      };

      res.json({
        result: resultWeatherData,
      });
    },
    (error) => {
      console.log("Here error", error);
    }
  );
});

// Business Logic : Search Country Teams
// Germany
app.post("/api/teams", (req, res) => {
  console.log("Here into api teams", req.body);
});
module.exports = app;
