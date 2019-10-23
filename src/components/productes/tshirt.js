import React, { useContext, useState, memo } from "react";
import { ContextProject } from "../context";
import { TitleTshirt, FilterSectionTshirt, SectionTshirt } from "./uiProducts";
import TshirtItem from "./tshirtItem";

const Tshirt = () => {
  const [filter, setfilter] = useState("all");
  const context = useContext(ContextProject);
  const handleFilter = () => {
    switch (filter) {
      case "all":
        return context.tshirtData;
      case "medium":
        return context.tshirtData.filter(data => data.size === "medium");
      case "larg":
        return context.tshirtData.filter(data => data.size === "larg");
      case "xlarg":
        return context.tshirtData.filter(data => data.size === "xlarg");
      case "xxlarg":
        return context.tshirtData.filter(data => data.size === "xxlarg");
      default:
        return context.tshirtData;
    }
  };
  const handleSetFilter = filterName => {
    setfilter(filterName);
  };
  return (
    <>
      <TitleTshirt>تیشرت ها</TitleTshirt>
      <FilterSectionTshirt>
        <p>بر اساس سایز انتخاب کنید</p>
        <button onClick={() => handleSetFilter("all")}>All</button>
        <button onClick={() => handleSetFilter("medium")}>Medium</button>
        <button onClick={() => handleSetFilter("larg")}>Large</button>
        <button onClick={() => handleSetFilter("xlarg")}>X large</button>
        <button onClick={() => handleSetFilter("xxlarg")}>XX large</button>
      </FilterSectionTshirt>
      <SectionTshirt>
        {handleFilter().map(data => (
          <TshirtItem key={data.name} data={data} />
        ))}
      </SectionTshirt>
    </>
  );
};

export default memo(Tshirt);
