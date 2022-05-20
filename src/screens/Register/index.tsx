import React, { useState } from 'react'
import { Modal } from 'react-native'
import { useForm } from 'react-hook-form'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { Button } from '../../components/Form/Button'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelect } from '../CategorySelect'

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes
} from './styles'
import { InputForm } from '../../components/Form/InputForm'

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionsType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const { control, handleSubmit } = useForm();

  function handleTransactionsTypesSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }


  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }
  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionsType,
      category: category.key
    }
  }
  return (

    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>

          <InputForm
            name='name'
            control={control}
            placeholder='Nome'
          />

          <InputForm
            name='amount'
            control={control}
            placeholder='Preço' />

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
          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>
        <Button
          title='Enviar'
          onPress={handleSubmit(handleRegister)}
        />
      </Form>
      <Modal visible={categoryModalOpen} >
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  )
}