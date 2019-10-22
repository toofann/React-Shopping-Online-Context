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
  transition: transform 0.2s;
  cursor: pointer;
  & img {
    width: 115px;
    height: 115px;
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
const SocksNew = () => {
  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
                <span>مشخصات</span>
              </LinkTopData>
            </SectionTopDataChild>
          ))}
      </Slider>
    </SectionTopData>
  );
};

export default SocksNew;
