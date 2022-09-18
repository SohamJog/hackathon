import Cards from "./Cards";
import React, { Component, useState } from "react";


function CardsItems() {
    const element = <Cards title="Hello World"/>;
    return (
        <div>
            <Cards title="This is a bunch of content"/>
            <Cards title="This is whole bunch of content"/>
        </div>
    );
}

export default CardsItems;