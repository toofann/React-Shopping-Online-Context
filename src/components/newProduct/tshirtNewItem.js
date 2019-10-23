import React from "react";
import { SectionTshirtDataChild, LinkTshirtData } from "./uiNewProduct";

const TshirtNewItem = ({ data }) => {
  return (
    <SectionTshirtDataChild>
      <LinkTshirtData to={`/tshirt/${data.name}`}>
        <img src={data.img} alt={data.name} />
        <h2>{data.name}</h2>
        <del>{data.oldPrice}</del>
        <p>{data.newPrice}</p>
        <span>مشخصات</span>
      </LinkTshirtData>{" "}
    </SectionTshirtDataChild>
  );
};

export default TshirtNewItem;
