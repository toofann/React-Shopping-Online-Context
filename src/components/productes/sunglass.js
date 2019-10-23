import React, { useContext } from "react";
import { ContextProject } from "../context";
import {
  TitleSunglass,
  SectionSunglass,
  SectionSunglassChild,
  LinkSunglassItem
} from "./uiProducts";

const Sunglass = () => {
  const context = useContext(ContextProject);
  return (
    <>
      <TitleSunglass>عینک ها</TitleSunglass>

      <SectionSunglass>
        {context.sunglassData.map(data => (
          <SectionSunglassChild key={data.name}>
            <LinkSunglassItem to={`/sunglass/${data.name}`}>
              <img src={data.img} alt={data.name} />
              <h2>{data.name}</h2>
              <del>{data.oldPrice}</del>
              <p>{data.newPrice}</p>
              <span>مشخصات</span>
            </LinkSunglassItem>{" "}
          </SectionSunglassChild>
        ))}
      </SectionSunglass>
    </>
  );
};

export default Sunglass;
