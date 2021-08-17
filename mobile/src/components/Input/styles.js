import styled from 'styled-components/native';
import { colors } from '../../common/colors';

export const Container = styled.View`
  padding: 0 20px;
  height: 60px;
  background-color: ${colors.rgbaDark};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.white,
})`
  flex: 1;
  font-size: 20px;
  margin-left: 10px;
  color: ${colors.black};
  font-weight: bold;
`;