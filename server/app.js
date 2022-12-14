// import packages
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const randomWorker = require("./utils/randomArr");
const rankWorker = require("./utils/calcRank");

// declaration
const port = process.env.PORT || 4000;

// express application server & server confogration
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

/**
 * words endpoint
 * return a list of 10 objects selected randomly from the "wordsList"
 */
app.get("/getWords", (req, res, next) => {
  let result = randomWorker.getRandomList(10);
  res.json(result);
  res.end();
});

/**
 * rank endpoint
 * description:takes the final score in the request body, and responds back with the rank%
rounded to the nearest hundredth. The rank represents the percentage of scores (check scoresList in TestData.json)
below the given final score.
 */
app.post("/getRank", (req, res, next) => {
  console.log(req.body);
  let rank = rankWorker.calcRank(req.body.score);
  res.json({ rank: rank });
});

app.listen(port, () => console.log(`server running on port : ${port}`));
