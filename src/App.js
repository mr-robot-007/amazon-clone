import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/checkout" element={<><Header/><Checkout/></>} />
          <Route path = "/login" element = {<Login/>} />
          <Route exact path="/" element={<><Header/><Home/></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
