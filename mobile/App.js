import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/routes';
import { colors } from './src/common/colors';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar barStyle='light-content' backgroundColor={colors.black}/>
    </NavigationContainer>
  )
}

export default App;