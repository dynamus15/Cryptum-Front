import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/SettingsScreen';
import CarteiraScreen from '../screens/CarteiraScreen';
import EnviarScreen from '../screens/EnviarScreen';
import EnviarTokensScreen from '../screens/EnviarTokensScreen';
import TokensEnviadosScreen from '../screens/TokensEnviadosScreen';


const CarteiraStack = createStackNavigator({
  Carteira: CarteiraScreen
}, {initialRouteName: 'Carteira'}
);

CarteiraStack.navigationOptions = {
  tabBarLabel: 'Carteira',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const EnviarStack = createStackNavigator({
  Enviar: EnviarScreen,
  EnviarTokens: EnviarTokensScreen,
  TokensEnviados: TokensEnviadosScreen,
}, {initialRouteName: 'Enviar'}
);

EnviarStack.navigationOptions = {
  tabBarLabel: 'Enviar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const ReceberStack = createStackNavigator({
  Receber: SettingsScreen,
});

ReceberStack.navigationOptions = {
  tabBarLabel: 'Receber',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const PagarStack = createStackNavigator({
  Pagar: SettingsScreen,
});

PagarStack.navigationOptions = {
  tabBarLabel: 'Pagar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  CarteiraStack,
  EnviarStack,
  ReceberStack,
  PagarStack,
});
