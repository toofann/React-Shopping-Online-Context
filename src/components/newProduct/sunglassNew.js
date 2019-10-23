import React, { useContext, memo } from "react";
import { ContextProject } from "../context";
import Slider from "react-slick";
import { settingsSunglass } from "./uiReactSlick";
import { SectionSunglassData, TitleSunglassData } from "./uiNewProduct";
import SunglassNewItem from "./sunglassNewItem";

const SunglassNew = () => {
  const context = useContext(ContextProject);

  return (
    <SectionSunglassData>
      <TitleSunglassData>عینک های جدید</TitleSunglassData>
      <Slider {...settingsSunglass}>
        {context.sunglassData
          .filter(data => data.new === true)
          .map(data => (
            <SunglassNewItem key={data.name} data={data} />
          ))}
      </Slider>
    </SectionSunglassData>
  );
};

export default memo(SunglassNew);
