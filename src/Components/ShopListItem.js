import { React } from "react";
// import { Link } from "react-router-dom";

const ShopListItem = ({ shop }) => {
  console.log(shop)
    const { name, location, price, backgroundSrc, link, contact, rating } = shop
     
    return (
      <li className="card"> 
        <img className="card-image" src={backgroundSrc} alt={name} /> 
        <h1 className="card-header--title">{name}</h1>
        <div className="card-body">
        
        <div className="body-content">
        <h4>{location}</h4>
        <h4>Rent hourly: {price}</h4>
        <h4>{contact}</h4>
        <h4>{rating}</h4>
        <h4>{link}</h4>
       </div>
        </div>
        </li>
    );
  };

  export default ShopListItem;