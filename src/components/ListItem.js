import React from "react";
import { Link } from 'react-router-dom';

function ListItem(props) {

    const handler = () => {
        props.handler(props.cocktail);
    }

    return (
        <div className="list-item">
            <div className="item">
                <img alt='img' src={props.cocktail.strDrinkThumb} className="cocktail-img" onClick={handler}></img>
                <Link to={`details/${props.cocktail.idDrink}`}>{props.cocktail.strDrink}</Link>
            </div>
        </div>
    )
}



export default ListItem;