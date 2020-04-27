import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";


function ImageDetails(props) {

    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`;
    const [cocktail, setCocktail] = useState({});
    const [goBack, setGoBack] = useState(false);

    const handleGoBack = () => {
        setGoBack(true);
    }

    useEffect(
        () => {
            axios.get(url)
                .then(res => {
                    console.log('response', res.data.drinks[0]);
                    setCocktail(res.data.drinks[0]);
                });
            console.log(`I remove everything that i set above. The current state is ${cocktail}`)
        }, []);

    return (
        <div>
            {goBack && <Redirect to="/" />}
            {!goBack && <div className="details-img-list-item">
                <div className="details-img-item">
                    <img alt='img' src={cocktail.strDrinkThumb} className="details-img"></img>
                    <p>{cocktail.strDrink}</p>
                </div>
            </div>
            }
            
            <button onClick={handleGoBack}>Back</button>
        </div>
    )
}

export default ImageDetails;