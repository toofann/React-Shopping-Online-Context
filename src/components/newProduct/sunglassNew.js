import React, { Component, useContext, useState, useEffect } from "react";
import { ContextProject } from "../../App";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const SectionTopData = styled.main`
  padding: 40px 0px;
  text-align: center;
`;
const LinkTopData = styled(Link)`
  /* text-align: center; */
`;
const SectionTopDataChild = styled.section`
  width: 100px !important;
  height: 190px;
  padding-top: 10px;
  text-align: center;
  box-shadow: 2px 2px 5px 1px #f5c2dd;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
  & img {
    width: 98px;
    height: 98px;
    margin: 0 auto;
  }
  & p,
  del {
    font-size: 11px;
  }
  & p {
    color: green;
  }
  & h5 {
    color: #363636;
  }
`;
const TitleTopData = styled.h2`
  color: #323832;
  padding-bottom: 30px;
  text-shadow: 1px 1px 1px black;
`;
const SunglassNew = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  const context = useContext(ContextProject);
  const [onDisplay, setonDisplay] = useState(false);
  // let inter = setInterval(() => {
  //   setonDisplay(!onDisplay);
  //   clearInterval(inter);
  //   console.log(inter);
  // }, 300);

  return (
    <SectionTopData>
      <TitleTopData>عینک های جدید</TitleTopData>
      <Slider {...settings}>
        {context.sunglassData
          .filter(data => data.new === true)
          .map(data => (
            <SectionTopDataChild key={data.name}>
              <LinkTopData to={`/sunglass/${data.name}`}>
                <img src={data.img} alt={data.name} />
                <h5>{data.name}</h5>
                <del>{data.oldPrice}</del>
                <p>{data.newPrice}</p>
                <span>{onDisplay ? "" : "مشخصات"}</span>
              </LinkTopData>{" "}
            </SectionTopDataChild>
          ))}
      </Slider>
    </SectionTopData>
  );
};

export default SunglassNew;
