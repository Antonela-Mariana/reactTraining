import React, { useState, useEffect } from "react";
import axios from 'axios';
import ListItem from './ListItem';
import CocktailDetails from './CocktailDetails';

function Category(props) {

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';
    const [cocktails, setCocktails] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [selected, setSelected] = useState(null);
    const [newUrl, setNewUrl] = useState('');

    useEffect(
        () => {
            const apiUrl = `${url}${props.url}`;
            axios.get(apiUrl)
                .then(res => {
                    setCocktails(res.data.drinks);
                });
            console.log(`I remove everything that i set above. The current state is ${cocktails}`)
        }, [newUrl]);

    const getFilter = () => {
        const cocktailTypes = {
            'Alcoholic': 'a=Alcoholic',
            'Non_Alcoholic': 'a=Non_Alcoholic',
            'Cocktail_glass': 'g=Cocktail_glass',
            'Ordinary_Drink': 'c=Ordinary_Drink',
            'Champagne_flute': 'g=Champagne_flute'
        };
        const myUrl=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${cocktailTypes[props.type]}`;
        setNewUrl(myUrl);
    }
    const handler = (cocktail) => {
        setSelected(cocktail);
        setShowDetails(true);
        console.log(showDetails);
        setNewUrl("abs");
    }

    const hide = () => {
        setShowDetails(false);
    }

    return (
        <div>
            {showDetails ? <CocktailDetails cocktail={selected} hide={hide} /> : null}
            <div className="title"><h1>These are {props.type} cocktails!</h1></div>
            <div className="list-container">{cocktails.map((cocktail, index) => <ListItem cocktail={cocktail} key={index} handler={handler} />)}</div>
        </div>
    );
}

export default Category;