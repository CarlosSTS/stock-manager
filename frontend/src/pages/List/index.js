import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  Container,
  Title,
  SubTitle,
  ButtonSection,
  ButtonSuccess,
  Table, ButtonAction,
  AlertAction
} from '../../common/customStyles';

import Menu from '../../components/Menu'

const List = () => {
  const { state } = useLocation();

  const [data, setData] = useState([])

  const [status, setStatus] = useState({
    type: state ? state.type : '',
    message: state ? state.message : '',
  });

  async function productList() {

    var value = [
      {
        "id": 2,
        "name": 'Teclado',
        "value": 52.47,
        "amount": 25
      },
      {
        "id": 1,
        "name": 'Mouse',
        "value": 31.21,
        "amount": 43
      },
      {
        "id": 3,
        "name": 'Monitor',
        "value": 999.21,
        "amount": 431
      }
    ]
    setData(value)
  };

  useEffect(() => {
    productList()
  }, []);

  async function deleteProduct(productId) {
    alert('Apagar o produto: ' + productId)
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

      <hr />
      <Table>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Nome:</th>
            <th>Valor:</th>
            <th>Quantidade:</th>
            <th>Ações:</th>
          </tr>
        </thead>
        <tbody>
          {data.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.value}</td>
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