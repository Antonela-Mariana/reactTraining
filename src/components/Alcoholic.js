import React, { Component } from 'react';
import axios from 'axios';
import ListItem from './ListItem';
import CocktailDetails from './CocktailDetails';
import { Switch, Route, Redirect } from "react-router-dom";
import ImageDetails from "./ImageDetails";

// const Alcoholic = () => {
//     return (
//         <div><h1>These are alcoholic cocktails!</h1></div>
//     );
// }

class Alcoholic extends Component {
    constructor(props) {
        super(props);
        console.log('prrops', props);

        this.state = {
            cocktails: [],
            showDetails: false,
            selected: null
        };

        this.handler = this.handler.bind(this)
    }

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            .then(res => {
                this.setState({ cocktails: res.data.drinks });
            });
    }

    render() {
        const cocktailsss = this.state.cocktails.map((cocktail, index) => <ListItem cocktail={cocktail} key={index} handler={this.handler} detailsUrl={`${this.props.match.url}/details`} details={this.goToDetails} />)
        return (
            <div>
                 <Switch>
                    <Route path={`${this.props.match.url}/details`} render={() => { return <h1>Asta e adresa mea</h1> }}></Route>
                </Switch>
                {this.state.showDetails ? <CocktailDetails cocktail={this.state.selected} hide={this.hide} /> : null}
                <div className="title"><h1>These are alcoholic cocktails!</h1></div>
                <div className="list-container">{cocktailsss}</div>
            </div>
        );
    }

    handler = (cocktail) => {
        console.log('show in alcoholic', cocktail);
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

    // goToDetails = () => {
    //     let a = `${this.props.match.url}/details`;
    //     console.log('ruta', a);
    //     return(
    //         <Redirect to={`${this.props.match.url}/details`}></Redirect>
    //     )
    // }
}

// const ListItem = ({ strDrink, strDrinkThumb }) =>
//     <div className="list-item">
//         <div className="item">
//             <img src={strDrinkThumb} className="cocktail-img"></img>
//             <p>{strDrink}</p>
//         </div>
//     </div>

export default Alcoholic;