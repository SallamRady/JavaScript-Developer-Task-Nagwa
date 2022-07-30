import React, { useState } from "react";
import axios from "axios";

// initail state
const initailState = { questions: [], progressBar: 1 };
export const GlobalContext = React.createContext(initailState);

export const GlobalContextProvider = ({ children }) => {
  // declaration
  const HostName = 'http://localhost:4000';
  /*
    questions array containt 10 questions each question have
    word - correct Answer - questionScore 1[if choose correct answer] or o 
  */
  const [questions, setQuestions] = useState([]);
  //progress bar refer number of questions which are answered
  const [progressBar, setProgressBar] = useState(1);


  const startNewQuizz = async () => {
    await axios.get(`${HostName}/getWords`).then(
      res=>{
        let words = res.data,counter = 1;
        words.forEach(element => {
          element.id = counter;
          counter++;
        });
        console.log(words);
        setQuestions(words);
      }
    ).catch(
      err=>console.log('error in fetch words list')
    );
    setProgressBar(0);
  }

  return <GlobalContext.Provider value={{questions,progressBar, setProgressBar,startNewQuizz}}>{children}</GlobalContext.Provider>;
};
