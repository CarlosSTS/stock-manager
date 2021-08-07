import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';

import api from '../../services/api';

import { colors } from '../../common/colors';

import { Container, TextLabel } from './styles';

const BiggerStock = () => {
  const [data, setData] = useState([]);

  async function getProducts() {
    const response = await api.get('/product/amount/larger')
    setData(response.data.product)
  }

  const pieData = data.map((product) => ({
    value: product.amount,
    key: product.id,
    svg: {
      fill: colors.fill
    }
  }));

  const Label = ({ slices }) => {
    return slices.map((slice) => {
      const { pieCentroid, data } = slice;

      return (
        <Text
          key={data.key}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={colors.fillText}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={16}
        >
          {data.key}
        </Text>
      )
    })
  }
  useFocusEffect(
    useCallback(() => {
      getProducts()
    }, [])
  );

  return (
    <Container>
      <PieChart style={{ height: 300 }} data={pieData}>
        <Label />
      </PieChart>
      <FlatList
        data={data}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <>
            <TextLabel> {item.id} - {item.name} - {item.amount}</TextLabel>
          </>
        )}
      />
    </Container>

  )
}

export default BiggerStock;