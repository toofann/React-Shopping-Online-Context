import React, { useContext, memo } from "react";
import { ContextProject } from "../context";
import { TitleSocks, SectionSocks } from "./uiProducts";
import SocksItem from "./socksItem";

const Socks = () => {
  const context = useContext(ContextProject);
  return (
    <>
      <TitleSocks>جوراب ها</TitleSocks>

      <SectionSocks>
        {context.socksData.map(data => (
          <SocksItem key={data.name} data={data} />
        ))}
      </SectionSocks>
    </>
  );
};

export default memo(Socks);
