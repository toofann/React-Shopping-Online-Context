import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components/macro";
import { ReactComponent as menuSvg } from "../../assets/img/icon/iconMenu.svg";
import { ReactComponent as closeSvg } from "../../assets/img/icon/iconclose.svg";

const UlComponent = styled.ul`
  width: ${props => (props.openMenu ? "45%" : "0px")};
  background-color: rgba(250, 250, 250, 0.95);
  overflow: hidden;
  transition: width 0.5s ease-out 0s;
  list-style: none;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 0px;
  padding-bottom: 20px;
  font-size: 17px;
  direction: rtl;
  white-space: nowrap;
  color: white;
  margin: 0px;
  & li {
    padding: 20px 10px 0px 0px;
    margin-right: 15px;
    position: relative;
    width: 50%;
    & :hover::before {
      content: "";
      width: 3px;
      position: absolute;
      right: 0px;
      top: 8px;
      bottom: -8px;
      background-color: #fdacd0;
    }
  }
  & li:hover {
    text-decoration-color: red;
  }
  & li * {
    color: #393d38;
  }
  &:last-child {
    padding-bottom: 30px;
  }
  @media (min-width: 992px) {
    position: relative;
    width: 600px;
    display: flex;
    background-color: transparent;
    transition: none;
    align-items: center;
    /* justify-content: right; */
    padding: 0px;
    /* vertical-align: -20px; */
    & li::before {
      display: none;
    }
    & li {
      padding: 0px;
      margin: 0px 10px;
      width: auto;
    }
  }
`;
const MenuIcon = styled.img`
  width: 50px;
  height: 50px;
  color: black;
  padding-top: 5px;
  display: inline-block;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
`;
const MenuItem = styled.li.attrs(props => {
  return {
    onClick: () => props.handleCloseMenu()
  };
})`
  padding: 20px 10px 0px 0px;
  @media (min-width: 992px) {
    & a:hover {
      color: #a6a6a6;
    }
  }
  /* position: relative; */
`;

const DropdownMenu = styled.span`
  cursor: pointer;
  color: #393d38;
  &::after {
    content: "\fe3f";
    color: black;
    padding: 8px;
  }
  @media (min-width: 992px) {
    &::after {
      padding: 0px;
      /* position: relative; */
    }
    &:hover {
      color: #a6a6a6;
    }
  }
`;
const DropdownMenuOpen = styled.span`
  cursor: pointer;
  color: #393d38;
  &::after {
    content: "\fe40";
    color: black;
    padding: 8px;
    vertical-align: -5px;
  }
  @media (min-width: 992px) {
    &::after {
      padding: 0px;
      /* margin-top: 5px; */
      vertical-align: 0px;

      /* position: relative; */
    }
    &:hover {
      color: #a6a6a6;
    }
  }
`;
const Dropdown = styled.div`
  overflow: hidden;
  height: ${props => (props.open ? "160px" : "0px")};
  transition: height 0.7s ease-out 0s;
  position: relative;
  @media (min-width: 992px) {
    position: absolute;
    top: 0px;
    margin-top: 20px;
    margin-right: -25px;
    height: ${props => (props.open ? "30px" : "0px")};
    /* height: 200px; */
    /* background-color: black; */
    /* display: inline-block; */
    z-index: 999999999999999999999999 !important;
  }
`;

const DropdownItem = styled(Link)`
  font-size: 14px;
  padding-top: 20px;
  display: block;
  position: relative;
  padding-right: 8px;

  & :hover::before {
    content: "";
    width: 3px;
    position: absolute;
    right: 0px;
    top: 8px;
    bottom: -8px;
    background-color: #fdacd0;
  }
  @media (min-width: 992px) {
    display: inline-block;
    /* position: absolute; */
    /* top: 0px; */
    padding: 0px;
    padding-left: 10px;

    & :hover::before {
      display: none;
    }
    &:hover {
      color: #a6a6a6;
    }
  }
`;
const CloseMenu = styled.span`
  width: 40px;
  height: 40px;
  float: left;
  padding-left: 10px;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
`;

const Menu = props => {
  const [openMenu, setopenMenu] = useState(false);
  const [openDropDown, setopenDropDown] = useState(false);

  const handleOpenMenu = () => {
    setopenMenu(prev => {
      return !prev;
    });
  };
  const handleCloseMenu = () => {
    setopenMenu(prev => {
      return !prev;
    });
    setopenDropDown(false);
  };
  const handleDropdownOpenItem = () => {
    setopenDropDown(!openDropDown);
  };

  return (
    <>
      <MenuIcon as={menuSvg} onClick={handleOpenMenu} />
      <UlComponent openMenu={openMenu}>
        <CloseMenu as={closeSvg} onClick={handleCloseMenu}></CloseMenu>
        <MenuItem handleCloseMenu={handleCloseMenu}>
          <Link to={"/"}>خانه</Link>
        </MenuItem>
        <li>
          {openDropDown ? (
            <DropdownMenu
              onClick={handleDropdownOpenItem}
              openDropDown={openDropDown}
            >
              محصولات
            </DropdownMenu>
          ) : (
            <DropdownMenuOpen
              onClick={handleDropdownOpenItem}
              openDropDown={openDropDown}
            >
              محصولات
            </DropdownMenuOpen>
          )}
          <Dropdown open={openDropDown}>
            <DropdownItem to={"/shoe"} onClick={handleCloseMenu}>
              کفش
            </DropdownItem>
            <DropdownItem to={"/socks"} onClick={handleCloseMenu}>
              جوراب
            </DropdownItem>
            <DropdownItem to={"/tshirt"} onClick={handleCloseMenu}>
              تیشرت
            </DropdownItem>
            <DropdownItem to={"/sunglass"} onClick={handleCloseMenu}>
              عینک
            </DropdownItem>
          </Dropdown>
        </li>
        <MenuItem handleCloseMenu={handleCloseMenu}>
          <Link to={"/cart"}>سبد خرید</Link>
        </MenuItem>
        <MenuItem handleCloseMenu={handleCloseMenu}>
          <Link to={"/login"}>ورود / عضویت</Link>
        </MenuItem>
        <MenuItem handleCloseMenu={handleCloseMenu}>
          <Link to={"/dashboard"}>داشبورد</Link>
        </MenuItem>
        <MenuItem handleCloseMenu={handleCloseMenu}>
          <Link to={"/contact"}>تماس با ما</Link>
        </MenuItem>
      </UlComponent>
    </>
  );
};

export default withRouter(Menu);
