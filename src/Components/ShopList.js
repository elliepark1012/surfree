import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShopListItem from "./ShopListItem";

const ShopList = ({ shops }) => {
   
    const [searchQuery, setSearchQuery] = useState("");
  
    const searchResults = shops.filter((shop) => {
      return shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             shop.location.toLowerCase().includes(searchQuery.toLowerCase());
    });
  
    const shopListItems = searchResults.map((shop) => {
      return (
        <Link to={`/shops/${shop.id}`}>
           <ShopListItem 
              key={shop.id} 
              shop={shop} 
            /> 
        </Link>
      );
    });
  
    const handleOnChange = (e) => setSearchQuery(e.target.value);
  
     const [newShops, setNewShops] = useState([]);

    useEffect(() => {
        //fetch the 3 most recently added shops from json-server
        fetch("http://localhost:3000/shops?_sort=id&_order=desc&_limit=3")
         .then((r) => r.json())
         .then((newShops) => {
            setNewShops(newShops)
         });
    },[]);
    return (
      <section>
        <h2>Shops</h2>
          {/* want to add filtered options for location */}
        <input type="text" placeholder="Search..." onChange={handleOnChange} />
         <h3>New Shops</h3> 
            {newShops.map((shop) => (
                <p key={shop.id}>{shop.name}</p>
            ))}
             <div style={{margin: "1rem 0"}}>
                <Link to="/shops" className="button">
                    View All Shops
                </Link> </div> 
        <ul className="cards">{shopListItems}</ul>
      </section>
    )
  }

  export default ShopList;