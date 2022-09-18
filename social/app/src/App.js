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



import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PublicKey,
  Transaction,
} from "@solana/web3.js";

import { getPhantomWallet } from "@solana/wallet-adapter-wallets";
//import { Home } from "./home";
import { WalletName } from "@solana/wallet-adapter-wallets";
import { useWallet } from "@solana/wallet-adapter-react";



const wallets = [getPhantomWallet()];
const endPoint = "http://127.0.0.1:8899";



class App extends Component {
  

  render() {
    return (

      <Router>
        <ConnectionProvider endpoint={endPoint}>
          <WalletProvider wallets={wallets} autoConnect>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/post" element={<Post />} />
            </Routes>

            <div className="content">
            </div>
          </div>
        </WalletProvider>
      </ConnectionProvider>
      </Router >
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