import React from 'react';
import { Feather } from '@expo/vector-icons';
import {ActivityIndicator} from 'react-native';

import { colors } from '../../common/colors';

import {Container, Text} from './styles';

export default function Button({children,icon, loading, ...rest}) {
  return (
    <>
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.white} />
      ) : (
    <>
     {icon && (
        <Feather name={icon} size={24} color={colors.white} />
      )}
        <Text>{children}</Text>
        </>
      )}
    
    </Container>
      </>
  );
}