import React, { useContext } from "react";
import { ContextProject } from "../context";
import { MainCArtItem, TitleCartItem } from "./uiCart";
import CartItem from "./cartItem";
import PayCart from "./payCart";
import WithErrorHandeling from "../errorHandeling";

const Cart = props => {
  const context = useContext(ContextProject);

  return (
    <MainCArtItem>
      {context.cart[0] ? (
        <TitleCartItem>سبد خرید شما</TitleCartItem>
      ) : (
        <TitleCartItem>سبد خرید شما خالی است</TitleCartItem>
      )}
      {context.cart.map((cart, index) => (
        <CartItem key={cart.name} cart={cart} index={index} />
      ))}
      {context.cart[0] ? <PayCart /> : null}
    </MainCArtItem>
  );
};

export default WithErrorHandeling(Cart);
