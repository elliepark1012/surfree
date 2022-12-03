import { React, useState } from "react"
import ShopListItem from "./ShopListItem";

const ShopList = ({ shops }) => {
    console.log(shops)
    const [searchQuery, setSearchQuery] = useState("");
  
    const searchResults = shops.filter((shop) => {
      return shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             shop.location.toLowerCase().includes(searchQuery.toLowerCase());
    });
  
    const shopListItems = searchResults.map((shop) => (
      <ShopListItem key={shop.id} {...shop} /> 
    ))
  
    const handleOnChange = (e) => setSearchQuery(e.target.value);
  
    return (
      <section>
        <h2>Shops</h2>
          {/* want to add filtered options for location */}
        <input type="text" placeholder="Search..." onChange={handleOnChange} />
        <ul className="cards">{shopListItems}</ul>
      </section>
    )
  }

  export default ShopList