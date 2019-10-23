import React, { Component } from "react";
import { css } from "styled-components/macro";

const WithErrorHandeling = WraaperComponent => {
  return class WithErrorHandelingClass extends Component {
    state = {
      isError: false
    };
    componentDidCatch(error) {
      console.log(error);
    }
    static getDerivedStateFromError(Error) {
      return {
        isError: true
      };
    }
    render() {
      if (!this.state.isError)
        return (
          <div>
            <WraaperComponent {...this.props} />
          </div>
        );
      else
        return (
          <div
            css={css`
              text-align: center;
              margin-top: 100px;
            `}>
            <h1>Error Handeling</h1>
          </div>
        );
    }
  };
};
export default WithErrorHandeling;
