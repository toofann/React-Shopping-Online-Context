import React, { useState, memo } from "react";
import { InputSearch } from "./uiHeader";

const Search = () => {
  const [inputValue, setInputValue] = useState("جست و جو کنید");
  const handelCangeInput = event => {
    setInputValue(event.target.value);
  };
  const handleClickInput = () => {
    setInputValue("");
  };
  const handleBlur = () => {
    if (inputValue === "") {
      setInputValue("جست و جو کنید");
    }
  };

  return (
    <InputSearch
      disabled
      value={inputValue}
      onChange={handelCangeInput}
      onClick={handleClickInput}
      onBlur={handleBlur}
    />
  );
};

export default Search;
