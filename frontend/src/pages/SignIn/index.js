import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowRightCircle } from 'react-icons/fi'

import api from '../../services/api';
import { AlertAction } from '../../common/customStyles'

import { Container, H1,Section } from './styles';

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().min(6, 'No minimo 6 digitos').required('A senha é obrigatório')
});

export default function SignIn() {
  const [loading,setLoading] = useState(false)
  const history= useHistory();
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  async function handleSubmit(data) {
    setLoading(true)
      try {
        const response = await api.post('/session',data)
        localStorage.setItem('@stockmanager:token',response.data.token)
        history.push('/dashboard')
        console.table(response.data)
      }catch (err) {
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
      <Section>

        <Form schema={schema} onSubmit={handleSubmit}>
        {status.type === 'error' ? <AlertAction type='error'>{status.message}</AlertAction> : ''}

          <H1>Faça seu login</H1>

          <Input type='email' name="email" placeholder="Digite sua e-mail" />
          <Input type='password' name="password" placeholder="Digite seu senha" />

          <button
            style={{ backgroundColor: '#2196f3' }}
            className="button"
            type="submit">
            {loading ? 'Carregando...' : 'Acessar'}

          </button>
          <button
            className="button"
            style={{ backgroundColor: '#00c853' }}>
            <Link to="/register" style={{ color: '#fff' }}>
              <FiArrowRightCircle size={24} color="#fff" />
              Não tenho conta
            </Link>
          </button>

        </Form>
      </Section>
    </Container>
  )
}