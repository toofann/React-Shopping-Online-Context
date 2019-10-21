import React, { useContext } from "react";
import { ContextProject } from "../../App";

const Dashboard = () => {
  const context = useContext(ContextProject);
  return (
    <div>
      <h1>
        {context.signIn ? "صفحه داشبورد شما" : "اول وارد حساب کاربری خود بشوید"}
      </h1>
    </div>
  );
};

export default Dashboard;
