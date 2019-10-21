import React from "react";
import HeaderTop from "./header/headerTop";
import HeaderBottom from "./header/headerBottom";
import TopProduct from "./topProduct/topProduct";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import SunglassNew from "./newProduct/sunglassNew";
import ShoeNew from "./newProduct/shoeNew";
import TshirtNew from "./newProduct/tshirtNew";
import SocksNew from "./newProduct/socksNew";

const Home = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true
  // };

  return (
    <>
      {/* <Slider {...settings}> */}
      <TopProduct />

      {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div> */}
      {/* </Slider> */}
      <SunglassNew />
      <ShoeNew />
      <TshirtNew />
      <SocksNew />
    </>
  );
};

export default Home;
