import React from "react";

const ImageDetails = ({ strDrink, strDrinkThumb }) =>
    <div className="details-img-list-item">
        <div className="details-img-item">
            <img src={strDrinkThumb} className="details-img"></img>
            <p>{strDrink}</p>
        </div>
    </div>

export default ImageDetails;