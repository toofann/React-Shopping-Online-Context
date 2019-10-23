import React, { useContext, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ContextProject } from "../context";
import { css } from "styled-components/macro";
import Contact from "../contact/contact";

const Home = lazy(() => import("../home"));
const Cart = lazy(() => import("../cart/cart"));
const ProductView = lazy(() => import("../productes/productView"));
const Payment = lazy(() => import("../payment/payment"));
const Shoe = lazy(() => import("../productes/shoe"));
const Sunglass = lazy(() => import("../productes/sunglass"));
const Socks = lazy(() => import("../productes/socks"));
const Tshirt = lazy(() => import("../productes/tshirt"));
const Login = lazy(() => import("../login/login"));
const SignUp = lazy(() => import("../login/signUp"));
const Dashboard = lazy(() => import("../dashboard/dashboard"));
const NotFound = lazy(() => import("../notFound/notFound"));

const RouteComponent = () => {
  const context = useContext(ContextProject);

  return (
    <>
      <Suspense
        fallback={
          <h4
            css={css`
              padding-top: 50px;
              text-align: center;
            `}>
            در حال بارگذاری
          </h4>
        }>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/cart" render={props => <Cart {...props} />} />
          <Route path="/login/signup" component={SignUp} />
          <Route exact={true} path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/payment" component={Payment} />
          <Route path="/contact" component={Contact} />
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
      </Suspense>
    </>
  );
};

export default RouteComponent;
