import React, { useState } from "react";
import RouteComponent from "./components/route/route";
import { shoeData } from "./components/data/shoeData";
import { socksData } from "./components/data/socksData";
import { sunglassData } from "./components/data/sunglassData";
import { tshirtData } from "./components/data/tshirtData";
import { topData } from "./components/data/topProduct";
import HeaderTop from "./components/header/headerTop";
import HeaderBottom from "./components/header/headerBottom";
import styled from "styled-components";

export let ContextProject = React.createContext();
// var pagex = 0;
// var pagey = 0;
function App() {
  // const [cartFil, setcartFil] = useState([]);

  const [cart, setcart] = useState([]);
  const [addCart, setaddCart] = useState(false);
  const [tekrari, settekrari] = useState(true);
  // const [page, setpage] = useState({ pagey: 0, pagex: 0 });
  // const [page, setpage] = useState([]);
  const handleAddToCart = (data, dataName) => {
    // setcart([...cart, data]);
    const mosavi = cart.filter(cart => cart.name === data.name);
    const namosavi = cart.filter(cart => cart.name !== data.name);

    if (mosavi.length > 0) {
      const updateid = {
        ...mosavi[0],
        id: mosavi[0].id + data.id
      };

      setcart([...namosavi, updateid]);
      settekrari(false);
    } else {
      setcart([...cart, data]);
      settekrari(true);
    }
    if (!addCart) {
      setaddCart(true);
      setTimeout(() => {
        setaddCart(false);
      }, 2000);
    }
  };
  const handleIncrimentCartItem = index => {
    // console.log(index);
    // const updateIcriment = {
    //   ...cart[0],
    //   c: cart[0].id + cartData.id
    // };
    setcart(
      cart.map((cart, i) => {
        if (i === index) return { ...cart, id: cart.id + 1 };
        else return { ...cart };
      })
    );
  };
  const handleDecrimentCartItem = index => {
    setcart(
      cart.map((cart, i) => {
        if (i === index)
          return {
            ...cart,
            id: cart.id - 1
          };
        else return { ...cart };
      })
    );
    cart.map((cart, i) => {
      if (i === index && cart.id < 2) {
        handleDeleteItemCart(index);
      }
    });
  };
  // console.log(dataName);
  // setcartFil([...cartFil, data]);
  // console.log(cartFil);
  // console.log(cart);
  // setcart([
  //   ...cartFil.map(
  //     cartFil =>
  //       cartFil.name !== dataName
  //         ? cartFil
  //         : // ...cart.filter(cart => cart.name !== dataName),

  //           // cart.map(cart => {
  //           //   return {
  //           //     ...cart,
  //           //     data
  //           //   };
  //           // })

  //     // Object.keys(cartFil).filter(cart => cart.name !== dataName)
  //     // cartFil.map(cartFil => {
  //     //   return {
  //     //     cartFil,
  //     //     nnnnnnnn: cartFil.id + 1
  //     //   };
  //     // })

  //     // cartFil.map(cart => {
  //     //   return {
  //     //     ...cart,
  //     //     nn: cart.id + 1
  //     //   };
  //     // })
  //     //   ),
  //     // data.map(cart => cart, cart.id + 1)
  //     // cart.map(cart => cart.id + 1)
  //   )
  // ]);
  // console.log(cart);
  // setcart([...cart, data]);
  // cart.map(cart =>
  //   cart.name !== dataName
  //     ? setcartFil([...cartFil, cart])
  //     : setcartFil(
  //         cartFil.filter(cart => cart.name !== dataName, cart.id + 1)
  //       )
  // );
  // console.log(setcartFil);
  // setcart(
  //   cart.filter(cart => {
  //     if (cart.name !== dataName) return [...cart, data];
  //     else console.log("hast");
  //   })
  // );
  // setcart(prev => {
  //   return prev.filter(cart => {
  //     if (prev.name !== dataName) return [...prev, data];
  //     console.log("kj,bm");
  //     // return [...cart.filter(cart => cart.name !== dataName), data];
  //   });
  //   // [
  // });
  // console.log(cart);
  // console.log(dataName);
  // };
  // console.log(cart);

  const handleDeleteItemCart = index => {
    setcart([...cart.slice(0, index), ...cart.slice(index + 1)]);
  };

  const [topDataNew, setDataNew] = useState(topData);
  const click = () => {
    setDataNew(
      topDataNew.map(data => {
        return {
          ...data,
          component: data.name.charAt(0).toUpperCase() + data.name.slice(1)
        };
      })
    );
  };
  // console.log(topDataNew);
  // let handleMosePosition = e => {
  // setpage({ pagex: e.pageX, pagey: e.pageY });
  // delete setpage([page]);
  // }
  //  let arr = [...page];
  // let index = arr.indexOf(e.target.value);
  // if (index !== -1) {
  //   arr.splice(0, 1, index);
  // setpage(page.splice(0, 1));
  // setpage([...e.pageX.filter(item => item !== e.target.value)]);
  // let pagex = e.pageX;
  // let pagey = e.pageY;
  // console.log("x" + page);
  // console.log("y" + page.pagey);
  // console.log(e.pageX, e.pageY);
  // };

  // let handleMosePosition = e => {
  //   window.pagex = e.pageX;
  //   window.pagey = e.pageY;
  // };
  // console.log(pagex);
  // console.log(pagey);
  // window.addEventListener("click", handleMosePosition, false);
  // window.addEventListener("mouseenter", handleMosePosition, false);
  // window.addEventListener("mouseleave", handleMosePosition, false);

  return (
    <ContextProject.Provider
      value={{
        shoeData: shoeData,
        socksData: socksData,
        sunglassData: sunglassData,
        tshirtData: tshirtData,
        topData: topData,
        cart: cart,
        handleAddToCart: handleAddToCart,
        handleDeleteItemCart: handleDeleteItemCart,
        handleIncrimentCartItem: handleIncrimentCartItem,
        handleDecrimentCartItem: handleDecrimentCartItem,
        addCart: addCart,
        tekrari: tekrari
      }}
    >
      {/* <button onClick={click}>clikh</button> */}

      <HeaderTop />
      <HeaderBottom />

      <RouteComponent />
    </ContextProject.Provider>
  );
}

export default App;
