import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Main from "./Main";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
