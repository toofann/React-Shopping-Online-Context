import React, { useEffect, useContext } from "react";
import Search from "./search";
import styled from "styled-components";
import { ReactComponent as LoginSvg } from "../../assets/img/icon/iconuser.svg";
import { Link } from "react-router-dom";
import { LoginIcon, TextLogin } from "../uiComponents/ulComponent";
import { ContextProject } from "../../App";
import { HeaderComponent } from "./uiHeader";

const HeaderBottom = () => {
  const context = useContext(ContextProject);
  let signInLogin = !!localStorage.getItem("username");

  useEffect(() => {
    if (signInLogin) {
      context.setsignIn(true);
    }
  });

  return (
    <HeaderComponent>
      {context.signIn ? (
        <Link to="/dashboard">
          <LoginIcon as={LoginSvg}></LoginIcon>
          <TextLogin>{localStorage.getItem("username")}</TextLogin>
        </Link>
      ) : (
        <Link to={"/login"}>
          <LoginIcon as={LoginSvg}></LoginIcon>
          <TextLogin>ورود</TextLogin>
        </Link>
      )}
      <Search />
    </HeaderComponent>
  );
};

export default HeaderBottom;
