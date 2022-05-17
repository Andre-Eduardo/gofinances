import React from 'react';
import {
  Container,
  UserWrapper,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <UserWrapper></UserWrapper>
      <Header>
        <UserInfo>
          <Photo source={{
            uri: 'http://github.com/Andre-Eduardo.png'
          }} />
          < User >
            <UserGreeting>Olá</UserGreeting>
            <UserName> André</UserName>
          </User>
        </UserInfo>
      </UserWrapper>
    </Header>
    </Container >
  )
}
