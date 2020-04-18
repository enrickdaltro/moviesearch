import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Router from './routes';

// import { Container } from './styles';

export default function src() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
