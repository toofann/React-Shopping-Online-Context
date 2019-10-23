import React, { useState } from "react";
import {
  topDataNew,
  shoeDataNew,
  socksDataNew,
  sunglassDataNew,
  tshirtDataNew
} from "./data/newData";

export const ContextProject = React.createContext();

const GlobalState = props => {
  const [cart, setcart] = useState([]);
  const [addCart, setaddCart] = useState(false);
  const [tekrari, settekrari] = useState(true);
  const [signIn, setsignIn] = useState(false);

  const handleAddToCart = (data, dataName) => {
    const mosavi = cart.filter(cart => cart.name === data.name);
    const namosavi = cart.filter(cart => cart.name !== data.name);
    if (mosavi.length > 0) {
      const updatenumber = {
        ...mosavi[0],
        number: mosavi[0].number + data.number
      };
      setcart([...namosavi, updatenumber]);
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
    setcart(
      cart.map((cart, i) => {
        if (i === index) return { ...cart, number: cart.number + 1 };
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
            number: cart.number - 1
          };
        else return { ...cart };
      })
    );
    cart.map((cart, i) => {
      if (i === index && cart.number < 2) {
        handleDeleteItemCart(index);
      }
    });
  };
  const handleDeleteItemCart = index => {
    setcart([...cart.slice(0, index), ...cart.slice(index + 1)]);
  };
  console.log(props);
  return (
    <ContextProject.Provider
      value={{
        shoeData: shoeDataNew,
        socksData: socksDataNew,
        sunglassData: sunglassDataNew,
        tshirtData: tshirtDataNew,
        topData: topDataNew,
        cart: cart,
        handleAddToCart: handleAddToCart,
        handleDeleteItemCart: handleDeleteItemCart,
        handleIncrimentCartItem: handleIncrimentCartItem,
        handleDecrimentCartItem: handleDecrimentCartItem,
        addCart: addCart,
        tekrari: tekrari,
        setsignIn: setsignIn,
        signIn: signIn
      }}>
      {props.children}
    </ContextProject.Provider>
  );
};

export default GlobalState;
