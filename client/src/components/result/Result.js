import React,{useContext,useEffect} from "react";
import { GlobalContext } from "../../context/GlobalContext";
import './Resut.scss';

const Result = () => {
  // declaration
  const { questions } = useContext(GlobalContext); // fetch data[questions] from context
  //calculate totalScore
  useEffect(() => {
    //submit
    let totalScore = 0;
    questions.forEach((item) => {
      totalScore = totalScore + Number(item.score);
    });
    console.log(totalScore);
  }, []);
  return (
    <div className="resultCard">
      <p>final Score : 79%</p>
      <button>Try Again</button>
    </div>
  );
};

export default Result;
