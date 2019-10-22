import React, { useContext } from "react";
import { ContextProject } from "../../App";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const SectionTopData = styled.main`
  padding: 50px 0px;
  text-align: center;
`;
const LinkTopData = styled(Link)`
  /* text-align: center; */
`;
const SectionTopDataChild = styled.section`
  width: 200px !important;
  height: 210px;
  /* padding-top: 10px; */
  text-align: center;
  /* border: 1px solid #ff5eae; */
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 5px 5px 10px 1px #f5c2dd;
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
      transform: scale(1.3);
      margin-bottom: 20px;
    }
  }
`;
const TitleTopData = styled.h2`
  color: #323832;
  padding-bottom: 30px;
  text-shadow: 1px 1px 1px black;
`;
const TopProduct = () => {
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
      <TitleTopData>محصولات پر فروش</TitleTopData>
      <Slider {...settings}>
        {context.topData.map(data => (
          <SectionTopDataChild
            to={data.name}
            key={data.name}
            // onClick={() => context.handleAddToCart(data, data.name)}
          >
            <LinkTopData to={`/topProduct/${data.name}`}>
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

export default TopProduct;
