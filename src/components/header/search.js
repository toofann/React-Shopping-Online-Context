import React, { useState } from "react";
import styled from "styled-components";
import { InputSearch } from "../uiComponents/ulComponent";

// const InputSearch = styled.input`
//   width: 50%;
//   border: 1px solid #ff9bcd;
//   border-radius: 5px;
//   direction: rtl;
//   padding-right: 15px;
// `;
const Search = () => {
  const [inputValue, setInputValue] = useState("جست و جو کنید");
  const handelCangeInput = event => {
    setInputValue(event.target.value);
  };
  const handleClickInput = () => {
    setInputValue("");
  };

  return (
    <InputSearch
      value={inputValue}
      onChange={handelCangeInput}
      onClick={handleClickInput}
      //   placeholder="جست و جو کنید"
    />
  );
};

export default Search;
