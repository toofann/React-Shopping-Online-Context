import React, { useContext } from "react";
import tshirt1 from "../../assets/img/T-shirt/Dress (1).jpg";
import styled from "styled-components";
import { ContextProject } from "../../App";

const SectionImegeOpen = styled.section`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 50px 0px;
  & h2 {
    color: #292929;
  }
  & p {
    color: green;
  }
  & h2,
  p,
  del {
    padding: 10px;
  }
  & button {
    padding: 8px 20px;
    background-color: #0ff777;
    border-radius: 5px;
    border: none;
    color: #eaeaea;
    cursor: pointer;
    &:hover {
      text-shadow: 2px 2px 5px black;
    }
  }
`;
const ImageOpen = styled.img`
  width: 400px;
  height: 400px;
  margin: 0 auto;
`;
// const MoreImage = styled.`
//   width: 400px;
//   height: 400px;
//   margin: 0 auto;
// `;

const Tshirt1 = props => {
  console.log(props);
  const context = useContext(ContextProject);

  return (
    <SectionImegeOpen>
      <ImageOpen src={props.data.img} alt="tshirt1" />
      <h2>{props.data.name} :نام محصول</h2>
      <del>{props.data.oldPrice} :قیمت قبلی</del>
      <p>{props.data.newPrice} :قیمت با تخفیف</p>
      {/* <button onClick={() => context.handleAddToCart(data)}> */}
      <button onClick={() => context.handleAddToCart(props.data)}>
        <h3>اضافه کردن به سبد خرید</h3>
      </button>
    </SectionImegeOpen>
  );
};

export default Tshirt1;
