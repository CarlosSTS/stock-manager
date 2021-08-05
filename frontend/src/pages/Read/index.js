import React, { useEffect, useState } from 'react'
import { Link, useLocation,Redirect } from 'react-router-dom';

import {
  Container,
  Title,
  SubTitle,
  ButtonSection,
  ButtonAction,
  SpanView,
  Hr,
  AlertAction
} from '../../common/customStyles';

import api from '../../services/api';

import Menu from '../../components/Menu';

const Read = (props) => {
  const { state } = useLocation();

  const [id] = useState(props.match.params.id)
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({
    type: state ? state.type : '',
    message: state ? state.message : '',
  });

  async function getProduct() {
    setLoading(true)
    try {
      const response = await api.get(`/product/${id}`)
      //console.log(response.data)
      setData(response.data.product);
    } catch (err) {
      if (err.response) {
        setStatus({
          type: 'redError',
          message: err.response.data.message
        })
      } else {
        setStatus({
          type: 'redError',
          message: 'Erro: Tente novamente mais tarde'
        })
      }
    } finally {
      setLoading(false)
    }
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

      {status.type === 'redError' ? <Redirect to={{
        pathname: '/list',
        state: {
          type: 'error',
          message: status.message
        }
      }} /> : ''}
      <Hr />

      <SpanView>ID: {data.id}</SpanView>
      <SpanView>Nome: {data.name}</SpanView>
      <SpanView>Valor de Compra: {new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(data.purchasePrice)}</SpanView>
      <SpanView>Preço de Venda: {new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(data.salePrice)}</SpanView>
      <SpanView>Quantidade: {data.amount}</SpanView>
    </Container>
  )
}

export default Read;