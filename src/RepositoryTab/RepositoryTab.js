import React from "react";
import ReactLoading from "react-loading";
import * as PropTypes from "prop-types";

import Container from "../Container";
import Text from "../Text";

const RepositoryTab = ({ isSearching, isSelected, repoList }) => {
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
      {repoList && repoList.map(repo => <Text scale={2}>{repo.name}</Text>)}
    </Container>
  );
};

RepositoryTab.propTypes = {
  isSearching: PropTypes.bool,
  isSelected: PropTypes.bool,
  repoList: PropTypes.arrayOf(PropTypes.object)
};

RepositoryTab.defaultProps = {
  isSearching: false,
  isSelected: false,
  repoList: undefined
};

export default RepositoryTab;
