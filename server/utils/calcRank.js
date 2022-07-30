let DBManager = require('../data/model');
const scoresList = DBManager.getScores();

module.exports.calcRank = function calcRank(score,totalNum = 30) {

    let scoresBelowGiven = scoresList.filter(item=>item<score);
    let answer = ((scoresBelowGiven.length / scoresList)*100).toFixed(2);
    return answer;

}
