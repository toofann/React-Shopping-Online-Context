import React, { useContext } from "react";
import { ContextProject } from "../../App";
import { PayCartLink, PayCartSection } from "./uiCart";

const PayCart = () => {
  const context = useContext(ContextProject);
  const TotalPayCart = () => {
    return context.cart.reduce((carr, prevValue) => {
      let newValue = prevValue.newPrice * prevValue.number;
      return carr + newValue;
    }, 0);
  };

  const TotalOffPayCart = () => {
    return context.cart.reduce((carr, prevValue) => {
      let newOffValue =
        (prevValue.oldPrice - prevValue.newPrice) * prevValue.number;
      return (carr += newOffValue);
    }, 0);
  };

  return (
    <PayCartSection>
      <h2>پیش فاکتور</h2>
      <div>
        <p>جمع خرید شما : {TotalPayCart()} تومان</p>
        <p>جمع تخفیف شما : {TotalOffPayCart()} تومان</p>
      </div>
      <PayCartLink to="/payment">
        <h3>نهایی کردن خرید و پرداخت</h3>
      </PayCartLink>
    </PayCartSection>
  );
};

export default PayCart;
