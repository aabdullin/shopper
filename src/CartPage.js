import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./CartPage.css";

function CartPage({ items, onAddOne, onRemoveOne }) {
  const getCartTotals = (cart) => {
    return cart.reduce((accu, item) => {
      return accu + item.price * item.count;
    }, 0);
  };
  return (
    <ul className="CartPage-items">
      {" "}
      {items.map((item) => (
        <li key={item.id} className="CartPage-item">
          <Item item={item}>
            <div className="CartItem-controls">
              {" "}
              <button
                className="CartItem-removeOne"
                onClick={() => onRemoveOne(item)}
              >
                &ndash;
              </button>{" "}
              <span className="CartItem-count">{item.count}</span>{" "}
              <button
                className="CartItem-addOne"
                onClick={() => onAddOne(item)}
              >
                +
              </button>{" "}
            </div>
          </Item>
        </li>
      ))}
      <div className="total">Total: {getCartTotals(items)}</div>
    </ul>
  );
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
};

export default CartPage;
