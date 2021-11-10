import React, { useState } from "react";
import Nav from "./Nav";
import ReactDOM from "react-dom";
import "./App.css";
import ItemPage from "./ItemPage";
import { items } from "./static-data";
import CartPage from "./CartPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Item from "./Item";

const summarizeCart = (cart) => {
  const groupedItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || { ...item, count: 0 };
    summary[item.id].count++;
    return summary;
  }, {});
  return Object.values(groupedItems);
};

const App = () => {
  const [activeTab, setActiveTab] = useState("items");
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
        <nav>
          <li>
            <Link to="/item">Item </Link>
            <Link to="/cart">Card </Link>
          </li>
        </nav>

        <Switch>
          <Route path="/item">
            <ItemPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
        </Switch>

        <Nav activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="App-content">
          {" "}
          {/* <Content
            tab={activeTab}
            onAddToCart={addToCart}
            onRemoveItem={removeItem}
            cart={summarizeCart(cart)}
          />{" "} */}
        </main>
      </div>
    </Router>
  );
};

const Content = ({ tab, onAddToCart, onRemoveItem, cart }) => {
  switch (tab) {
    default:
    case "items":
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    case "cart":
      return (
        <CartPage
          items={cart}
          onAddOne={onAddToCart}
          onRemoveOne={onRemoveItem}
        />
      );
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));
