import React, { Component }from 'react';
import axios from 'axios';
import ListItem from './ListItem';
import CocktailDetails from './CocktailDetails';

// const OrdinaryDrinks = () =>{
//     return (
//         <div><h1>These are Ordinary Drinks!</h1></div>
//     );
// }

class OrdinaryDrinks extends Component{
    constructor(props) {
        super(props);

        this.state = {
            cocktails: [],
            showDetails: false,
            selected: null
        };
        this.handler = this.handler.bind(this)
    }

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
            .then(res => {
                this.setState({ cocktails: res.data.drinks });
            });
    }

    render() {
        const cocktailsss = this.state.cocktails.map((cocktail, index) => <ListItem cocktail={cocktail} key={index} handler={this.handler}/>)
        return (
            <div>
                {this.state.showDetails ? <CocktailDetails cocktail={this.state.selected} hide={this.hide} /> : null}
                <div className="title"><h1>These are Ordinary Drinks!</h1></div>
                <div className="list-container">{cocktailsss}</div>
            </div>
        );
    }

    handler = (cocktail) => {
        console.log('show in ordinary', cocktail);
        this.setState({
            ...this.state,
            showDetails: true,
            selected: cocktail
        });
    }

    hide = () => {
        this.setState({
            ...this.state,
            showDetails: false,
        });
    }
}

// const ListItem = ({ strDrink }) => <li>{strDrink}</li>

export default OrdinaryDrinks;