import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { Redirect } from "react-router-dom";
import {
  ButtonFormSignUp,
  FieldInputSignUp,
  LableSignUp,
  TitleFormSignUp,
  OkSignUp,
  FormSignUp
} from "./uiLogin";

const SignUp = () => {
  const [alert, setalert] = useState(false);
  const [saveLogin, setsaveLogin] = useState(false);

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

  const handlrSubmit = (values, actions) => {
    setTimeout(() => {
      actions.setSubmitting(false);
      setalert(true);
    }, 1000);
    setTimeout(() => {
      handleSetsaveLogin();
    }, 2000);
    localStorage.setItem("username", values.username);
    localStorage.setItem("password", values.password);
    values.username = "";
    values.email = "";
    values.password = "";
    values.passwordConfirmation = "";
  };

  if (saveLogin) return <Redirect to="/login" />;
  return (
    <div>
      <TitleFormSignUp>فرم زیر را پر کنید</TitleFormSignUp>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          passwordConfirmation: ""
        }}
        onSubmit={(values, actions) => {
          handlrSubmit(values, actions);
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
        })}>
        {({ isSubmitting }) => (
          <FormSignUp>
            <LableSignUp htmlFor="username">نام </LableSignUp>
            <FieldInputSignUp type="text" name="username" />
            <CustomErrorMessage name="username" />
            <LableSignUp htmlFor="email">ایمیل </LableSignUp>
            <FieldInputSignUp type="email" name="email" />
            <CustomErrorMessage name="email" />
            <LableSignUp htmlFor="password">رمز ورود </LableSignUp>
            <FieldInputSignUp type="password" name="password" />
            <CustomErrorMessage name="password" />
            <LableSignUp htmlFor="passwordConfirmation">
              تکرار رمز ورود{" "}
            </LableSignUp>
            <FieldInputSignUp type="password" name="passwordConfirmation" />
            <CustomErrorMessage name="passwordConfirmation" />
            <ButtonFormSignUp
              value="ذخیره اطلاعات"
              type="submit"
              disabled={isSubmitting}
            />
            <OkSignUp name="alert">
              {alert ? "ثبت نام شما با موفقیت انجام شد" : ""}
            </OkSignUp>
          </FormSignUp>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
