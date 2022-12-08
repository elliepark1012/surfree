import { React } from "react";
// import { Link } from "react-router-dom";

const NewShopListItem = ({ shop }) => {
  
    const { name, location, price, backgroundSrc, rating } = shop
     
    return (
      <li className="card"> 
        <img className="card-image" src={backgroundSrc} alt={name} /> 
        <h1 className="card-name">{name}</h1>
        <div className="price-rating-grid">
          <div className="price-rating-grid-box1">${price}/h</div>
          <div className="price-rating-grid-box2">{rating}</div>
          <div className="price-rating-grid-box3">Board Rental</div>
          <div className="price-rating-grid-box4">Average Rating</div> 
        </div>
        <h2 className="card-location">📍 {location} </h2>
        </li>
    );
  };

  export default NewShopListItem;