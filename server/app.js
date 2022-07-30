// imports
const express = require("express");
const fs = require("fs");
const cors = require('cors');
const randomWorker = require('./utils/randomArr');


// declaration
const port = process.env.PORT || 4000;

// express application server & server confogration
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/**
 * return a list of 10 objects selected randomly from the "wordsList"
 */
app.get("/getWords", (req, res, next) => {

  let result = randomWorker.getRandomList(10);
  res.json(result);
  res.end();
  
});

app.post("/getRank",(req, res, next)=>{
    res.send(req.body)
});

app.listen(port, () =>
  console.log(`server running on port : ${port}`)
);
