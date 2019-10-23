import React from "react";
import { SectionSocksDataChild, LinkSocksData } from "./uiNewProduct";

const SocksNweItem = ({ data }) => {
  return (
    <SectionSocksDataChild>
      <LinkSocksData to={`/socks/${data.name}`}>
        <img src={data.img} alt={data.name} />
        <h4>{data.name}</h4>
        <del>{data.oldPrice}</del>
        <p>{data.newPrice}</p>
        <span>مشخصات</span>
      </LinkSocksData>
    </SectionSocksDataChild>
  );
};

export default SocksNweItem;
