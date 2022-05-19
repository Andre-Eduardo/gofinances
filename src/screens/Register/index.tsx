import React, { useState } from 'react'
import { CategorySelect } from '../../components/CategorySelect'
import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes
} from './styles'

export function Register() {
  const [transactionsType, setTransactionType] = useState('')

  function handleTransactionsTypesSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  return (

    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />
          <TransactionsTypes>
            <TransactionTypeButton
              type='up'
              title='Income'
              onPress={() => handleTransactionsTypesSelect('up')}
              isActive={transactionsType === 'up'}
            />
            <TransactionTypeButton
              type='down'
              title='Outcome'
              onPress={() => handleTransactionsTypesSelect('down')}
              isActive={transactionsType === 'down'}

            />
          </TransactionsTypes>
          <CategorySelect title='Category' />
        </Fields>
        <Button title='Enviar' />
      </Form>
    </Container>
  )
}