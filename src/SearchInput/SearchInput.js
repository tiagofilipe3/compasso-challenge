import React from "react";
import * as PropTypes from "prop-types";
import classes from "./SearchInput.styles";

const SearchInput = props => {
  const { id, value, onChange, style, onKeyPress } = props;

  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <input
      id={id}
      placeholder="Digite"
      onKeyPress={onKeyPress}
      value={value}
      style={style}
      css={classes.root}
      onChange={handleChange}
    />
  );
};

SearchInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.shape({}),
  onKeyPress: PropTypes.func
};

SearchInput.defaultProps = {
  value: undefined,
  style: undefined,
  onKeyPress: undefined
};

export default SearchInput;
