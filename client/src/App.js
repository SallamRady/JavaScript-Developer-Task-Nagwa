import logo from "./logo.svg";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainContainer">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
