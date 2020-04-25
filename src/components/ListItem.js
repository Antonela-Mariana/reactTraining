import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    render() {
        return (
            <div className="list-item">
                <div className="item">
                    <img src={this.props.cocktail.strDrinkThumb} className="cocktail-img" onClick={this.handler}></img>
                    {/* <Link to={`${this.props.detailsUrl}/${this.props.cocktail.idDrink}`}>{this.props.cocktail.strDrink}</Link> */}
                    <Link to={`details/${this.props.cocktail.idDrink}`}>{this.props.cocktail.strDrink}</Link>
                </div>
            </div>
        )
    }

    handler = () => {
        this.props.handler(this.props.cocktail);
    }

    imageClick = () => {
        console.log('Click');
        return <Redirect to="/details-img" />
    }
}





export default ListItem;