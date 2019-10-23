import React, { memo } from "react";
import { SectionTopDataChild, LinkTopData } from "./uiTopProduct";

const TopProductItem = ({ data }) => {
  return (
    <SectionTopDataChild to={data.name}>
      <LinkTopData to={`/topProduct/${data.name}`}>
        <img src={data.img} alt={data.name} />
        <h4>{data.name}</h4>
        <del>{data.oldPrice}</del>
        <p>{data.newPrice}</p>
        <span>مشخصات</span>
      </LinkTopData>
    </SectionTopDataChild>
  );
};

export default memo(TopProductItem);
