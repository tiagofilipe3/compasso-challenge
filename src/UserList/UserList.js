import React, { useState } from 'react';
import './App.css';
import { Container } from '../Container';
import Title from '../Title';
import SearchInput from '../SearchInput/SearchInput';
import Text from '../Text';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

function UserList() {
  const [searchValue, setSearchValue] = useState();

  return (
    <Container width="100%" column alignItems="center">
      <Container marginTop="20px" column alignItems="center">
        <Title>Usuários GitHub</Title>
      </Container>
      <Container column marginTop="20px">
        <Text scale={1.8}>Digite um usuário para pesquisar</Text>
        <Container>
          <SearchInput style={{ marginTop: '20px' }} value={searchValue} onChange={setSearchValue} />
          <button onClick={() => {}}>
            {/*<SearchIcon />*/}
          </button>
        </Container>
      </Container>
    </Container>
  );
}

export default UserList;
