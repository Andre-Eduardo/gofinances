import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
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
  HighlightCards,
  Transactions,
  Title
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
      <HighlightCards >
        <HighlightCard
          type='up'
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
          type='down'
          title='Saídas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
          type='total'
          title='Total'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionCard />
      </Transactions>

    </Container >
  )
}
