import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Home from "../home";
import Cart from "../cart/cart";
import Login from "../header/login";
import { ContextProject } from "../../App";
// import Tshirt from "../t-shirt/tshirt";
import Tshirt from "../topProduct/tshirt1";
import Payment from "../payment/payment";

const RouteComponent = () => {
  const context = useContext(ContextProject);
  // console.log(
  //   context.topData[0].name.charAt(0).toUpperCase() +
  //     context.topData[0].name.slice(1)
  // );

  return (
    <>
      <Route exact={true} path="/" component={Home} />
      <Route path="/cart" render={props => <Cart {...props} />} />
      <Route path="/login" component={Login} />
      <Route path="/payment" component={Payment} />
      {/* <Route path="/new" component={Tshirt} /> */}
      {context.topData.map((data, index) => (
        // import(`../topProduct/${data.name}`).then(Comp => (
        //   <Route
        //     key={index}
        //     path={`/${data.name}`}
        //     render={props => <Comp.default.name {...props} data={data} />}
        //   />
        // ))
        <Route
          key={index}
          path={`/${data.name}`}
          render={props => <data.component {...props} data={data} />}
        />
      ))}
    </>
  );
};

export default RouteComponent;
