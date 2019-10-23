import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainCArtItem = styled.main`
  padding-top: 50px;
  text-align: center;
`;
export const TitleCartItem = styled.h2`
  color: #323832;
  padding-bottom: 30px;
  text-shadow: 1px 1px 1px black;
`;
export const SectionCartItem = styled.section`
display: flex;
flex-flow:column;
justify-content: space-around;
align-items: center;
width: 50%;
margin: 20px auto;
box-shadow: 3px 3px 6px 1px #f5c2dd;
border-radius: 10px;
& img {
  width: 70px;
  height: 70px;
}
& button {
  width: 50px;
  height: 20px;
  background-color: red;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 8px auto;
}
& p {
  color: green;
}
& span:first-child {
  border: 1px solid green;
}
}
& section {
  display: flex;
  flex-direction: column;
  align-self: center;
}
& section > div p{
  display:inline-block;
  margin:5px;
  cursor: pointer;
}
&section >div >p:last-child{
  font-size:50px;
}
& div,
button {
  padding: 0px 5px;
}
@media (min-width:576px) {
  & {
  display: flex;
  flex-flow:row;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 70px;
  margin: 20px auto;
  }

}
@media (min-width:768px) {
  & {
    width: 60%;
  }

}
`;
export const PayCartSection = styled.section`
  margin-top: 70px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & div > p {
    padding: 7px;
    color: #005555;
    direction: rtl !important;
  }
  & h2 {
    color: #003535;
    padding-bottom: 15px;
    text-shadow: 3px 3px 6px 1px #cbfeda;
  }
`;
export const PayCartLink = styled(Link)`
width: 60%;
margin: 10px auto;
padding: 8px 20px;
background-color: #0ff777;
border-radius: 5px;
border: none;
color: #eaeaea;
cursor: pointer;
  &:hover {
    text-shadow: 2px 2px 5px black;
    background-color:#0acd62;
  }
}
@media(min-width:768px){
  & {
    width:35%;
  }
}
`;
