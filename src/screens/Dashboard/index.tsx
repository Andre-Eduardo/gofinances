import React from 'react';
import {
  Container,
  UserWrapper,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon
} from './styles';

export function Dashboard() {
  return (
    <Container>

      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{
              uri: 'http://github.com/Andre-Eduardo.png'
            }} />
            < User >
              <UserGreeting>Olá</UserGreeting>
              <UserName> André</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </UserWrapper>

      </Header>

    </Container >
  )
}
