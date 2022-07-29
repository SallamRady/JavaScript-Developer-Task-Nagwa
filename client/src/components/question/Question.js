import React, { useState } from "react";
import "./Question.scss";

const Question = ({ question }) => {
  // alert to make questuion required
  const [alert, setAlert] = useState(false);
  const [answer, setAnswer] = useState(null);
  // check valid to go to next/previous question or not

  const handleClick = (e) => {
    e.preventDefault();
    if (answer == null) {
      setAlert(true);
    }
    console.log(e.target.value);
  };

  //return view
  return (
    <div className="questionCard">
      {alert && <p className="alert"> required! please answer the question </p>}
      <form>
        <p>{question}</p>
        <input
          required
          type="radio"
          id="adjective"
          name="questionId"
          onClick={() => {
            setAnswer("adjective");
            setAlert(false);
          }}
        />
        <label for="adjective">adjective</label>
        <br />
        <input
          type="radio"
          id="adverb"
          name="questionId"
          onClick={() => {
            setAnswer("adverb");
            setAlert(false);
          }}
        />
        <label for="adverb">adverb</label>
        <br />
        <input
          type="radio"
          id="noun"
          name="questionId"
          value="noun"
          onClick={() => {
            setAnswer("noun");
            setAlert(false);
          }}
        />
        <label for="noun">noun</label>
        <br />
        <input
          type="radio"
          id="noun"
          name="questionId"
          value="noun"
          onClick={() => {
            setAnswer("verb");
            setAlert(false);
          }}
        />
        <label for="verb">verb</label>
        <br />
      </form>
      <div className="quizzPageFooter">
        <button onClick={handleClick} value={"pravious"}>
          Previous
        </button>
        <button onClick={handleClick} value={"next"}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
