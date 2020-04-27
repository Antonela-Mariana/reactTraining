import React from "react";
import Category from "./Category";

function MainPage() {
    return (
        <div>
            <div><Category url='a=Alcoholic' type="Alcoholic" /></div>
            <div><Category url='a=Non_Alcoholic' type="Non_Alcoholic" /></div>
            <div><Category url='g=Cocktail_glass' type="Cocktail_glass" /></div>
            <div><Category url='c=Ordinary_Drink' type="Ordinary_Drink" /></div>
            <div><Category url='g=Champagne_flute' type="Champagne_flute" /></div>
        </div>
    );
}

export default MainPage;