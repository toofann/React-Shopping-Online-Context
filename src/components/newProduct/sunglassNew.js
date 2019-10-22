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
  width: 100px !important;
  height: 190px;
  padding-top: 10px;
  text-align: center;
  box-shadow: 2px 2px 5px 1px #f5c2dd;
  border-radius: 5px;
  transition: transform 0.2s;
  margin: 0 auto;
  cursor: pointer;
  & img {
    width: 90px;
    height: 90px;
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
  /* transition-timing-function:ease-in */
`;
const SunglassNew = () => {
  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrow: false,
    // cssEase: "ease-in",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
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
                <span>مشخصات</span>
              </LinkTopData>{" "}
            </SectionTopDataChild>
          ))}
      </Slider>
    </SectionTopData>
  );
};

export default SunglassNew;
