import React from "react";
import { SectionShoeDataChild, LinkShoeData } from "./uiNewProduct";

const ShoeNewItem = ({ data }) => {
  return (
    <SectionShoeDataChild>
      <LinkShoeData to={`/shoe/${data.name}`}>
        <img src={data.img} alt={data.name} />
        <h4>{data.name}</h4>
        <del>{data.oldPrice}</del>
        <p>{data.newPrice}</p>
        <span>مشخصات</span>
      </LinkShoeData>{" "}
    </SectionShoeDataChild>
  );
};

export default ShoeNewItem;
