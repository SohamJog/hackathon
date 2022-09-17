import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cards from "./Cards";
import CardsItems from './CardItems';

const Home = () => {
    return (
        <div>
            <div className="home d-flex align-items-center justify-content-center">
                <CardsItems></CardsItems>
            </div>
        </div>
    );
};

export default Home;