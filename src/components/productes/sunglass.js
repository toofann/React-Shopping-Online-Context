import React, { useContext, memo } from "react";
import { ContextProject } from "../context";
import { TitleSunglass, SectionSunglass } from "./uiProducts";

const Sunglass = () => {
  const context = useContext(ContextProject);
  return (
    <>
      <TitleSunglass>عینک ها</TitleSunglass>

      <SectionSunglass>
        {context.sunglassData.map(data => (
          <Sunglass key={data.name} data={data} />
        ))}
      </SectionSunglass>
    </>
  );
};

export default memo(Sunglass);
