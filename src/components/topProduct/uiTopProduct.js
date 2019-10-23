import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionTopData = styled.main`
  padding: 50px 0px;
  text-align: center;
`;
export const LinkTopData = styled(Link)``;
export const SectionTopDataChild = styled.section`
  width: 200px !important;
  height: 210px;
  text-align: center;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 5px 5px 10px 1px #f5c2dd;
  & img {
    width: 120px;
    height: 120px;
    margin: 0 auto;
  }
  & p,
  del {
    font-size: 13px;
  }
  & p {
    color: green;
  }
  & h4 {
    color: #363636;
  }
  &:hover {
    & img {
      transform: scale(1.3);
      margin-bottom: 20px;
    }
  }
`;
export const TitleTopData = styled.h2`
  color: #323832;
  padding-bottom: 30px;
  text-shadow: 1px 1px 1px black;
`;
