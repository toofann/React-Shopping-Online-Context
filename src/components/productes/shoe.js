import React, { useContext, useState, memo } from "react";
import { ContextProject } from "../context";
import { TitleShoe, FilterSectionShoe, SectionShoe } from "./uiProducts";
import ShoeItem from "./shoeItem";

const Shoe = () => {
  const [filter, setfilter] = useState("all");
  const context = useContext(ContextProject);
  const handleFilter = () => {
    switch (filter) {
      case "all":
        return context.shoeData;
      case 38:
        return context.shoeData.filter(data => data.size === 38);
      case 40:
        return context.shoeData.filter(data => data.size === 40);
      case 42:
        return context.shoeData.filter(data => data.size === 42);
      case 44:
        return context.shoeData.filter(data => data.size === 44);
      default:
        return context.shoeData;
    }
  };
  const handleSetFilter = filterName => {
    setfilter(filterName);
  };
  return (
    <>
      <TitleShoe>کفش ها</TitleShoe>
      <FilterSectionShoe>
        <p>بر اساس سایز انتخاب کنید</p>
        <button onClick={() => handleSetFilter("all")}>All</button>
        <button onClick={() => handleSetFilter(38)}>38</button>
        <button onClick={() => handleSetFilter(40)}>40</button>
        <button onClick={() => handleSetFilter(42)}>42</button>
        <button onClick={() => handleSetFilter(44)}>44</button>
      </FilterSectionShoe>
      <SectionShoe>
        {handleFilter().map(data => (
          <ShoeItem key={data.name} data={data} />
        ))}
      </SectionShoe>
    </>
  );
};

export default memo(Shoe);
