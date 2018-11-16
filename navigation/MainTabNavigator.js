import React from 'react';
import { Platform } from 'react-native';

import TabBarIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import SettingsScreen from '../screens/SettingsScreen';
import CarteiraScreen from '../screens/CarteiraScreen';
import EnviarScreen from '../screens/EnviarScreen';
import EnviarTokensScreen from '../screens/EnviarTokensScreen';
import TokensEnviadosScreen from '../screens/TokensEnviadosScreen';


const CarteiraStack = createStackNavigator({
  Carteira: CarteiraScreen,
});

CarteiraStack.navigationOptions = {
  tabBarLabel: 'Carteira',
  tabBarIcon: ({tintColor}) => {
    let iconName;
    if (Platform.OS === 'ios') {
      iconName = `wallet`;
      return <SimpleLineIcons name={iconName} size={30} color={tintColor}/>;
    } else if (Platform.OS === 'android'){
      iconName = `wallet`;
      return <TabBarIcon name={iconName} size={24} color={tintColor}/>;
    } 
  }};

const EnviarStack = createStackNavigator({
  Enviar: EnviarScreen,
  EnviarTokens: EnviarTokensScreen,
  TokensEnviados: TokensEnviadosScreen,
});

EnviarStack.navigationOptions = {
  tabBarLabel: 'Enviar',
  tabBarIcon: ({tintColor}) => {
    let iconName;
    if (Platform.OS === 'ios') {
      iconName = `arrow-top-right`;
    } else if (Platform.OS === 'android'){
      iconName = `arrow-top-right`;
    }
    return <TabBarIcon name={iconName} size={24} color={tintColor}/>;
  }};

const ReceberStack = createStackNavigator({
  Receber: SettingsScreen,
});

ReceberStack.navigationOptions = {
  tabBarLabel: 'Receber',
  tabBarIcon: ({tintColor}) => {
    let iconName;
    if (Platform.OS === 'ios') {
      iconName = `arrow-bottom-left`;
    } else if (Platform.OS === 'android'){
      iconName = `arrow-bottom-left`;
    }
    return <TabBarIcon name={iconName} size={24} color={tintColor}/>;
  }};

const PagarStack = createStackNavigator({
  Pagar: SettingsScreen,
});

PagarStack.navigationOptions = {
  tabBarLabel: 'Pagar',
  tabBarIcon: ({tintColor}) => {
    let iconName;
    if (Platform.OS === 'ios') {
      iconName = `coins`;
    } else if (Platform.OS === 'android'){
      iconName = `coin`;
    }
    return <TabBarIcon name={iconName} size={24} color={tintColor}/>;
  }};

const SettingsStack = createStackNavigator({
  Mais: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Mais',
  tabBarIcon: ({tintColor}) => {
    let iconName;
    if (Platform.OS === 'ios') {
      iconName = `settings`;
    } else if (Platform.OS === 'android'){
      iconName = `settings`;
    }
    return <TabBarIcon name={iconName} size={24} color={tintColor}/>;
  }};

export default createMaterialTopTabNavigator({
  CarteiraStack,
  EnviarStack,
  ReceberStack,
  PagarStack,
  SettingsStack,
},{
  initialRouteName: 'CarteiraStack',
    tabBarPosition: 'bottom',
    tabBarOptions:{
        activeTintColor: '#3366ff',
        inactiveTintColor: 'grey',
        style: {
            backgroundColor: '#f2f2f2',
            borderTopWidth: 10,
            borderTopColor: '#f2f2f2'
        },
        showIcon: true,
        indicatorStyle:{
            height: 0
        },
        tabStyle:{
            height: 50,
            alignContent:'stretch',
            
        },
        labelStyle: {
            fontSize: 8,
        
        }
      }
})