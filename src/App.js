import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import ShopForm from "./Components/ShopForm";
import ShopDetail from "./Components/ShopDetail";
import ShopList from "./Components/ShopList";

const App = () =>  {
  const [logIn, setLogIn] = useState(true);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shops")
      .then((r) => r.json())
      .then((shops) => setShops(shops));
  }, []);  

  const onToggleLogIn = () => {
    setLogIn((logIn) => !logIn)
  }

  const onAddShop = (newShop) => {
    setShops((shops) => [...shops, newShop])
  }

  return (
    <div>
      <Header logIn={logIn} onToggleLogIn={onToggleLogIn}/> 

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/shops/new">
        <ShopForm onAddShop={onAddShop} />
      </Route>

      <Route path="/shops/:id">
        <ShopDetail logIn={logIn}/> 
      </Route>

      <Route path="/shops">
        <ShopList shops={shops} logIn={logIn} />
      </Route>
    </Switch> 
    </div>
  );
};

export default App;