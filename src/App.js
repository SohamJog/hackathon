import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from './NavBar';
import Cards from "./Cards";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Post from "./Post";
<Route path='/post' element={<Post />} />


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/post" element={<Post/>} />
          </Routes>

          <div className="content">
          </div>
        </div>
      </Router>
    );
  }
}

export default App;



/*
import React, { useEffect, useState } from 'react';
import Voting from "./contracts/Voting.json";
import getWeb3 from "./getWeb3";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import NavBar from './NavBar';
import Election from './Election';
import Create from './Create';

function App() {
  const [account, setAccount] = useState(); // state variable to set account.
  
  useEffect(() => {
    async function load() {
      const web3 = await getWeb3();

      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);
    }
    
    load();
   }, []);
  
   return (
     <div>
       Your account is: {account}
     </div>
   );
}

export default App;


*/