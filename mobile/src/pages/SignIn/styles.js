import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';

import { colors } from '../../common/colors';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  `;

export const Version = styled.Text`
font-size: 16px;
margin-top: 40px;
color: ${colors.blue};
font-weight: bold;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  `;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  `;

export const Link = styled.Text`
font-size: 20px;
margin-top: 40px;
color: ${colors.blue90};
font-weight: bold;
`;

export const ErrorValue = styled.Text`
color: ${colors.error};
font-size: 16px;
width: 100%;
margin-bottom: 4px;
`;