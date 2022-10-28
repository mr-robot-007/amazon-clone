import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=> {
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS  >>> " ,authUser);

      if(authUser)  {
        // the user just logged / the user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        // console.log("haha")
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  },[])
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
