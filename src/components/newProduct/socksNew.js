import React, { useContext, memo } from "react";
import { ContextProject } from "../context";
import Slider from "react-slick";
import { settingsSocks } from "./uiReactSlick";
import { SectionSocksData, TitleSocksData } from "./uiNewProduct";
import SocksNweItem from "./socksNewItem";

const SocksNew = () => {
  const context = useContext(ContextProject);

  return (
    <SectionSocksData>
      <TitleSocksData>جوراب های جدید</TitleSocksData>
      <Slider {...settingsSocks}>
        {context.socksData
          .filter(data => data.new === true)
          .map(data => (
            <SocksNweItem key={data.name} data={data} />
          ))}
      </Slider>
    </SectionSocksData>
  );
};

export default memo(SocksNew);
