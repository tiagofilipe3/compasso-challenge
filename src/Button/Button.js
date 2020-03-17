import * as PropTypes from "prop-types";
import React from "react";
import BaseButton from "./BaseButton";
import Container from "../Container";

const Button = props => {
  const { onClick, children, width, height, backgroundColor, style } = props;

  return (
    <BaseButton
      style={style}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      onClick={onClick}
      type="button"
    >
      <Container justifyContent="center" alignItems="center">
        {children}
      </Container>
    </BaseButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.string
};

Button.defaultProps = {
  children: undefined,
  width: undefined,
  height: undefined,
  backgroundColor: undefined,
  style: undefined
};

export default Button;
