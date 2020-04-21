import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';

// const ListItem = (props) =>
//     <div className="list-item">
//         <div className="item">
//             <img src={props.cocktail.strDrinkThumb} className="cocktail-img" onClick={() => <Redirect to="/details-img" />}></img>
//             <div onClick={props.handler}>{props.cocktail.strDrink}</div>
//         </div>
//     </div>



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
                    <img src={this.props.cocktail.strDrinkThumb} className="cocktail-img" onClick={() => <Redirect to="/details-img" />}></img>
                    <div className="clickable" onClick={this.handler}>{this.props.cocktail.strDrink}</div>
                </div>
            </div>
        )
    }

    handler = () => {
        this.props.handler(this.props.cocktail);
    }
}


// const imageClick = () => {
//     console.log('Click');
//     return <Redirect to="details-img" />
// }


export default ListItem;