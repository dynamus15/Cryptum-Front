import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from 'react-native-vector-icons/MaterialCommunityIcons';

//import TabBarIcon from '../components/TabBarIcon';
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
  tabBarIcon: ({ focused , tintColor}) => {
    let iconName;
    if (Platform.OS === 'ios') {
      iconName = `wallet`;
    } else if (Platform.OS === 'android'){
      iconName = `wallet`;
    }
    return <TabBarIcon name={iconName} size={30} color={tintColor}/>;
  },
  tabBarOptions:{
   activeTintColor: '#3366ff',
   inactiveTintColor: '#c0c0c0',
  },
};

const EnviarStack = createStackNavigator({
  Enviar: EnviarScreen,
  EnviarTokens: EnviarTokensScreen,
  TokensEnviados: TokensEnviadosScreen,
}, {initialRouteName: 'Enviar'}
);

EnviarStack.navigationOptions = {
  tabBarLabel: 'Enviar',
  tabBarIcon: ({ focused , tintColor}) => {
    let iconName;
    if (Platform.OS === 'ios') {
      iconName = `arrow-top-right`;
    } else if (Platform.OS === 'android'){
      iconName = `arrow-top-right`;
    }
    return <TabBarIcon name={iconName} size={30} color={tintColor}/>;
  },
  tabBarOptions:{
   activeTintColor: '#3366ff',
   inactiveTintColor: '#c0c0c0',
  },
};

const ReceberStack = createStackNavigator({
  Receber: SettingsScreen,
});

ReceberStack.navigationOptions = {
  tabBarLabel: 'Receber',
  tabBarIcon: ({ focused , tintColor}) => {
    let iconName;
    if (Platform.OS === 'ios') {
      iconName = `arrow-bottom-left`;
    } else if (Platform.OS === 'android'){
      iconName = `arrow-bottom-left`;
    }
    return <TabBarIcon name={iconName} size={30} color={tintColor}/>;
  },
  tabBarOptions:{
   activeTintColor: '#3366ff',
   inactiveTintColor: '#c0c0c0',
  },
};

const PagarStack = createStackNavigator({
  Pagar: SettingsScreen,
});

PagarStack.navigationOptions = {
  tabBarLabel: 'Pagar',
  tabBarIcon: ({ focused , tintColor}) => {
    let iconName;
    if (Platform.OS === 'ios') {
      iconName = `coins`;
    } else if (Platform.OS === 'android'){
      iconName = `coin`;
    }
    return <TabBarIcon name={iconName} size={30} color={tintColor}/>;
  },
  tabBarOptions:{
   activeTintColor: '#3366ff',
   inactiveTintColor: '#c0c0c0',
  },
};

const SettingsStack = createStackNavigator({
  Mais: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Mais',
  tabBarIcon: ({ focused , tintColor}) => {
    let iconName;
    if (Platform.OS === 'ios') {
      iconName = `settings`;
    } else if (Platform.OS === 'android'){
      iconName = `settings`;
    }
    return <TabBarIcon name={iconName} size={30} color={tintColor}/>;
  },
  tabBarOptions:{
   activeTintColor: '#3366ff',
   inactiveTintColor: '#c0c0c0',
  },
};

export default createBottomTabNavigator({
  CarteiraStack,
  EnviarStack,
  ReceberStack,
  PagarStack,
  SettingsStack,
});
