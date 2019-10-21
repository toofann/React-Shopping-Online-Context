import React, { useContext} from "react";
import { ContextProject } from "../../App";
import styled from "styled-components";
import { Link } from "react-router-dom";
const MainCArtItem = styled.main`
  padding-top: 50px;
  text-align: center;
`;
const TitleCartItem = styled.h2`
  color: #323832;
  padding-bottom: 30px;
  text-shadow: 1px 1px 1px black;
`;
const SectionCartItem = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 70px;
  margin: 20px auto;
  box-shadow: 3px 3px 6px 1px #f5c2dd;
  border-radius: 10px;
  & img {
    width: 70px;
    height: 70px;
  }
  & button {
    width: 50px;
    height: 20px;
    background-color: red;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin: 8px auto;
  }
  & p {
    color: green;
  }
  & span:first-child {
    border: 1px solid green;
  }
  }
  & section {
    display: flex;
    flex-direction: column;
    align-self: center;
  }
  & section > div p{
    display:inline-block;
    margin:5px;
    cursor: pointer;
  }
  &section >div >p:last-child{
    font-size:50px;
  }
  & div,
  button {
    padding: 0px 15px;
  }
`;
const PayCart = styled.section`
  margin-top: 70px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & div > p {
    padding: 7px;
    color: #005555;
    direction: rtl !important;
  }
  & h2 {
    color: #003535;
    padding-bottom: 15px;
    text-shadow: 3px 3px 6px 1px #cbfeda;
  }
`;
const PayCartLinl = styled(Link)`
  width: 60%;
  margin: 10px auto;
  padding: 8px 20px;
  background-color: #0ff777;
  border-radius: 5px;
  border: none;
  color: #eaeaea;
  cursor: pointer;
    &:hover {
      text-shadow: 2px 2px 5px black;
      background-color:#0acd62;
    }
  }
`;
const Cart = props => {
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
    <MainCArtItem>
      {context.cart[0] ? (
        <TitleCartItem>سبد خرید شما</TitleCartItem>
      ) : (
        <TitleCartItem>سبد خرید شما خالی است</TitleCartItem>
      )}

      {context.cart.map((cart, index) => (
        <SectionCartItem key={index}>
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
      ))}
      {context.cart[0] ? (
        <PayCart>
          <h2>پیش فاکتور</h2>
          <div>
            <p>جمع خرید شما : {TotalPayCart()} تومان</p>
            <p>جمع تخفیف شما : {TotalOffPayCart()} تومان</p>
          </div>
          <PayCartLinl to="/payment">
            <h3>نهایی کردن خرید و پرداخت</h3>
          </PayCartLinl>
        </PayCart>
      ) : null}
    </MainCArtItem>
  );
};

export default Cart;
