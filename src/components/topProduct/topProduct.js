import React, { useContext } from "react";
import { ContextProject } from "../context";
import Slider from "react-slick";
import { settingsTopProduct } from "./uiReactSlickTopProduct";
import {
  SectionTopData,
  TitleTopData,
  SectionTopDataChild,
  LinkTopData
} from "./uiTopProduct";

const TopProduct = () => {
  const context = useContext(ContextProject);

  return (
    <SectionTopData>
      <TitleTopData>محصولات پر فروش</TitleTopData>
      <Slider {...settingsTopProduct}>
        {context.topData.map(data => (
          <SectionTopDataChild to={data.name} key={data.name}>
            <LinkTopData to={`/topProduct/${data.name}`}>
              <img src={data.img} alt={data.name} />
              <h4>{data.name}</h4>
              <del>{data.oldPrice}</del>
              <p>{data.newPrice}</p>
              <span>مشخصات</span>
            </LinkTopData>
          </SectionTopDataChild>
        ))}
      </Slider>
    </SectionTopData>
  );
};

export default TopProduct;
