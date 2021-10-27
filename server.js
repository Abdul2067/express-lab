import express, { application } from "express"

const app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res) {
  res.redirect("/home")
})

app.get("/home", function(req, res) {
  res.send("<h1>Home page</h1>")
})

app.listen(3000, function() {
  console.log("Check running 3000")
})