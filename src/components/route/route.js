import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home";
import Cart from "../cart/cart";
import { ContextProject } from "../../App";
import ProductView from "../productes/productView";
import Payment from "../payment/payment";
import Shoe from "../productes/shoe";
import Sunglass from "../productes/sunglass";
import Socks from "../productes/socks";
import Tshirt from "../productes/tshirt";
import Login from "../login/login";
import SignUp from "../login/signUp";
import Dashboard from "../dashboard/dashboard";
import NotFound from "../notFound/notFound";

const RouteComponent = () => {
  const context = useContext(ContextProject);
  // console.log(
  //   context.topData[0].name.charAt(0).toUpperCase() +
  //     context.topData[0].name.slice(1)
  // );

  return (
    <>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/cart" render={props => <Cart {...props} />} />
        <Route path="/login/signup" component={SignUp} />
        <Route exact={true} path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/payment" component={Payment} />

        {/* <Route exact={true} path="/tshirt" component={Tshirt} /> */}
        {context.topData.map((data, index) => (
          <Route
            key={index}
            path={`/topProduct/${data.name}`}
            render={props => <ProductView {...props} data={data} />}
          />
        ))}
        {context.sunglassData.map((data, index) => (
          <Route
            key={index}
            path={`/sunglass/${data.name}`}
            render={props => <ProductView {...props} data={data} />}
          />
        ))}
        {context.shoeData.map((data, index) => (
          <Route
            key={index}
            path={`/shoe/${data.name}`}
            render={props => <ProductView {...props} data={data} />}
          />
        ))}
        {context.tshirtData.map((data, index) => (
          <Route
            key={index}
            path={`/tshirt/${data.name}`}
            render={props => <ProductView {...props} data={data} />}
          />
        ))}
        {context.socksData.map((data, index) => (
          <Route
            key={index}
            path={`/socks/${data.name}`}
            render={props => <ProductView {...props} data={data} />}
          />
        ))}
        <Route exact={true} path="/shoe" component={Shoe} />
        <Route exact={true} path="/sunglass" component={Sunglass} />
        <Route exact={true} path="/socks" component={Socks} />
        <Route exact={true} path="/tshirt" component={Tshirt} />
        <Route path="/" component={NotFound} />
      </Switch>
    </>
  );
};

export default RouteComponent;
