import React, { Component } from "react";
import axios from 'axios';
import ListItem from './ListItem';
import CocktailDetails from './CocktailDetails';
import { Switch, Route, Redirect } from "react-router-dom";
import ImageDetails from "./ImageDetails";

class Category extends Component{
    constructor(props) {
        console.log('prrops', props);
        super(props);

        this.state = {
            cocktails: [],
            showDetails: false,
            selected: null,
            type: 'alcoholic'
        };
    }

    componentDidMount() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ cocktails: res.data.drinks });
            });
    }

    render() {
        console.log('wwww', this.props.match);
        const cocktailsss = this.state.cocktails.map((cocktail, index) => <ListItem cocktail={cocktail} key={index} handler={this.handler} details={this.goToDetails}/>)
        return (
            <div>
                {/* <Switch>
                    <Route path={`${this.props.match.url}/details`} component={ImageDetails}></Route>
                </Switch> */}
                {this.state.showDetails ? <CocktailDetails cocktail={this.state.selected} hide={this.hide} /> : null}
                <div className="title"><h1>These are {this.props.type} cocktails!</h1></div>
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

    goToDetails = () => {
        let a = `${this.props.match.url}/details`;
        console.log('ruta', a);
        //<Redirect to={}></Redirect>
    }
}

export default Category;