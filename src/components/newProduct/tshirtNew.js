import React, { useContext } from "react";
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
  width: 250px !important;
  height: 350px;
  padding-top: 10px;
  text-align: center;
  box-shadow: 5px 5px 10px 1px #f5c2dd;
  border-radius: 5px;
  margin: 0 auto;
  transition: transform 0.2s;
  cursor: pointer;
  & img {
    width: 225px;
    height: 225px;
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
  &:hover {
    & img {
      transform: scale(1.1);
      margin-bottom: 13px;
    }
  }
`;
const TitleTopData = styled.h2`
  color: #323832;
  padding-bottom: 30px;
  text-shadow: 1px 1px 1px black;
`;
const TshirtNew = () => {
  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrow: false,
    // cssEase: "ease-in",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  const context = useContext(ContextProject);
  // let inter = setInterval(() => {
  //   setonDisplay(!onDisplay);
  //   clearInterval(inter);
  //   console.log(inter);
  // }, 300);

  return (
    <SectionTopData>
      <TitleTopData>تیشرت های جدید</TitleTopData>
      <Slider {...settings}>
        {context.tshirtData
          .filter(data => data.new === true)
          .map(data => (
            <SectionTopDataChild key={data.name}>
              <LinkTopData to={`/tshirt/${data.name}`}>
                <img src={data.img} alt={data.name} />
                <h2>{data.name}</h2>
                <del>{data.oldPrice}</del>
                <p>{data.newPrice}</p>
                <span>مشخصات</span>
              </LinkTopData>{" "}
            </SectionTopDataChild>
          ))}
      </Slider>
    </SectionTopData>
  );
};

export default TshirtNew;
