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
  text-align: center;
`;
const SectionTopDataChild = styled.section`
  width: 130px !important;
  height: 220px;
  padding-top: 10px;
  text-align: center;
  box-shadow: 5px 5px 10px 1px #f5c2dd;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
  & img {
    width: 128px;
    height: 128px;
    margin: 0 auto;
  }
  & p,
  del {
    font-size: 13px;
  }
  & p {
    color: green;
  }
  & h4 {
    color: #363636;
  }
`;
const TitleTopData = styled.h2`
  color: #323832;
  padding-bottom: 30px;
  text-shadow: 1px 1px 1px black;
`;
const SocksNew = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
      <TitleTopData>جوراب های جدید</TitleTopData>
      <Slider {...settings}>
        {context.socksData
          .filter(data => data.new === true)
          .map(data => (
            <SectionTopDataChild key={data.name}>
              <LinkTopData to={`/socks/${data.name}`}>
                <img src={data.img} alt={data.name} />
                <h4>{data.name}</h4>
                <del>{data.oldPrice}</del>
                <p>{data.newPrice}</p>
                <span>{onDisplay ? "" : "مشخصات"}</span>
              </LinkTopData>
            </SectionTopDataChild>
          ))}
      </Slider>
    </SectionTopData>
  );
};

export default SocksNew;
