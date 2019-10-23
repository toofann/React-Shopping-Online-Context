import React from "react";
import { SectionShoeChild, LinkShoeItem } from "./uiProducts";

const ShoeItem = ({ data }) => {
  return (
    <SectionShoeChild>
      <LinkShoeItem to={`/shoe/${data.name}`}>
        <img src={data.img} alt={data.name} />
        <h2>{data.name}</h2>
        <del>{data.oldPrice}</del>
        <p>{data.newPrice}</p>
        <span>مشخصات</span>
      </LinkShoeItem>{" "}
    </SectionShoeChild>
  );
};

export default ShoeItem;
