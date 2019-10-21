import React, { useState, useContext } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import styled, { css } from "styled-components/macro";
import * as yup from "yup";
import { Redirect } from "react-router-dom";
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
const ButtonForm = styled.input`
  border: none;
  padding: 10px;
  background-color: #05e263;
  margin-top: 35px;
  border-radius: 3px;
  cursor: pointer;
`;
const TitleForm = styled.h2`
  color: #323832;
  padding: 30px 0px 0px 0px;
  text-shadow: 1px 1px 1px black;
  text-align: center;
  margin: 0 auto;
`;
const SignUp = () => {
  const [alert, setalert] = useState(false);
  const [saveLogin, setsaveLogin] = useState(false);
  // const context = useContext(ContextProject);

  let CustomErrorMessage = props => {
    return (
      <ErrorMessage {...props}>
        {error => <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
      </ErrorMessage>
    );
  };
  let emailRegex = new RegExp(/\S+@\S+\.\S+/);
  let handleSetsaveLogin = () => {
    setsaveLogin(true);
  };
  if (saveLogin) return <Redirect to="/login" />;
  return (
    <div>
      <TitleForm>فرم زیر را پر کنید</TitleForm>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          passwordConfirmation: ""
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false);
            setalert(true);
          }, 1000);
          setTimeout(() => {
            // context.setsignIn(true);/
            handleSetsaveLogin();
          }, 2000);

          localStorage.setItem("username", values.username);
          localStorage.setItem("password", values.password);
          values.username = "";
          values.email = "";
          values.password = "";
          values.passwordConfirmation = "";
        }}
        validationSchema={yup.object().shape({
          username: yup
            .string()
            .min(3, "نام کابری باید بیش از 3 حرف باشد")
            .max(16, "نام کاربری باید کمتر از 16 حرف یاشد")
            .required("نام کاربری را پر کنید"),
          email: yup
            .string()
            .required("ایمیل را پر کنید")
            .matches(emailRegex, "ایمیل درست نیست"),
          password: yup
            .string()
            .required("رمز عبور را پر کنید")
            .min(8, "رمز ورود باید بیش از 8 حرف باشد")
            .max(16, "رمز ورود باید کمتر از 16 حرف باشد"),
          passwordConfirmation: yup
            .mixed()
            .oneOf([yup.ref("password"), null], "رمز عبور اشتباه است")
        })}
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
            <FieldInput type="text" name="username" />
            <CustomErrorMessage name="username" />
            <Lable htmlFor="email">ایمیل </Lable>
            <FieldInput type="email" name="email" />
            <CustomErrorMessage name="email" />
            <Lable htmlFor="password">رمز ورود </Lable>
            <FieldInput type="password" name="password" />

            <CustomErrorMessage name="password" />
            <Lable htmlFor="passwordConfirmation">تکرار رمز ورود </Lable>
            <FieldInput type="password" name="passwordConfirmation" />
            <CustomErrorMessage name="passwordConfirmation" />
            <ButtonForm
              value="ذخیره اطلاعات"
              type="submit"
              disabled={isSubmitting}
            />
            <p
              css={css`
                color: green;
                padding-top: 30px;
              `}
              name="alert"
            >
              {alert ? "ثبت نام شما با موفقیت انجام شد" : ""}
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
