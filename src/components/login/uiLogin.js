import styled from "styled-components/macro";
import { Field, Form } from "formik";

export const FieldInputSignIn = styled(Field)`
  border: none;
  border-bottom: 1px solid #fca0cc;
  margin-bottom: 5px;
  direction: rtl;
  padding-right: 10px;
  &:focus {
    outline: none;
  }
`;
export const LableSignIn = styled.label`
  margin-top: 28px;
  padding-bottom: 5px;
`;
export const ButtonFormSignIn = styled.button`
  border: none;
  display: block;
  padding: 10px;
  background-color: #05e263;
  margin: 35px 5px 0px;
  border-radius: 3px;
  color: black;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
export const ButtonFormSignInGoogle = styled.button`
  border: none;
  display: block;
  padding: 10px;
  background-color: #05e263;
  margin: 35px 5px 0px;
  border-radius: 3px;
  color: black;
  font-size: 18px;
  cursor: not-allowed;
  opacity: 0.5;
`;
export const SubmitFormSignIn = styled.input`
  display: block;
  border: none;
  padding: 10px;
  background-color: #05e263;
  margin: 35px auto 0px;
  border-radius: 3px;
  color: black;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
export const TitleFormSignIn = styled.h2`
  color: #323832;
  padding: 30px 0px 0px 0px;
  text-shadow: 1px 1px 1px black;
  text-align: center;
  margin: 0 auto;
`;
export const FormLoginSignIn = styled(Form)`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 35px;
`;
export const FieldErrorSignIn = styled.div`
  color: red;
  padding-top: 10px;
`;
export const FieldWellcomSignIn = styled.p`
  color: green;
  padding-top: 10px;
`;

export const FieldInputSignUp = styled(Field)`
  border: none;
  border-bottom: 1px solid #fca0cc;
  margin-bottom: 5px;
  direction: rtl;
  padding-right: 10px;
  &:focus {
    outline: none;
  }
`;
export const LableSignUp = styled.label`
  margin-top: 28px;
  padding-bottom: 5px;
`;
export const ButtonFormSignUp = styled.input`
  border: none;
  padding: 10px;
  background-color: #05e263;
  margin-top: 35px;
  border-radius: 3px;
  cursor: pointer;
`;
export const TitleFormSignUp = styled.h2`
  color: #323832;
  padding: 30px 0px 0px 0px;
  text-shadow: 1px 1px 1px black;
  text-align: center;
  margin: 0 auto;
`;
export const OkSignUp = styled.p`
  color: green;
  padding-top: 30px;
`;
export const FormSignUp = styled(Form)`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 35px;
`;
