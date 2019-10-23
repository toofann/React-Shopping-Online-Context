import React, { useContext } from "react";
import { ContextProject } from "../context";
import {
  SectionImegeOpenViewProduct,
  ImageOpenViewProduct
} from "./uiProducts";

const ProductView = props => {
  const context = useContext(ContextProject);

  return (
    <SectionImegeOpenViewProduct>
      <ImageOpenViewProduct src={props.data.img} alt="tshirt1" />
      <h2>{props.data.name} :نام محصول</h2>
      <del>{props.data.oldPrice} :قیمت قبلی</del>
      <p>{props.data.newPrice} :قیمت با تخفیف</p>
      <button onClick={() => context.handleAddToCart(props.data)}>
        <h3>اضافه کردن به سبد خرید</h3>
      </button>
    </SectionImegeOpenViewProduct>
  );
};

export default ProductView;
