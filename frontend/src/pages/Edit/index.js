import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import {
  Container,
  Title,
  SubTitle,
  ButtonSection,
  ButtonAction,
  Label,
  Input,
  Hr,
  Form

} from '../../common/customStyles';

import Menu from '../../components/Menu';

const Edit = (props) => {

  const [id] = useState(props.match.params.id)
  const [name, setNome] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')

  async function getProduct() {
    setNome('Mouse');
    setPrice(43.423);
    setAmount(312);
  }

  useEffect(() => {
    getProduct()
  }, [id]);

  async function editProduct(e) {
    e.preventDefault();
    alert('Nome: ' + name)
  }

  return (
    <Container>
      <Menu />
     
      <SubTitle>
        <Title>Editar</Title>
        <ButtonSection>
          <Link to='/list'><ButtonAction action='info' type='button'>Listar</ButtonAction></Link>{' '}
          <Link to={`/read/${id}`}><ButtonAction action='read' type='button'>Visualizar</ButtonAction></Link>

        </ButtonSection>
      </SubTitle>

<Hr />
      <Form onSubmit={editProduct}>
        <Label>Nome:</Label>
        <Input
          type='text'
          name='nome'
          placeholder='Nome do produto'
          value={name}
          onChange={e => setNome(e.target.value)}
        />

        <Label>Preço:</Label>
        <Input
          type='text'
          name='valor'
          placeholder='Preço do produto'
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <Label>Quantidade:</Label>
        <Input
          type='number'
          name='quantidade'
          placeholder='Quantidade do produto'
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <ButtonAction action='edit' type='submit'>Salvar</ButtonAction>
      </Form>
    </Container>
  )
}

export default Edit;
