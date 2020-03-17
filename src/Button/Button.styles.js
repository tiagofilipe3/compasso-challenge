import { css } from "@emotion/core";

const classes = {
  root: css`
    width: auto;
    min-width: 40px;
    height: 36px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #fff;

    &:focus {
      outline-width: 0;
    }

    &:active {
      box-shadow 0px 4px 8px rgba(darken(dodgerblue, 30%));
      transform scale(.98);
    }
  `
};

export default classes;
