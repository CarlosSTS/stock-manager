import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/button';

import { Container } from './styles';

const Home = () => {
  const { navigate } = useNavigation()
  return (
    <Container>
      <Button
        onPress={() => navigate('BiggerStock')}
        icon='arrow-right'>
        Produto com maior estoque
      </Button>

      <Button
        onPress={() => navigate('SmallerStock')}
        icon='arrow-right'>
        Produto com menor estoque
      </Button>


    </Container>
  )
}

export default Home;