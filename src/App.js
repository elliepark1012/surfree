import './App.css';
import shops from "./shops"
import Header from "./Components/Header";
import ShopList from "./Components/ShopList";

const App = () =>  {

  return (
    <div className="App">
    <Header /> 
     Hello
    <ShopList shops={shops} />
    </div>
  );
}

export default App;
