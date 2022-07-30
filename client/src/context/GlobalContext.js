import React, { useState } from "react";
import axios from "axios";
import { HostName } from "../utils/globalVariables";

// initail state
const initailState = { questions: [], progressBar: 1 };
export const GlobalContext = React.createContext(initailState);

export const GlobalContextProvider = ({ children }) => {
  /*
    questions: array containt 10 questions each question have
    word - pos [correct Answer] - choose [user answer]- score [ 10 [if choose correct answer] or o ]
  */
  const [questions, setQuestions] = useState([]);
  //progress bar refer number of questions which are answered
  const [progressBar, setProgressBar] = useState(1);

  /**
   * method:startNewQuizz
   * description:connect with back and get array of 10 questions and set questions state and progressBar state
   */
  const startNewQuizz = async () => {
    await axios
      .get(`${HostName}/getWords`)
      .then((res) => {
        let words = res.data,
          counter = 1;
        words.forEach((element) => {
          element.id = counter;
          counter++;
        });
        console.log(words);
        setQuestions(words);
      })
      .catch((err) => console.log("error in fetch words list"));
    setProgressBar(0);
  };

  return (
    <GlobalContext.Provider
      value={{ questions, progressBar, setProgressBar, startNewQuizz }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
