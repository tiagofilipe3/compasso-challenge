import styled from "@emotion/styled";
import * as PropTypes from "prop-types";
import classes from "./Button.styles";

const BaseButton = styled.button`
  ${classes.root}
  width: ${({ width }) => width && width};
  height: ${({ height }) => height || "36px"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
`;

BaseButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string
};

BaseButton.defaultProps = {
  width: undefined,
  height: undefined,
  backgroundColor: undefined
};

export default BaseButton;
