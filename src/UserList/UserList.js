import React, { useState } from "react";
import { toast } from "react-toastify";

import "./App.css";
import Container from "../Container";
import Title from "../Title";
import SearchInput from "../SearchInput/SearchInput";
import Text from "../Text";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import Button from "../Button";
import User from "../User";
import { STARRED, REPOSITORY } from "../constants/tabs";
import "react-toastify/dist/ReactToastify.css";
import { getUser, getUserRepos, getUserStarred } from "../../actions/user";

function UserList() {
  const [searchValue, setSearchValue] = useState();
  const [user, setUser] = useState(null);
  const [repoList, setRepoList] = useState(null);
  const [starredList, setStarredList] = useState(null);
  const [selectedTab, setSelectedTab] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchValue) {
      toast.warn("Digite um usuário para pesquisar");
      return;
    }

    try {
      const res = await getUser(searchValue);

      if (res.data) {
        setUser(res.data);
      }
    } catch (e) {
      toast.error("Usuário não encontrado");
    }
  };

  const handleSelectRepository = async () => {
    setSelectedTab(REPOSITORY);
    setIsSearching(true);

    try {
      const res = await getUserRepos(user.login);

      if (res.data) {
        setRepoList(res.data);
      }

      setIsSearching(false);
    } catch (e) {
      setIsSearching(false);
      toast.error("Não foi possível buscar os repositórios do usuário");
    }
  };

  const handleSelectStarred = async () => {
    setSelectedTab(STARRED);
    setIsSearching(true);

    try {
      const res = await getUserStarred(user.login);

      if (res.data) {
        setStarredList(res.data);
      }

      setIsSearching(false);
    } catch (e) {
      setIsSearching(false);
      toast.error(
        "Não foi possível buscar os repositórios favoritos do usuário"
      );
    }
  };

  const handleKeyPress = async e => {
    if (e.which === 13) {
      await handleSearch();
    }
  };

  return (
    <Container width="100%" column alignItems="center">
      <Container marginTop="20px" column alignItems="center">
        <Title>Usuários GitHub</Title>
      </Container>
      <Container column marginTop="20px">
        <Text scale={1.8}>Digite um usuário para pesquisar</Text>
        <Container alignItems="center" marginTop="20px">
          <SearchInput
            id="userNameInput"
            style={{
              marginRight: "10px"
            }}
            value={searchValue}
            onChange={setSearchValue}
            onKeyPress={handleKeyPress}
          />
          <Button
            width="40px"
            id="searchUserBtn"
            onClick={handleSearch}
            backgroundColor="#72a5f7"
          >
            <div style={{ color: "#fff", marginRight: "5px" }}>Pesquisar</div>
            <SearchIcon style={{ width: "15px", height: "15px" }} />
          </Button>
        </Container>
      </Container>
      <Container column marginTop="40px" alignItems="center">
        {user && (
          <User
            user={user}
            repoList={repoList}
            isSearching={isSearching}
            starredList={starredList}
            selectedTab={selectedTab}
            onSelectStarred={handleSelectStarred}
            onSelectRepository={handleSelectRepository}
          />
        )}
      </Container>
    </Container>
  );
}

export default UserList;
