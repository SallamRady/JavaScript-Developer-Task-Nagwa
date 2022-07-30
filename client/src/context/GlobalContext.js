import React, { useState } from "react";
import axios from "axios";

// initail state
const initailState = { questions: [], progressBar: 0 };
const HostName = 'http://localhost:4000';
export const GlobalContext = React.createContext(initailState);

export const GlobalContextProvider = ({ children }) => {
  // declaration
  /*
    questions array containt 10 questions each question have
    word - correct Answer - questionScore 1[if choose correct answer] or o 
  */
  const [questions, setQuestions] = useState([]);
  //progress bar refer number of questions which are answered
  const [progressBar, setProgressBar] = useState(0);

  const resetState = () => {
    setQuestions([]);
    setProgressBar(0);
  };

  const startNewQuizz = async () => {
    // http://localhost:4000/getWords
    await axios.get(`${HostName}/getWords`).then(
      res=>{
        console.log(res.data);
        setQuestions(res.data.data);
      }
    ).catch(
      err=>console.log('error in fetch words list')
    );
    setProgressBar(0);
  }

  return <GlobalContext.Provider value={{questions,progressBar, setProgressBar,resetState,startNewQuizz}}>{children}</GlobalContext.Provider>;
};
