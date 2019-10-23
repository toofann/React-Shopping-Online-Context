import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionShoeData = styled.main`
  padding: 60px 0px;
  text-align: center;
`;
export const LinkShoeData = styled(Link)``;
export const SectionShoeDataChild = styled.section`
  width: 140px !important;
  height: 210px;
  text-align: center;
  box-shadow: 5px 5px 10px 1px #f5c2dd;
  border-radius: 5px;
  margin: 0 auto;
  transition: transform 0.2s;
  cursor: pointer;
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
      transform: scale(1.1);
      margin-bottom: 13px;
    }
  }
`;
export const TitleShoeData = styled.h2`
  color: #323832;
  padding-bottom: 30px;
  text-shadow: 1px 1px 1px black;
`;

export const SectionSocksData = styled.main`
  padding: 40px 0px;
  text-align: center;
`;
export const LinkSocksData = styled(Link)`
  text-align: center;
`;
export const SectionSocksDataChild = styled.section`
  width: 130px !important;
  height: 220px;
  padding-top: 10px;
  text-align: center;
  box-shadow: 5px 5px 10px 1px #f5c2dd;
  border-radius: 5px;
  margin: 0 auto;
  transition: transform 0.2s;
  cursor: pointer;
  & img {
    width: 115px;
    height: 115px;
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
      transform: scale(1.1);
      margin-bottom: 13px;
    }
  }
`;
export const TitleSocksData = styled.h2`
  color: #323832;
  padding-bottom: 30px;
  text-shadow: 1px 1px 1px black;
`;

export const SectionSunglassData = styled.main`
  padding: 40px 0px;
  text-align: center;
`;
export const LinkSunglassData = styled(Link)``;
export const SectionSunglassDataChild = styled.section`
  width: 100px !important;
  height: 190px;
  padding-top: 10px;
  text-align: center;
  box-shadow: 2px 2px 5px 1px #f5c2dd;
  border-radius: 5px;
  transition: transform 0.2s;
  margin: 0 auto;
  cursor: pointer;
  & img {
    width: 90px;
    height: 90px;
    margin: 0 auto;
  }
  & p,
  del {
    font-size: 11px;
  }
  & p {
    color: green;
  }
  & h5 {
    color: #363636;
  }
  &:hover {
    & img {
      transform: scale(1.1);
      margin-bottom: 13px;
    }
  }
`;
export const TitleSunglassData = styled.h2`
  color: #323832;
  padding-bottom: 30px;
  text-shadow: 1px 1px 1px black;
`;

export const SectionTshirtData = styled.main`
  padding: 40px 0px;
  text-align: center;
`;
export const LinkTshirtData = styled(Link)`
  /* text-align: center; */
`;
export const SectionTshirtDataChild = styled.section`
  width: 250px !important;
  height: 350px;
  padding-top: 10px;
  text-align: center;
  box-shadow: 5px 5px 10px 1px #f5c2dd;
  border-radius: 5px;
  margin: 0 auto;
  transition: transform 0.2s;
  cursor: pointer;
  & img {
    width: 225px;
    height: 225px;
    margin: 0 auto;
  }
  & p,
  del {
    font-size: 15px;
  }
  & p {
    color: green;
  }
  & h2 {
    color: #363636;
  }
  &:hover {
    & img {
      transform: scale(1.1);
      margin-bottom: 13px;
    }
  }
`;
export const TitleTshirtData = styled.h2`
  color: #323832;
  padding-bottom: 30px;
  text-shadow: 1px 1px 1px black;
`;
