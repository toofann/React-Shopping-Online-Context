import React, { useContext } from "react";
import { ContextProject } from "../../App";
import { css } from "styled-components/macro";
const Dashboard = () => {
  const context = useContext(ContextProject);
  return (
    <div
      css={css`
        text-align: center;
        margin-top: 100px;
      `}
    >
      <h1>
        {context.signIn ? "صفحه داشبورد شما" : "اول وارد حساب کاربری خود بشوید"}
      </h1>
    </div>
  );
};

export default Dashboard;
