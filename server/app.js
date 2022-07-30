const express = require("express");
const fs = require("fs");
const generateList = require('./utils/randomArr');
// declaration
const port = process.env.PORT || 4000;

// express application
const app = express();
app.use(express.urlencoded({ extended: true }));
/**
 * return a list of 10 objects selected randomly from the "wordsList"
 */
app.get("/getWords", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Content-Type", "application/json");
  // Content-Type: application/json
  let rawdata = fs.readFileSync("./data/TestData.json");
  let data = JSON.parse(rawdata);
  let wordsList = data.wordList;
  let result = generateList(wordsList,10);
  res.json(result);
  res.end();
});

app.post("/getRank",(req, res, next)=>{
    res.send(req.body)
});

app.listen(port, () =>
  console.log(`server running on port : ${port}`)
);
