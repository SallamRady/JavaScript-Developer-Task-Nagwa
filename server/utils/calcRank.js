let DBManager = require('../data/model');
const scoresList = DBManager.getScores();

module.exports.calcRank = function calcRank(score) {

    let scoresBelowGiven = scoresList.filter(item=>item<score);
    let answer = ((scoresBelowGiven.length / scoresList.length)*100).toFixed(2);
    return answer;

}
