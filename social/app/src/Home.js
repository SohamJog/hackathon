import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cards from "./Cards";
import CardsItems from './CardItems';

import { WalletName } from "@solana/wallet-adapter-wallets";
import { useWallet } from "@solana/wallet-adapter-react";




const Home = () => {

    const { select } = useWallet();
    const onConnect = () => {
      select(WalletName.Phantom);
    };

    return (
        <div>
            <div className="home d-flex align-items-center justify-content-center">
                <button onClick={onConnect}>Connect with Phantom</button>
                <CardsItems></CardsItems>
            </div>
        </div>
    );
};

export default Home;