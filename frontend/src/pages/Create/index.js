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

import api from '../../services/api';

import Menu from '../../components/Menu';

const Create = () => {

  const [product, setProduct] = useState({
    name: '',
    purchasePrice: '',
    salePrice: '',
    amount: 0
  });
  const [purchasePriceFormat, setPurchasePriceFormat] = useState('')
  const [salePriceFormat, setSalePriceFormat] = useState('')

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  function valueInput(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  async function addProduct(e) {
    e.preventDefault();

    try {
      await api.post('/product', product)
      //console.log(response.data)

      setStatus({
        type: 'redSuccess',
        message: 'Produto cadastrado com sucesso!'
      })
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

  const formatPurchasePrice = async e => {
    var valuePricePurchaseInput = e.target.value;

    valuePricePurchaseInput = valuePricePurchaseInput.replace(/\D/g, "")
    valuePricePurchaseInput = valuePricePurchaseInput.replace(/(\d)(\d{2})$/, "$1,$2");
    valuePricePurchaseInput = valuePricePurchaseInput.replace(/(?=(\d{3})+(\D))\B/g, ".");

    setPurchasePriceFormat(valuePricePurchaseInput);

    var pricePurchaseSalve = await valuePricePurchaseInput.replace(".", "");
    pricePurchaseSalve = await pricePurchaseSalve.replace(",", ".");

    setProduct({ ...product, purchasePrice: pricePurchaseSalve })
  }

  const formatSalePrice = async e => {
    var valuePriceSaleInput = e.target.value;

    valuePriceSaleInput = valuePriceSaleInput.replace(/\D/g, "")
    valuePriceSaleInput = valuePriceSaleInput.replace(/(\d)(\d{2})$/, "$1,$2");
    valuePriceSaleInput = valuePriceSaleInput.replace(/(?=(\d{3})+(\D))\B/g, ".");

    setSalePriceFormat(valuePriceSaleInput);

    var priceSaleSalve = await valuePriceSaleInput.replace(".", "");
    priceSaleSalve = await priceSaleSalve.replace(",", ".");

    setProduct({ ...product, salePrice: priceSaleSalve })
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
          name='name'
          placeholder='Nome do produto'
          onChange={valueInput}
        />

        <Label>Preço de Compra:</Label>
        <Input
          type='text'
          name='purchasePriceFormat'
          placeholder='Preço de Compra'
          value={purchasePriceFormat}
          onChange={formatPurchasePrice}
        />

        <Label>Preço de Venda:</Label>
        <Input
          type='text'
          name='salePriceFormat'
          placeholder='Preço de Venda'
          value={salePriceFormat}
          onChange={formatSalePrice}
        />

        <Label>Quantidade:</Label>
        <Input
          min={0}
          type='number'
          name='amount'
          placeholder='Quantidade do produto'
          onChange={valueInput}
        />

        <ButtonSuccess type='submit'>Cadastrar</ButtonSuccess>
      </Form >
    </Container>
  )
}

export default Create;
