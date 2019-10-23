import React, { useContext, memo } from "react";
import { ContextProject } from "../context";
import Slider from "react-slick";
import { settingsTshirt } from "./uiReactSlick";
import { SectionTshirtData, TitleTshirtData } from "./uiNewProduct";
import TshirtNewItem from "./tshirtNewItem";

const TshirtNew = () => {
  const context = useContext(ContextProject);

  return (
    <SectionTshirtData>
      <TitleTshirtData>تیشرت های جدید</TitleTshirtData>
      <Slider {...settingsTshirt}>
        {context.tshirtData
          .filter(data => data.new === true)
          .map(data => (
            <TshirtNewItem key={data.name} data={data} />
          ))}
      </Slider>
    </SectionTshirtData>
  );
};

export default memo(TshirtNew);
