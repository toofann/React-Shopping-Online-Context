import React, { useState, useContext } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import styled, { css } from "styled-components/macro";
import * as yup from "yup";
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
  const [save, setsave] = useState(false);
  const [error, seterror] = useState(false);
  const context = useContext(ContextProject);
  let statusSignUp = !!localStorage.getItem("username");

  // let handlebluruser=()=>{
  //   if(username ===11111111){

  //   }
  // }
  let CustomErrorMessage = props => {
    return (
      <ErrorMessage {...props}>
        {error => <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
      </ErrorMessage>
    );
  };
  // let emailRegex = new RegExp(/\S+@\S+\.\S+/);
  // let matchUser = localStorage.getItem("username");
  // let matchUser = "شششششششش";
  // let handleLogin = () => {
  //   setsave(true);
  //   // setstate(true);
  // };
  if (context.signIn) return <Redirect to="/" />;
  return (
    <div>
      <TitleForm>اطلاعات خود را وارد کنید</TitleForm>
      <Formik
        initialValues={{
          username: statusSignUp ? localStorage.getItem("username") : "",
          password: statusSignUp ? localStorage.getItem("password") : ""
          //   email: "",
          //   passwordConfirmation: ""
        }}
        onSubmit={(values, actions) => {
          // } else
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

            // console.log("kjsabjbejdfnm");
          } else {
            seterror(true);
          }
          // //   values.email = "";
          //     setalert(true);

          values.username = "";
          values.password = "";
          // seterror(true);

          // //   localStorage.setItem("username", values.username);
          // //   localStorage.setItem("password", values.password);

          //   values.passwordConfirmation = "";
          // }
        }}
        // validationSchema={yup.object().shape({
        //   username: yup
        //     // .mixed()
        //     // .oneOf([yup.ref("username"), null], "رمز عبور اشتباه است"),
        //     .string()
        //     // .min(3, "نام کابری باید بیش از 3 حرف باشد")
        //     // .max(16, "نام کاربری باید کمتر از 16 حرف یاشد")
        //     .matches(matchUser, "نام کاربری اشتباه است"),
        //   // .required("نام کاربری را پر کنید"),
        //   //   email: yup
        //   //     .string()
        //   //     .required("ایمیل را پر کنید")
        //   //     .matches(emailRegex, "ایمیل درست نیست"),
        //   password: yup
        //     .string()
        //     .required("رمز عبور را پر کنید")
        //     .min(8, "رمز ورود باید بیش از 8 حرف باشد")
        //     .max(16, "رمز ورود باید کمتر از 16 حرف باشد")
        //   //   passwordConfirmation: yup
        //   //     .mixed()
        //   //     .oneOf([yup.ref("password"), null], "رمز عبور اشتباه است")
        // })}
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

            {/* <Lable htmlFor="email">ایمیل </Lable>
            <FieldInput type="email" name="email" />
            <CustomErrorMessage name="email" /> */}
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
            {/* <Lable htmlFor="passwordConfirmation">تکرار رمز ورود </Lable>
            <FieldInput type="password" name="passwordConfirmation" />
            <CustomErrorMessage name="passwordConfirmation" /> */}
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
