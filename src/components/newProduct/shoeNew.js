import React, { useContext } from "react";
import { ContextProject } from "../../App";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const SectionTopData = styled.main`
  padding: 60px 0px;
  text-align: center;
`;
const LinkTopData = styled(Link)`
  /* text-align: center; */
`;
const SectionTopDataChild = styled.section`
  width: 140px !important;
  height: 210px;
  /* padding-top: 10px; */
  text-align: center;
  box-shadow: 5px 5px 10px 1px #f5c2dd;
  border-radius: 5px;
  margin: 0 auto;
  transition: transform 0.2s;
  cursor: pointer;
  & img {
    width: 120px;
    height: 120px;
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
const ShoeNew = () => {
  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    centerPadding: "10%",
    lazyLoad: true,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 6000,
    // autoplaySpeed: 6000,
    pauseOnHover: true,
    arrow: false,
    // cssEase: "ease-in",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          centerPadding: "10%"
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,

      //   }
      // },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
          centerPadding: "25%"
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          dots: false,
          centerPadding: "20%"
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
      <TitleTopData>کفش های جدید</TitleTopData>
      <Slider {...settings}>
        {context.shoeData
          .filter(data => data.new === true)
          .map(data => (
            <SectionTopDataChild key={data.name}>
              {" "}
              <LinkTopData to={`/shoe/${data.name}`}>
                <img src={data.img} alt={data.name} />
                <h4>{data.name}</h4>
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

export default ShoeNew;
