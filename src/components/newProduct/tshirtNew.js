import React, { useContext } from "react";
import { ContextProject } from "../context";
import Slider from "react-slick";
import { settingsTshirt } from "./uiReactSlick";
import {
  SectionTshirtData,
  TitleTshirtData,
  SectionTshirtDataChild,
  LinkTshirtData
} from "./uiNewProduct";

const TshirtNew = () => {
  const context = useContext(ContextProject);

  return (
    <SectionTshirtData>
      <TitleTshirtData>تیشرت های جدید</TitleTshirtData>
      <Slider {...settingsTshirt}>
        {context.tshirtData
          .filter(data => data.new === true)
          .map(data => (
            <SectionTshirtDataChild key={data.name}>
              <LinkTshirtData to={`/tshirt/${data.name}`}>
                <img src={data.img} alt={data.name} />
                <h2>{data.name}</h2>
                <del>{data.oldPrice}</del>
                <p>{data.newPrice}</p>
                <span>مشخصات</span>
              </LinkTshirtData>{" "}
            </SectionTshirtDataChild>
          ))}
      </Slider>
    </SectionTshirtData>
  );
};

export default TshirtNew;
