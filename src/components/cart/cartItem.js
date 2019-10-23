import React, { useContext } from "react";
import { ContextProject } from "../context";
import { SectionCartItem } from "./uiCart";

const CartItem = ({ index, cart }) => {
  const context = useContext(ContextProject);

  return (
    <SectionCartItem>
      <img src={cart.img} alt={cart.name} />
      <h3>{cart.name}</h3>
      <div>
        <del>{cart.oldPrice} قیمت قبلی</del>
        <p>{cart.newPrice} قیمت با تخفیف</p>
      </div>
      <section>
        <button onClick={() => context.handleDeleteItemCart(index)}>
          <h5>حذف</h5>
        </button>
        <div>
          <p onClick={() => context.handleIncrimentCartItem(index)}> + </p>
          <span> {cart.number} </span>
          <p onClick={() => context.handleDecrimentCartItem(index)}> - </p>
        </div>
      </section>
    </SectionCartItem>
  );
};

export default CartItem;
