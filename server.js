import express, { application } from "express"
import * as movies from "./data/movies.js"

const app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res) {
  res.redirect("/home")
})

app.get("/home", function(req, res) {
  res.render("home")
})

app.get("/movies", function (req, res) {
  movies.find({}, function (error, movies) {
    res.render("movies/index", {
      error : error,
      movies : movies
    })
  })
})

app.listen(3000, function() {
  console.log("Check running 3000")
})