import React, { useContext } from "react";
import { ContextProject } from "../context";
import Slider from "react-slick";
import { settingsShoe } from "./uiReactSlick";
import {
  SectionShoeData,
  TitleShoeData,
  SectionShoeDataChild,
  LinkShoeData
} from "./uiNewProduct";

const ShoeNew = () => {
  const context = useContext(ContextProject);

  return (
    <SectionShoeData>
      <TitleShoeData>کفش های جدید</TitleShoeData>
      <Slider {...settingsShoe}>
        {context.shoeData
          .filter(data => data.new === true)
          .map(data => (
            <SectionShoeDataChild key={data.name}>
              <LinkShoeData to={`/shoe/${data.name}`}>
                <img src={data.img} alt={data.name} />
                <h4>{data.name}</h4>
                <del>{data.oldPrice}</del>
                <p>{data.newPrice}</p>
                <span>مشخصات</span>
              </LinkShoeData>{" "}
            </SectionShoeDataChild>
          ))}
      </Slider>
    </SectionShoeData>
  );
};

export default ShoeNew;
