import React, { useState } from "react";
import "./App.css";
import Container from "../Container";
import Title from "../Title";
import SearchInput from "../SearchInput/SearchInput";
import Text from "../Text";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import Button from "../Button";
import User from "../User";
import { FAVORITES, REPOSITORY } from "../constants/tabs";

function UserList() {
  const [searchValue, setSearchValue] = useState();
  const [user, setUser] = useState({ name: "Tiago Filipe" });
  const [selectedTab, setSelectedTab] = useState(null);

  const handleSearch = () => {};

  return (
    <Container width="100%" column alignItems="center">
      <Container marginTop="20px" column alignItems="center">
        <Title>Usuários GitHub</Title>
      </Container>
      <Container column marginTop="20px">
        <Text scale={1.8}>Digite um usuário para pesquisar</Text>
        <Container alignItems="center" marginTop="20px">
          <SearchInput
            style={{
              marginRight: "10px"
            }}
            value={searchValue}
            onChange={setSearchValue}
          />
          <Button width="40px" onClick={handleSearch} backgroundColor="#72a5f7">
            <SearchIcon style={{ width: "15px", height: "15px" }} />
          </Button>
        </Container>
      </Container>
      <Container column marginTop="40px" alignItems="center">
        {user && (
          <User
            onSelectRepository={() => setSelectedTab(REPOSITORY)}
            onSelectFavorites={() => setSelectedTab(FAVORITES)}
            user={user}
          />
        )}
        {selectedTab === REPOSITORY && (
          // TODO: repository list
          <div>Repository list</div>
        )}
        {selectedTab === FAVORITES && (
          // TODO: repository list
          <div>Favorites list</div>
        )}
      </Container>
    </Container>
  );
}

export default UserList;
