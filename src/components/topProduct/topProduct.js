import React, { useContext, memo } from "react";
import { ContextProject } from "../context";
import Slider from "react-slick";
import { settingsTopProduct } from "./uiReactSlickTopProduct";
import { SectionTopData, TitleTopData } from "./uiTopProduct";
import TopProductItem from "./topProductItem";

const TopProduct = () => {
  const context = useContext(ContextProject);

  return (
    <SectionTopData>
      <TitleTopData>محصولات پر فروش</TitleTopData>
      <Slider {...settingsTopProduct}>
        {context.topData.map(data => (
          <TopProductItem key={data.name} data={data} />
        ))}
      </Slider>
    </SectionTopData>
  );
};

export default memo(TopProduct);
