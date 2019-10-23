import React from "react";
import { SectionTshirtChild, LinkTshirtItem } from "./uiProducts";

const TshirtItem = ({ data }) => {
  return (
    <SectionTshirtChild>
      <LinkTshirtItem to={`/tshirt/${data.name}`}>
        <img src={data.img} alt={data.name} />
        <h2>{data.name}</h2>
        <del>{data.oldPrice}</del>
        <p>{data.newPrice}</p>
        <span>مشخصات</span>
      </LinkTshirtItem>
    </SectionTshirtChild>
  );
};

export default TshirtItem;
