import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import ShopForm from "./Components/ShopForm";
import ShopDetail from "./Components/ShopDetail";
import ShopList from "./Components/ShopList";

const App = () =>  {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shops")
      .then((r) => r.json())
      .then((shops) => setShops(shops));
  }, []);  

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  const onAddShop = (newShop) => {
    setShops((shops) => [...shops, newShop])
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode}/> 

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/shops">
        <ShopList shops={shops} />
      </Route>

      <Route path="/shops/new">
        <ShopForm onAddShop={onAddShop} />
      </Route>

      <Route path="/shops/:id">
        <ShopDetail /> 
      </Route>

      <Route path="/shops">
        <ShopList shops={shops} />
      </Route>

    </Switch> 
    </div>
  );
};

export default App;
