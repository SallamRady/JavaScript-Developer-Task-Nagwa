import React, { useState } from "react";

// initail state
const initailState = { questions: [], progressBar: 0 };

export const GlobalContext = React.createContext(initailState);

export const GlobalContextProvider = ({ children }) => {
  // declaration
  /*
    questions array containt 10 questions each question have
    word - correct Answer - questionScore 1[if choose correct answer] or o 
  */
  const [questions, setQuestions] = useState([
    {
      id: 1,
      word: "slowly",
      pos: "adverb",
    },
    {
      id: 2,
      word: "ride",
      pos: "verb",
    },
    {
      id: 3,
      word: "bus",
      pos: "noun",
    },
    {
      id: 4,
      word: "commute",
      pos: "verb",
    },
    {
      id: 5,
      word: "emissions",
      pos: "noun",
    },
    {
      id: 6,
      word: "walk",
      pos: "verb",
    },
    {
      id: 7,
      word: "fast",
      pos: "adjective",
    },
    {
      id: 8,
      word: "car",
      pos: "noun",
    },
    {
      id: 9,
      word: "crowded",
      pos: "adjective",
    },
    {
      id: 10,
      word: "arrival",
      pos: "noun",
    },
  ]);
  //progress bar refer number of questions which are answered
  const [progressBar, setProgressBar] = useState(0);

  return <GlobalContext.Provider value={{questions,progressBar, setProgressBar}}>{children}</GlobalContext.Provider>;
};
