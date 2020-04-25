import React, { Component } from "react";
import Category from "./Category";

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }



    render() {
        return (
            <div>
                <div><Category url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic" type="Alcoholic" /></div>
                <div><Category url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic" type="Non_Alcoholic" /></div>
                <div><Category url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass' type="Cocktail_glass" /></div>
                <div><Category url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink' type="Ordinary_Drink" /></div>
                <div><Category url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute' type="Champagne_flute" /></div>
            </div>
        );
    }
}

export default MainPage;