const fs = require("fs");
let rawData = fs.readFileSync("data/TestData.json");
let data = JSON.parse(rawData);
let wordList = data.wordList;
let scoresList = data.scoresList;
// seperate words according type
let sorted = {
    'adverb': [],
    'verb': [],
    'adjective': [],
    'noun': [],
};
// shuffle wordsList
wordList = wordList.sort((a, b) => 0.5 - Math.random());
for (let i of wordList) {
    sorted[i.pos].push(i);
}

// return adverbs
module.exports.getAdverb = function getAdverb() {
    return sorted['adverb'];
};

// return nouns
module.exports.getNoun = function getNoun() {
    return sorted['noun'];
};

// return adjectives
module.exports.getAdjective = function getAdjective() {
    return sorted['adjective'];
};

// return verbs
module.exports.getVerb = function getVerb() {
    return sorted['verb'];
};

// return scores
module.exports.getScores = function getScores() {
    return scoresList;
};