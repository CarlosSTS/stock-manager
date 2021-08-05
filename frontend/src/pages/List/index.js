import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  Container,
  Title,
  SubTitle,
  ButtonSection,
  ButtonSuccess,
  Table, ButtonAction,
  AlertAction,
  Hr
} from '../../common/customStyles';

import Menu from '../../components/Menu'
import api from '../../services/api';

const List = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [status, setStatus] = useState({
    type: state ? state.type : '',
    message: state ? state.message : '',
  });

  async function productList() {
    setLoading(true)
    try {
      const response = await api.get('/product')
      //console.log(response.data)
      setData(response.data.product);
    } catch (err) {
      if (err.response) {
        setStatus({
          type: 'error',
          message: err.response.data.message
        })
      } else {
        setStatus({
          type: 'error',
          message: 'Erro: Tente novamente mais tarde'
        })
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    productList()
  }, []);

  async function deleteProduct(productId) {
    try {
      await api.delete(`product/${productId}`)
      setStatus({
        type: 'success',
        message: 'Produto deletado com sucesso!'
      })
      productList()
    } catch (err) {
      if (err.response) {
        setStatus({
          type: 'error',
          message: err.response.data.message
        })
      } else {
        setStatus({
          type: 'error',
          message: 'Erro: Tente novamente mais tarde'
        })
      }
    } finally {

    }
  }
  
  return (
    <Container>
      <Menu />

      <SubTitle>
        <Title>Listar</Title>
        <ButtonSection>
          <Link to='/create'><ButtonSuccess type='button'>Cadastrar</ButtonSuccess></Link>
        </ButtonSection>
      </SubTitle>

      {status.type === 'success' ? <AlertAction type='success'>{status.message}</AlertAction> : ''}
      {status.type === 'error' ? <AlertAction type='error'>{status.message}</AlertAction> : ''}
      <Hr />

      <Table>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Nome:</th>
            <th>Preço de venda:</th>
            <th>Quantidade:</th>
            <th>Ações:</th>
          </tr>
        </thead>
        <tbody>
          {data.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(product.salePrice)}</td>
              <td>{product.amount}</td>

              <td>
                <Link to={`/read/${product.id}`}><ButtonAction type='ButtonAction' action='read'>Visualizar</ButtonAction></Link>{' '}
                <Link to={`/edit/${product.id}`}><ButtonAction type='ButtonAction' action='edit'>Editar</ButtonAction></Link>{' '}
                <Link to={'#'}><ButtonAction action='delete' onClick={() =>
                  deleteProduct(product.id)}>Apagar</ButtonAction></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
};

export default List;