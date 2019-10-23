import React from "react";
import { SectionSunglassChild, LinkSunglassItem } from "./uiProducts";

const SunGlassItem = ({ data }) => {
  return (
    <SectionSunglassChild>
      <LinkSunglassItem to={`/sunglass/${data.name}`}>
        <img src={data.img} alt={data.name} />
        <h2>{data.name}</h2>
        <del>{data.oldPrice}</del>
        <p>{data.newPrice}</p>
        <span>مشخصات</span>
      </LinkSunglassItem>{" "}
    </SectionSunglassChild>
  );
};

export default SunGlassItem;
