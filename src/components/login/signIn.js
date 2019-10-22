import React, { useState, useContext } from "react";
import { Formik } from "formik";
import { Redirect, Link } from "react-router-dom";
import { ContextProject } from "../../App";
import {
  TitleFormSignIn,
  FormLoginSignIn,
  FieldInputSignIn,
  SubmitFormSignIn,
  ButtonFormSignIn,
  ButtonFormSignInGoogle,
  LableSignIn,
  FieldWellcomSignIn,
  FieldErrorSignIn
} from "./uiLogin";

const SignIn = () => {
  const [alert, setalert] = useState(false);
  const [error, seterror] = useState(false);
  const context = useContext(ContextProject);
  let statusSignUp = !!localStorage.getItem("username");

  const handleSubmit = (values, actions) => {
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
  };

  if (context.signIn) return <Redirect to="/" />;
  return (
    <div>
      <TitleFormSignIn>اطلاعات خود را وارد کنید</TitleFormSignIn>
      <Formik
        initialValues={{
          username: statusSignUp ? localStorage.getItem("username") : "",
          password: statusSignUp ? localStorage.getItem("password") : ""
        }}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}>
        {({ isSubmitting }) => (
          <FormLoginSignIn>
            <LableSignIn htmlFor="username">نام </LableSignIn>
            <FieldInputSignIn
              type="text"
              name="username"
              onFocus={() => seterror(false)}
            />
            <LableSignIn htmlFor="password">رمز ورود </LableSignIn>
            <FieldInputSignIn
              type="password"
              name="password"
              onFocus={() => seterror(false)}
            />
            <FieldErrorSignIn>
              {error ? "رمز عبور یا نام کاربری اشتباه است" : null}
            </FieldErrorSignIn>
            <FieldWellcomSignIn name="alert">
              {alert ? "خوش آمدید" : null}
            </FieldWellcomSignIn>
            <div>
              <SubmitFormSignIn
                value="وارد شوید"
                type="submit"
                disabled={isSubmitting}
              />
              <ButtonFormSignInGoogle disabled as={Link} to="/login/signup">
                ورود با گوگل
              </ButtonFormSignInGoogle>
              <ButtonFormSignIn as={Link} to="/login/signup">
                ثبت نام کنید
              </ButtonFormSignIn>
            </div>
          </FormLoginSignIn>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
