import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import {
  Container,
  UserWrapper,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards
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
      <HighlightCards

      >
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container >
  )
}
