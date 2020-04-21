import React from "react";
import { Redirect, Link } from 'react-router-dom';

const CocktailDetails = (props) =>
    <div>
        <h2>Details</h2>
        <div className="details-list-item">
            <div className="details-item-left">
                <button onClick={props.hide}>Hide</button>
                <img src={props.cocktail.strDrinkThumb} className="details-cocktail-img" onClick={() => <Redirect to="/details-img" />}></img>
            </div>
            <div className="details-item-right">
                <div>{props.cocktail.strDrink}</div>
                <div>{props.cocktail.idDrink}</div>
            </div>
        </div>
    </div>



export default CocktailDetails;