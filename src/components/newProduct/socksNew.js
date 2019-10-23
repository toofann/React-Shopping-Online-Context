import React, { useContext } from "react";
import { ContextProject } from "../context";
import Slider from "react-slick";
import { settingsSocks } from "./uiReactSlick";
import {
  SectionSocksData,
  TitleSocksData,
  SectionSocksDataChild,
  LinkSocksData
} from "./uiNewProduct";

const SocksNew = () => {
  const context = useContext(ContextProject);

  return (
    <SectionSocksData>
      <TitleSocksData>جوراب های جدید</TitleSocksData>
      <Slider {...settingsSocks}>
        {context.socksData
          .filter(data => data.new === true)
          .map(data => (
            <SectionSocksDataChild key={data.name}>
              <LinkSocksData to={`/socks/${data.name}`}>
                <img src={data.img} alt={data.name} />
                <h4>{data.name}</h4>
                <del>{data.oldPrice}</del>
                <p>{data.newPrice}</p>
                <span>مشخصات</span>
              </LinkSocksData>
            </SectionSocksDataChild>
          ))}
      </Slider>
    </SectionSocksData>
  );
};

export default SocksNew;
