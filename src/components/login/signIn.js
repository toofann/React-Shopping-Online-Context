import React, { useState, useContext } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import styled, { css } from "styled-components/macro";
import { Redirect, Link } from "react-router-dom";
import { ContextProject } from "../../App";
const FieldInput = styled(Field)`
  border: none;
  border-bottom: 1px solid #fca0cc;
  margin-bottom: 5px;
  direction: rtl;
  padding-right: 10px;
  &:focus {
    outline: none;
  }
`;
const Lable = styled.label`
  margin-top: 28px;
  padding-bottom: 5px;
`;
const ButtonForm = styled.button`
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
const SubmitForm = styled.input`
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
const TitleForm = styled.h2`
  color: #323832;
  padding: 30px 0px 0px 0px;
  text-shadow: 1px 1px 1px black;
  text-align: center;
  margin: 0 auto;
`;
const SignIn = () => {
  const [alert, setalert] = useState(false);
  const [error, seterror] = useState(false);
  const context = useContext(ContextProject);
  let statusSignUp = !!localStorage.getItem("username");

  let CustomErrorMessage = props => {
    return (
      <ErrorMessage {...props}>
        {error => <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
      </ErrorMessage>
    );
  };

  if (context.signIn) return <Redirect to="/" />;
  return (
    <div>
      <TitleForm>اطلاعات خود را وارد کنید</TitleForm>
      <Formik
        initialValues={{
          username: statusSignUp ? localStorage.getItem("username") : "",
          password: statusSignUp ? localStorage.getItem("password") : ""
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);

          if (
            values.username === localStorage.getItem("username") ||
            values.password === localStorage.getItem("password")
          ) {
            setalert(true);
            seterror(false);
            setTimeout(() => {
              context.setsignIn(true);
            }, 1000);
          } else {
            seterror(true);
          }
          values.username = "";
          values.password = "";
        }}
      >
        {({ isSubmitting }) => (
          <Form
            css={css`
              width: 50%;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              text-align: center;
              padding: 35px;
            `}
          >
            <Lable htmlFor="username">نام </Lable>
            <FieldInput
              type="text"
              name="username"
              onFocus={() => seterror(false)}
            />
            <CustomErrorMessage name="username"></CustomErrorMessage>
            <Lable htmlFor="password">رمز ورود </Lable>
            <FieldInput
              type="password"
              name="password"
              onFocus={() => seterror(false)}
            />
            <CustomErrorMessage name="password"></CustomErrorMessage>
            <div
              css={css`
                color: red;
                padding-top: 10px;
              `}
            >
              {error ? "رمز عبور یا نام کاربری اشتباه است" : null}
            </div>
            <p
              css={css`
                color: green;
                padding-top: 10px;
              `}
              name="alert"
            >
              {alert ? "خوش آمدید" : null}
            </p>
            <div>
              <SubmitForm
                value="وارد شوید"
                type="submit"
                disabled={isSubmitting}
              />
              <ButtonForm as={Link} to="/login/signup">
                ورود با گوگل
              </ButtonForm>
              <ButtonForm as={Link} to="/login/signup">
                ثبت نام کنید
              </ButtonForm>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
