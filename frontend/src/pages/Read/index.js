import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import {
  Container,
  Title,
  SubTitle,
  ButtonSection,
  ButtonAction,
  SpanView,
  Hr
} from '../../common/customStyles';

import Menu from '../../components/Menu';

const Read = (props) => {

  const [id] = useState(props.match.params.id)
  const [data, setData] = useState('');

  async function getProduct() {
    setData({
      id: 1,
      name: 'Mouse',
      price: 43.423,
      amount: 312,
    })
  }

  useEffect(() => {

    getProduct()
  }, [id]);

  return (
    <Container>
      <Menu />
      <SubTitle>
        <Title>Visualizar</Title>
        <ButtonSection>
          <Link to='/list'><ButtonAction type='button' action='info'>Listar</ButtonAction></Link>{' '}
          <Link to={`/edit/${data.id}`}><ButtonAction type='button' action='edit'>Editar</ButtonAction></Link>
        </ButtonSection>
      </SubTitle>

<Hr />

      <SpanView>ID: {data.id}</SpanView>
      <SpanView>Nome: {data.name}</SpanView>
      <SpanView>Valor: {data.price}</SpanView>
      <SpanView>Quantidade: {data.amount}</SpanView>
    </Container>
  )
}

export default Read;
