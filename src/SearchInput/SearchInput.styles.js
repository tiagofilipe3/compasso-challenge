import { css } from "@emotion/core";

const classes = {
  root: css`
    border: 1px solid #e3e3e3;
    height: 30px;
    border-radius: 10px;
    padding-left: 5px;

    &:focus {
      outline-width: 0;
      box-shadow: 0 0 1px 1px #72a5f7;
    }
  `
};

export default classes;
