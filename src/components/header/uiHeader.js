import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const UlComponent = styled.ul`
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
    padding: 0px;
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
export const MenuIcon = styled.img`
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
export const MenuItem = styled.li.attrs(props => {
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
`;

export const DropdownMenu = styled.span`
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
    }
    &:hover {
      color: #a6a6a6;
    }
  }
`;
export const DropdownMenuOpen = styled.span`
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
      vertical-align: 0px;
    }
    &:hover {
      color: #a6a6a6;
    }
  }
`;
export const Dropdown = styled.div`
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
  }
`;

export const DropdownItem = styled(Link)`
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
export const CloseMenu = styled.span`
  width: 40px;
  height: 40px;
  float: left;
  padding-left: 10px;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
`;
export const AlertAddToCart = styled.div`
  position: absolute;
  top: 75px;
  right: 0px;
  padding: 20px;
  z-index: 333333333333;
  box-shadow: 5px 5px 10px 1px #f5c2dd;
  display: ${props => (props.addCart ? "visibled" : "none")};
  border-radius: 3px;
  color: green;
  background-color: rgba(255, 255, 255, 0.9);
`;
export const HeaderComponent = styled.header`
  background-color: #feedf3;
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
`;
