import { React } from "react";

const ShopListItem = ({ shop, logIn }) => {
    const { name, location, price, backgroundSrc, rating } = shop
    const priceVariant = logIn? `$${price}/h` : `🙌 $${price -3}/h 🙌`
     
    return (
      <li className="card"> 
        <img className="card-image" src={backgroundSrc} alt={name} /> 
        <h1 className="card-name">{name}</h1>
        <div className="price-rating-grid">
          <div className="price-rating-grid-box1">{priceVariant}</div>
          <div className="price-rating-grid-box2">{rating}</div>
          <div className="price-rating-grid-box3">Board Rental</div>
          <div className="price-rating-grid-box4">Average Rating</div> 
        </div>
        <h2 className="card-location">📍 {location} </h2>
      </li>
    );
  };

  export default ShopListItem;