import React, { useContext, memo } from "react";
import Menu from "./menu";
import { ReactComponent as CartLogo } from "../../assets/img/icon/iconshopping-cart.svg";
import { Link } from "react-router-dom";
import { ContextProject } from "../context";
import {
  AlertAddToCart,
  HeaderTopComponent,
  CartShopping,
  LogoIcon
} from "./uiHeader";

const HeaderTop = () => {
  const context = useContext(ContextProject);

  return (
    <HeaderTopComponent>
      <Link to={"/cart"} style={{ position: "relative", paddingTop: "10px" }}>
        <CartShopping as={CartLogo}></CartShopping>
        <p
          style={{
            color: context.cart.length ? "green" : "red",
            fontSize: "20px",
            position: "absolute",
            top: "-3px",
            right: "9px"
          }}>
          {context.cart.length}
        </p>
      </Link>
      <Link to={"/"}>
        <LogoIcon>مای شاپ</LogoIcon>
      </Link>
      <Menu />
      <AlertAddToCart addCart={context.addCart}>
        {context.tekrari ? (
          <p>محصول به سبد خرید اضافه شد</p>
        ) : (
          <p>محصول در سبد خرید موجود است</p>
        )}
      </AlertAddToCart>
    </HeaderTopComponent>
  );
};

export default memo(HeaderTop);
