import React, { useContext } from "react";
import { ContextProject } from "../../App";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionSunglass = styled.main`
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* text-align: center; */
`;
const LinkSunglassItem = styled(Link)`
  /* text-align: center; */
`;
const SectionSunglassChild = styled.section`
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
const TitleSunglass = styled.h2`
  color: #323832;
  padding: 30px 0px 20px 0px;
  text-shadow: 1px 1px 1px black;
  text-align: center;
  margin: 0 auto;
`;
const Sunglass = () => {
  const context = useContext(ContextProject);
  return (
    <>
      <TitleSunglass>عینک ها</TitleSunglass>

      <SectionSunglass>
        {context.sunglassData.map(data => (
          <SectionSunglassChild key={data.name}>
            <LinkSunglassItem to={`/sunglass/${data.name}`}>
              <img src={data.img} alt={data.name} />
              <h2>{data.name}</h2>
              <del>{data.oldPrice}</del>
              <p>{data.newPrice}</p>
              <span>مشخصات</span>
            </LinkSunglassItem>{" "}
          </SectionSunglassChild>
        ))}
      </SectionSunglass>
    </>
  );
};

export default Sunglass;
