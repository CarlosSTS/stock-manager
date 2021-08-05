import React, { useEffect, useState } from 'react'
import { Link, useLocation, Redirect } from 'react-router-dom';

import {
  Container,
  Title,
  SubTitle,
  ButtonSection,
  ButtonAction,
  Label,
  Input,
  Hr,
  Form,
  AlertAction

} from '../../common/customStyles';

import api from '../../services/api';
import Menu from '../../components/Menu';

const Edit = (props) => {
  const { state } = useLocation();

  const [id] = useState(props.match.params.id)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({
    type: state ? state.type : '',
    message: state ? state.message : '',
  });

  const [name, setName] = useState('')
  const [purchasePrice, setPurchasePrice] = useState('')
  const [salePrice, setSalePrice] = useState('')
  const [amount, setAmount] = useState('')

  const [purchasePriceFormat, setPurchasePriceFormat] = useState('')
  const [salePriceFormat, setSalePriceFormat] = useState('')

  async function getProduct() {
    setLoading(true)
    try {
      const response = await api.get(`/product/${id}`)
      setName(response.data.product.name)

      setPurchasePrice(response.data.product.purchasePrice)
      setPurchasePriceFormat(new Intl.NumberFormat('pt-br', {
        minimumFractionDigits: 2,
        currency: 'BRL'
      }).format(response.data.product.purchasePrice));

      setSalePrice(response.data.product.salePrice)
      setSalePriceFormat(new Intl.NumberFormat('pt-br', {
        minimumFractionDigits: 2,
        currency: 'BRL'
      }).format(response.data.product.salePrice));

      setAmount(response.data.product.amount)

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

  const formatPurchasePrice = async (valuePricePurchaseInput) => {

    var valuePricePurchaseConvert = valuePricePurchaseInput.toString().replace(/\D/g, "");
    valuePricePurchaseConvert = valuePricePurchaseConvert.replace(/(\d)(\d{2})$/, "$1,$2");
    valuePricePurchaseConvert = valuePricePurchaseConvert.replace(/(?=(\d{3})+(\D))\B/g, ".");
    setPurchasePriceFormat(valuePricePurchaseConvert);

    var pricePurchaseSalve = await valuePricePurchaseInput.replace(".", "");
    pricePurchaseSalve = await pricePurchaseSalve.replace(",", ".");

    setPurchasePrice(pricePurchaseSalve);
  }

  const formatSalePrice = async (valuePriceSaleInput) => {

    var valuePriceSaleConvert = valuePriceSaleInput.toString().replace(/\D/g, "");
    valuePriceSaleConvert = valuePriceSaleConvert.replace(/(\d)(\d{2})$/, "$1,$2");
    valuePriceSaleConvert = valuePriceSaleConvert.replace(/(?=(\d{3})+(\D))\B/g, ".");
    setSalePriceFormat(valuePriceSaleConvert);

    var priceSaleSalve = await valuePriceSaleInput.replace(".", "");
    priceSaleSalve = await priceSaleSalve.replace(",", ".");

    setSalePrice(priceSaleSalve);
  }

  async function editProduct(e) {
    e.preventDefault();

    try {
      await api.put('/product', {
        id,
        name,
        salePrice,
        purchasePrice,
        amount
      })
      //console.log(response.data)

      setStatus({
        type: 'redSuccess',
        message: 'Produto editado com sucesso!'
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
      <Form onSubmit={editProduct}>
        <Label>Nome:</Label>
        <Input
          type='text'
          name='name'
          placeholder='Nome do produto'
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Label>Preço de Compra:</Label>
        <Input
          type='text'
          name='purchasePriceFormat'
          placeholder='Preço de Compra do produto'
          value={purchasePriceFormat}
          onChange={e => formatPurchasePrice(e.target.value)}
        />

        <Label>Preço de Venda:</Label>
        <Input
          type='text'
          name='salePriceFormat'
          placeholder='Preço de Venda do produto'
          value={salePriceFormat}
          onChange={e => formatSalePrice(e.target.value)}
        />

        <Label>Quantidade:</Label>
        <Input
          type='number'
          name='amount'
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
