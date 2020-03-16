import React from 'react';
import * as PropTypes from 'prop-types';
import searchInputStyles from './SearchInput.styles';

const SearchInput = (props) => {
  const { value, onChange, style, children } = props;

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      value={value}
      style={style}
      css={searchInputStyles}
      onChange={handleChange}
    >
      {children}
    </input>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.shape({}),
};

SearchInput.defaultProps = {
  value: undefined,
  style: undefined,
};

export default SearchInput;
