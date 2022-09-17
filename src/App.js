

import React, { Component, useState } from "react";


import "./App.css";
import NavBar from './NavBar';

class App extends Component {



  render() {
    
    
    return (
      

        <div className="App">


          <div>Hello</div>
          <NavBar />

          

          
          

          <div className="content">
           
          </div>
        </div>



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