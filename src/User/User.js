import React from "react";
import * as PropTypes from "prop-types";

import Container from "../Container";
import Button from "../Button";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import Text from "../Text";
import { STARRED, REPOSITORY } from "../constants/tabs";
import RepositoryTab from "../RepositoryTab";
import StarredTab from "../StarredTab";

const User = ({
  user,
  onSelectRepository,
  onSelectStarred,
  selectedTab,
  repoList,
  starredList,
  isSearching
}) => (
  <Container column alignItems="center">
    <img
      id="userImage"
      alt="user"
      style={{ height: "80px", width: "80px" }}
      src={user.avatar_url}
    />
    <Container marginTop="10px">{user.name}</Container>
    <Container marginTop="5px">
      <Text scale={1.8}>{user.login}</Text>
    </Container>
    <Container marginTop="15px">
      <Button
        id="selectReposBtn"
        backgroundColor="#72a5f7"
        onClick={onSelectRepository}
      >
        <div style={{ color: "#fff", marginRight: "5px" }}>Repositórios</div>
        <SearchIcon style={{ width: "15px", height: "15px" }} />
      </Button>
      <Button
        id="selectStarredBtn"
        style={{ marginLeft: "10px" }}
        backgroundColor="#72a5f7"
        onClick={onSelectStarred}
      >
        <div style={{ color: "#fff", marginRight: "5px" }}>Favoritos</div>
        <SearchIcon style={{ width: "15px", height: "15px" }} />
      </Button>
    </Container>
    <RepositoryTab
      isSelected={selectedTab === REPOSITORY}
      isSearching={isSearching}
      repoList={repoList}
    />
    <StarredTab
      isSelected={selectedTab === STARRED}
      isSearching={isSearching}
      starredList={starredList}
    />
  </Container>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    login: PropTypes.string
  }),
  onSelectRepository: PropTypes.func.isRequired,
  onSelectStarred: PropTypes.func.isRequired,
  repoList: PropTypes.arrayOf(PropTypes.object),
  starredList: PropTypes.arrayOf(PropTypes.object),
  selectedTab: PropTypes.string.isRequired,
  isSearching: PropTypes.bool.isRequired
};

User.defaultProps = {
  user: undefined,
  repoList: undefined,
  starredList: undefined
};

export default User;
