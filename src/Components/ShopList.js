import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShopListItem from "./ShopListItem";
import NewShopListItem from "./NewShopListItem";

const ShopList = ({ shops }) => {
   
    const [searchQuery, setSearchQuery] = useState("");
    const [newShops, setNewShops] = useState([]);
  
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

    const newShopListItem = newShops.map((shop) => {
      return (
        <Link to={`/shops/${shop.id}`}>
        <NewShopListItem 
           key={shop.id} 
           shop={shop} 
         /> 
     </Link>
      )
    })
  
    const handleOnChange = (e) => setSearchQuery(e.target.value);
    
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
        <h1 className="shoplist-header">All Shops</h1>
           {/* want to add filtered options for location */}
        <div className="search-box">
          <input className="search-input" type="text" placeholder="Search for your next surf shop 🏄" onChange={handleOnChange} autoFocus required/> 
        </div>
        {/* <div style={{margin: "1rem 0"}}>
                <Link to="/shops" className="button">
                    View All Shops
                </Link> </div>  */}          
        <ul className="cards">{shopListItems}</ul>
        <h1 className="shoplist-header">New Shops</h1>
        <ul className="cards">{newShopListItem}</ul>
      </section>
    )
  }

  export default ShopList;