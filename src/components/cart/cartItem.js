import React, { useContext, memo } from "react";
import { ContextProject } from "../context";
import { SectionCartItem } from "./uiCart";

const CartItem = ({ index, cart }) => {
  const context = useContext(ContextProject);
  const handleDelete = () => {
    context.handleDeleteItemCart(index);
  };
  const handleIncriment = () => {
    context.handleIncrimentCartItem(index);
  };
  const handleDecriment = () => {
    context.handleDecrimentCartItem(index);
  };

  return (
    <SectionCartItem>
      <img src={cart.img} alt={cart.name} />
      <h3>{cart.name}</h3>
      <div>
        <del>{cart.oldPrice} قیمت قبلی</del>
        <p>{cart.newPrice} قیمت با تخفیف</p>
      </div>
      <section>
        <button onClick={handleDelete}>
          <h5>حذف</h5>
        </button>
        <div>
          <p onClick={handleIncriment}> + </p>
          <span> {cart.number} </span>
          <p onClick={handleDecriment}> - </p>
        </div>
      </section>
    </SectionCartItem>
  );
};

export default memo(CartItem);
