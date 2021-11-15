import React, { useState } from "react";
import Nav from "./Nav";
import ReactDOM from "react-dom";
import "./App.css";
import ItemPage from "./ItemPage";
import { items } from "./static-data";
import CartPage from "./CartPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const summarizeCart = (cart) => {
  const groupedItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || { ...item, count: 0 };
    summary[item.id].count++;
    return summary;
  }, {});
  return Object.values(groupedItems);
};

const App = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  const removeItem = (item) => {
    let index = cart.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      setCart((cart) => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      });
    }
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <main className="App-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/item" />} />
            <Route path="/item">
              <ItemPage items={items} onAddToCart={addToCart}></ItemPage>
            </Route>
            <Route path="/cart">
              <CartPage
                items={summarizeCart(cart)}
                onAddOne={addToCart}
                onRemoveOne={removeItem}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
