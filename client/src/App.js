import React, {useEffect,useContext} from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import "./App.scss";
import Quizz from "./pages/quizz/Quizz";
import {Route,Routes} from 'react-router-dom';
import Question from "./components/question/Question";
import Result from "./components/result/Result";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const {startNewQuizz} = useContext(GlobalContext);
  useEffect(() => {
    startNewQuizz();
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <div className="mainContainer">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/quizz' element={<Quizz/>}>
            <Route path='newquizz' element={<Question />}/>
            <Route path='result' element={<Result />}/>
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
