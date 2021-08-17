import React, { useRef, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Formik } from "formik";
import * as Yup from 'yup';

import { expo } from '../../../app.json'

import {
  Container,
  Form,
  FormInput,
  Link,
  ErrorValue,
  Version
} from './styles';

import Button from '../../components/Button';
import api from '../../services/api';

const initialValues = {
  email: '',
  password: '',
}

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().min(6, 'No minimo 6 digitos').required('A senha é obrigatório')
});

const SignIn = ({ }) => {
  const navigation = useNavigation();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false)

  function navigateToHome() {
    navigation.navigate('Home')
  };

  async function onSubmit(values) {
    try {
      setLoading(true)
      const response = await api.post('/session', values);
      AsyncStorage.setItem('@stockmanager:token', response.data.token)
      Alert.alert(
        'Sucesso!',
        'Sessão inicializada',
      );
      navigation.navigate('Home');
    } catch (err) {
      Alert.alert("Erro", "Verifique seus dados e tente novamente")
    } finally {
      setLoading(false)
    }
  };

  return (
    <Container>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <Form>
            <FormInput
              error={errors.email}
              icon='mail-outline'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              placeholder="Digite seu e-mail"
              returnKeyType='next'
              onSubmitEditing={() => passwordRef.current.focus()}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={String(values.email)}
            />
            {errors.email && (
              <ErrorValue>{errors.email}</ErrorValue>
            )}

            <FormInput
              error={errors.password}
              icon='lock-outline'
              secureTextEntry
              autoCapitalize='none'
              placeholder="Digite sua senha"
              returnKeyType='send'
              ref={passwordRef}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={String(values.password)}
            />
            {errors.password && (
              <ErrorValue>{errors.password}</ErrorValue>
            )}
            <Button icon='log-in' loading={loading} onPress={handleSubmit}>Entrar</Button>
          </Form>
        )}</Formik>

      <TouchableOpacity activeOpacity={0.7} onPress={navigateToHome}>
        <Link>Entrar sem acesso</Link>

      </TouchableOpacity>
      <Version>{expo.version}</Version>
    </Container>
  )
}

export default SignIn;