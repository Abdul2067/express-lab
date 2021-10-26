import express, { application } from "express"

const app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res) {
  res.send("")
})

app.listen(3000, function() {
  console.log("Check running 3000")
})