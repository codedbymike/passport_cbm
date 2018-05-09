const express = require("express");
const app = express();
//import express from "express";
//const request = require("request");
//const port = 3000

app.use(express.static("public"));
//app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server has started, visit " + PORT));
