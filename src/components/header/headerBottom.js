import React from "react";
import Login from "./login";
import Search from "./search";
import styled from "styled-components";
import { ReactComponent as LoginSvg } from "../../assets/img/icon/iconuser.svg";

import { Link } from "react-router-dom";
import { LoginIcon, TextLogin } from "../uiComponents/ulComponent";

const HeaderComponent = styled.header`
  background-color: #feedf3;
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
`;
const HeaderBottom = () => {
  return (
    <HeaderComponent>
      <Link to={"/Login"}>
        <LoginIcon as={LoginSvg}></LoginIcon>
        <TextLogin>ورود</TextLogin>
      </Link>
      <Search />
    </HeaderComponent>
  );
};

export default HeaderBottom;
