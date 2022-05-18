import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { getBottomSpace } from 'react-native-iphone-x-helper'
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
  Title,
  TransactionList
} from './styles';

export function Dashboard() {
  const data = [{
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: '13/04/2022'
  },
  {
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: '13/04/2022'
  },
  {
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: '13/04/2022'
  }
  ]
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
        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            { paddingBottom: getBottomSpace() }
          }
        />

      </Transactions>

    </Container >
  )
}
