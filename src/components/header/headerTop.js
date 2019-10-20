import React, { useContext } from "react";
import Menu from "./menu";
import { ReactComponent as CartLogo } from "../../assets/img/icon/iconshopping-cart.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  CartShopping,
  LogoIcon,
  HeaderComponent
} from "../uiComponents/ulComponent";
import { ContextProject } from "../../App";

const AlertAddToCart = styled.div`
    position: absolute;
    top:0px;
    /* right: ${props => props.pagey}; */
    right:0px;
    padding: 20px;
    z-index: 333333333333;
    display: ${props =>
      props.addCart
        ? "visibled"
        : // &&
          // setTimeout(() => {
          // "none";
          // }, 1000)
          "none"};
    /* border: 2px solid green; */
    border-radius: 3px;
    color: green;
    background-color: rgba(255, 255, 255, 0.9);
  `;
const HeaderTop = () => {
  const context = useContext(ContextProject);
  return (
    <HeaderComponent>
      <Link to={"/cart"} style={{ position: "relative", paddingTop: "10px" }}>
        <CartShopping as={CartLogo}></CartShopping>
        <p
          style={{
            color: context.cart.length ? "green" : "red",
            fontSize: "20px",
            position: "absolute",
            top: "-3px",
            right: "9px"
          }}
        >
          {context.cart.length}
        </p>
      </Link>
      <Link to={"/"}>
        <LogoIcon>مای شاپ</LogoIcon>
      </Link>
      <Menu />
      <AlertAddToCart
        addCart={context.addCart}
        // pagex={page}
        //  pagey={page.pagey}
      >
        {context.tekrari ? (
          <p>محصول به سبد خرید اضافه شد</p>
        ) : (
          <p>محصول در سبد خرید موجود است</p>
        )}
      </AlertAddToCart>
    </HeaderComponent>
  );
};

export default HeaderTop;
