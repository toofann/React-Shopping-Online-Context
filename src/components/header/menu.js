import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as menuSvg } from "../../assets/img/icon/iconMenu.svg";
import { ReactComponent as closeSvg } from "../../assets/img/icon/iconclose.svg";
import {
  MenuIcon,
  UlComponent,
  MenuItem,
  CloseMenu,
  DropdownMenu,
  DropdownMenuOpen,
  Dropdown,
  DropdownItem
} from "./uiHeader";

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
              openDropDown={openDropDown}>
              محصولات
            </DropdownMenu>
          ) : (
            <DropdownMenuOpen
              onClick={handleDropdownOpenItem}
              openDropDown={openDropDown}>
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
