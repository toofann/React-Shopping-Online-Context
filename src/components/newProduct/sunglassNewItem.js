import React from "react";
import { SectionSunglassDataChild, LinkSunglassData } from "./uiNewProduct";

const SunglassNewItem = ({ data }) => {
  return (
    <SectionSunglassDataChild>
      <LinkSunglassData to={`/sunglass/${data.name}`}>
        <img src={data.img} alt={data.name} />
        <h5>{data.name}</h5>
        <del>{data.oldPrice}</del>
        <p>{data.newPrice}</p>
        <span>مشخصات</span>
      </LinkSunglassData>{" "}
    </SectionSunglassDataChild>
  );
};

export default SunglassNewItem;
