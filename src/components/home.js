import React, { memo } from "react";
import TopProduct from "./topProduct/topProduct";
import SunglassNew from "./newProduct/sunglassNew";
import ShoeNew from "./newProduct/shoeNew";
import TshirtNew from "./newProduct/tshirtNew";
import SocksNew from "./newProduct/socksNew";

const Home = () => {
  return (
    <>
      <TopProduct />
      <SunglassNew />
      <TshirtNew />
      <ShoeNew />
      <SocksNew />
    </>
  );
};

export default memo(Home);
