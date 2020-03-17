import React from "react";
import * as PropTypes from "prop-types";

import Container from "../Container";
import Button from "../Button";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const User = ({ user, onSelectRepository, onSelectFavorites }) => (
  <Container column alignItems="center">
    {user.name}
    <Container marginTop="15px">
      <Button backgroundColor="#72a5f7" onClick={onSelectRepository}>
        <div style={{ color: "#fff", marginRight: "5px" }}>Repositório</div>
        <SearchIcon style={{ width: "15px", height: "15px" }} />
      </Button>
      <Button
        style={{ marginLeft: "10px" }}
        backgroundColor="#72a5f7"
        onClick={onSelectFavorites}
      >
        <div style={{ color: "#fff", marginRight: "5px" }}>Favoritos</div>
        <SearchIcon style={{ width: "15px", height: "15px" }} />
      </Button>
    </Container>
  </Container>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string
  }),
  onSelectRepository: PropTypes.func.isRequired,
  onSelectFavorites: PropTypes.func.isRequired,
};

User.defaultProps = {
  user: undefined
};

export default User;
