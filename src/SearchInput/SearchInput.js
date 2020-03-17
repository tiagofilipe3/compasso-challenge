import React from "react";
import * as PropTypes from "prop-types";
import classes from "./SearchInput.styles";

const SearchInput = props => {
  const { value, onChange, style } = props;

  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <input
      value={value}
      style={style}
      css={classes.root}
      onChange={handleChange}
    />
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.shape({})
};

SearchInput.defaultProps = {
  value: undefined,
  style: undefined
};

export default SearchInput;
