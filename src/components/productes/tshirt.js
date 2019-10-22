import React, { useContext, useState } from "react";
import { ContextProject } from "../../App";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

const SectionTshirt = styled.main`
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* text-align: center; */
`;
const LinkTshirtItem = styled(Link)`
  /* text-align: center; */
`;
const SectionTshirtChild = styled.section`
  width: 200px !important;
  height: 300px;
  padding-top: 10px;
  text-align: center;
  box-shadow: 5px 5px 10px 1px #f5c2dd;
  border-radius: 5px;
  margin: 50px 50px;
  cursor: pointer;
  & img {
    width: 198px;
    height: 198px;
    margin: 0 auto;
  }
  & p,
  del {
    font-size: 15px;
  }
  & p {
    color: green;
  }
  & h2 {
    color: #363636;
  }
`;
const TitleTshirt = styled.h2`
  color: #323832;
  padding: 30px 0px 20px 0px;
  text-shadow: 1px 1px 1px black;
  text-align: center;
  margin: 0 auto;
`;
const FilterSection = styled.div`
  /* margin-top: 50px; */
  text-shadow: 1px 1px 1px black;
  text-align: center;
  margin: 50px auto 0px;
  & p {
    margin-bottom: 20px;
  }
  & button {
    margin: 5px;
    padding: 5px 10px;
    border: none;
    background-color: #fb5e99;
    border-radius: 4px;
  }
  & button:hover {
    background-color: #fcbad1;
    cursor: pointer;
  }
`;

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
      <FilterSection>
        <p>بر اساس سایز انتخاب کنید</p>
        <button onClick={() => handleSetFilter("all")}>All</button>
        <button onClick={() => handleSetFilter("medium")}>Medium</button>
        <button onClick={() => handleSetFilter("larg")}>Large</button>
        <button onClick={() => handleSetFilter("xlarg")}>X large</button>
        <button onClick={() => handleSetFilter("xxlarg")}>XX large</button>
      </FilterSection>
      <SectionTshirt>
        {handleFilter().map(data => (
          <SectionTshirtChild key={data.name}>
            <LinkTshirtItem to={`/tshirt/${data.name}`}>
              <img src={data.img} alt={data.name} />
              <h2>{data.name}</h2>
              <del>{data.oldPrice}</del>
              <p>{data.newPrice}</p>
              <span>مشخصات</span>
            </LinkTshirtItem>{" "}
          </SectionTshirtChild>
        ))}
      </SectionTshirt>
    </>
  );
};

export default Tshirt;
