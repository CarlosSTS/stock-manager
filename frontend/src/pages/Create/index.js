import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';

import {
  Container,
  Title,
  SubTitle,
  ButtonSection,
  ButtonAction,
  ButtonSuccess,
  Form,
  Label,
  Input,
  Hr,
  AlertAction
} from '../../common/customStyles';

import Menu from '../../components/Menu';

const Create = () => {

  const [product, setProduct] = useState({
    nome: '',
    valor: '',
    quantidade: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  function valueInput(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }
  async function addProduct(e) {
    e.preventDefault();
    console.log('valor: ' + product.valor)
    setStatus({
      type: 'redSuccess',
      message: 'Erro: Produto cadastrado com sucesso'
    })
  }

  return (
    <Container>
      <Menu />
      <SubTitle>
        <Title>Cadastrar</Title>
        <ButtonSection>
          <Link to='/list'><ButtonAction type='button' action='info'>Listar</ButtonAction></Link>{' '}
        </ButtonSection>
      </SubTitle>

      {status.type === 'error' ? <AlertAction type='error'>{status.message}</AlertAction> : ''}
      {status.type === 'success' ? <AlertAction type='success'>{status.message}</AlertAction> : ''}
      {status.type === 'redSuccess' ? <Redirect to={{
        pathname: '/list',
        state: {
          type: 'success',
          message: status.message
        }
      }} /> : ''}

      <Hr />
      <Form onSubmit={addProduct}>
        <Label>Nome:</Label>
        <Input
          type='text'
          name='nome'
          placeholder='Nome do produto'
          onChange={valueInput}
        />
        <br />
        <br />

        <Label>Preço:</Label>
        <Input
          type='text'
          name='valor'
          placeholder='Preço do produto'
          onChange={valueInput}
        />
        <br />
        <br />

        <Label>Quantidade:</Label>
        <Input
          type='number'
          name='quantidade'
          placeholder='Quantidade do produto'
          onChange={valueInput}
        />
        <br />
        <br />

        <ButtonSuccess type='submit'>Cadastrar</ButtonSuccess>
      </Form >
    </Container>
  )
}

export default Create;
