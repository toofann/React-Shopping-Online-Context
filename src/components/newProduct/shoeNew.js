import React, { useContext, memo } from "react";
import { ContextProject } from "../context";
import Slider from "react-slick";
import { settingsShoe } from "./uiReactSlick";
import { SectionShoeData, TitleShoeData } from "./uiNewProduct";
import ShoeNewItem from "./shoeNewItem";

const ShoeNew = () => {
  const context = useContext(ContextProject);

  return (
    <SectionShoeData>
      <TitleShoeData>کفش های جدید</TitleShoeData>
      <Slider {...settingsShoe}>
        {context.shoeData
          .filter(data => data.new === true)
          .map(data => (
            <ShoeNewItem key={data.name} data={data} />
          ))}
      </Slider>
    </SectionShoeData>
  );
};

export default memo(ShoeNew);
