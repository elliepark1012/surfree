const ShopListItem = ( {id, name, location, price, backgourndSrc, link, contact, rating }) => {

    return (
      <li className="card"> 
        <img style = {{width: "200px", 
        height: "200px", 
        // this line of the code has issue
        // backgroundImage: url(backgroundSrc) 
    }} /> 
        <h4>{name}</h4>
        <h4>{location}</h4>
        <h4>Rent hourly: {price}</h4>
        <h4>{contact}</h4>
        <h4>{rating}</h4>
        <h4>{link}</h4>
        </li>
    )
  
  }

  export default ShopListItem