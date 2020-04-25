import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";


class ImageDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cocktail: {},
            goBack: false
        }
    }

    goBack = () => {
        this.setState({goBack: true});
        return <Redirect to="/" />
    }

    componentDidMount() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
            .then(res => {
                this.setState({ cocktail: res.data.drinks[0] });
            });
    }

    render() {
        if (this.state.goBack) {
            return <Redirect to="/" />;
        } else {
            return (
                <div>
                    <div className="details-img-list-item">
                        <div className="details-img-item">
                            <img alt='img' src={this.state.cocktail.strDrinkThumb} className="details-img"></img>
                            <p>{this.state.cocktail.strDrink}</p>
                        </div>
                    </div>
                    <button onClick={this.goBack}>Back</button>
                </div>
            )
        }
    }

}

export default ImageDetails;