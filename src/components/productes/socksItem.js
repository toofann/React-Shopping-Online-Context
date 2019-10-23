import React from "react";
import { SectionSocksChild, LinkSocksItem } from "./uiProducts";

const SocksItem = ({ data }) => {
  return (
    <SectionSocksChild>
      <LinkSocksItem to={`/socks/${data.name}`}>
        <img src={data.img} alt={data.name} />
        <h2>{data.name}</h2>
        <del>{data.oldPrice}</del>
        <p>{data.newPrice}</p>
        <span>مشخصات</span>
      </LinkSocksItem>
    </SectionSocksChild>
  );
};

export default SocksItem;
