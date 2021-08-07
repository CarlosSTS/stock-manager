import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors } from '../../common/colors';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${colors.blue90};
  border-radius: 10px;
  margin-top: 8px;
  padding: 0 20px;
  
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  flex: 1;
  font-size: 20px;
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
`;