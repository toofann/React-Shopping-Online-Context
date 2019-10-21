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
`;
const MenuIcon = styled.img`
  width: 50px;
  height: 50px;
  color: black;
  padding-top: 5px;
  display: inline-block;
  cursor: pointer;
`;
const MenuItem = styled.li.attrs(props => {
  return {
    onClick: () => props.handleCloseMenu()
  };
})`
  padding: 20px 10px 0px 0px;
`;

const DropdownMenu = styled.span`
  cursor: pointer;
  color: #393d38;
  &::after {
    content: "\fe3f";
    color: black;
    padding: 8px;
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
`;
const Dropdown = styled.div`
  overflow: hidden;
  height: ${props => (props.open ? "160px" : "0px")};
  transition: height 0.7s ease-out 0s;
  position: relative;
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
`;
const CloseMenu = styled.span`
  width: 40px;
  height: 40px;
  float: left;
  padding-left: 10px;
  cursor: pointer;
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
          <Link to={"/darbare"}>درباره ما</Link>
        </MenuItem>
        <MenuItem handleCloseMenu={handleCloseMenu}>
          <Link to={"/contact"}>تماس با ما</Link>
        </MenuItem>
      </UlComponent>
    </>
  );
};

export default withRouter(Menu);
