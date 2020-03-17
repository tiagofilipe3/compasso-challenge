import React from "react";
import ReactLoading from "react-loading";
import * as PropTypes from "prop-types";

import Container from "../Container";
import Text from "../Text";

const StarredTab = ({ isSearching, isSelected, starredList }) => {
  if (!isSelected) {
    return null;
  }

  if (isSearching) {
    return (
      <Container marginTop="20px">
        <ReactLoading type="spin" color="#72a5f7" height={35} width={35} />
      </Container>
    );
  }

  return (
    <Container column marginTop="20px">
      {starredList &&
        starredList.map(repo => <Text scale={2}>{repo.name}</Text>)}
    </Container>
  );
};

StarredTab.propTypes = {
  isSearching: PropTypes.bool,
  isSelected: PropTypes.bool,
  starredList: PropTypes.arrayOf(PropTypes.object)
};

StarredTab.defaultProps = {
  isSearching: false,
  isSelected: false,
  starredList: undefined
};

export default StarredTab;
