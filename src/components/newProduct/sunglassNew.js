import React, { useContext } from "react";
import { ContextProject } from "../context";
import Slider from "react-slick";
import { settingsSunglass } from "./uiReactSlick";
import {
  SectionSunglassData,
  TitleSunglassData,
  SectionSunglassDataChild,
  LinkSunglassData
} from "./uiNewProduct";

const SunglassNew = () => {
  const context = useContext(ContextProject);

  return (
    <SectionSunglassData>
      <TitleSunglassData>عینک های جدید</TitleSunglassData>
      <Slider {...settingsSunglass}>
        {context.sunglassData
          .filter(data => data.new === true)
          .map(data => (
            <SectionSunglassDataChild key={data.name}>
              <LinkSunglassData to={`/sunglass/${data.name}`}>
                <img src={data.img} alt={data.name} />
                <h5>{data.name}</h5>
                <del>{data.oldPrice}</del>
                <p>{data.newPrice}</p>
                <span>مشخصات</span>
              </LinkSunglassData>{" "}
            </SectionSunglassDataChild>
          ))}
      </Slider>
    </SectionSunglassData>
  );
};

export default SunglassNew;
