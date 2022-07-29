import React from "react";
import './Question.scss';

const Question = ({ question }) => {
  return (
    <div className="questionCard">
      <form>
        <p>{question}</p>
        <input type="radio" id="adjective" name="questionId" value="adjective" />
        <label for="adjective">adjective</label>
        <br />
        <input type="radio" id="adverb" name="questionId" value="adverb" />
        <label for="adverb">adverb</label>
        <br />
        <input type="radio" id="noun" name="questionId" value="noun" />
        <label for="noun">noun</label>
        <br />
        <input type="radio" id="verb" name="questionId" value="verb" />
        <label for="verb">verb</label>
        <br />
      </form>
    </div>
  );
};

export default Question;
