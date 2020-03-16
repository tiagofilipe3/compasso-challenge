import { css } from '@emotion/core';

const searchInputStyles = css`
  border: 1px solid #e3e3e3;
  height: 30px;
  border-radius: 10px;
  
  &:focus {
    outline-width: 0;
    box-shadow: 0 0 1px 1px #72A5F7;
  }
`;

export default searchInputStyles;
