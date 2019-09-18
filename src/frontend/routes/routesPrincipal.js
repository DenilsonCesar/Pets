import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Main from './routesBotoes'
import Chat from '../pages/chat'
import Perfil from '../pages/Perfil'

import Icon from 'react-native-vector-icons/MaterialIcons';

const TabNavigator = createBottomTabNavigator({
    Adoção: { screen: Main,
        navigationOptions: {
        tabBarLabel: 'Adoção',
          tabBarIcon:({tintColor}) => (
            <Icon name='pets' size={28} color={tintColor}/>
          )
        }
    },
    Perfil: { screen: Perfil, 
        navigationOptions: {
        tabBarLabel: 'Perfil',
          tabBarIcon:({tintColor}) => (
            <Icon name='person' size={28} color={tintColor}/>
          )
        }
    },
    Chat: { screen: Chat, 
      navigationOptions: {
          tabBarLabel: 'Chat',
            tabBarIcon:({tintColor}) => (
              <Icon name='question-answer' size={28} color={tintColor}/>
            )
          }
  }
},{
    initialRouteName: 'Adoção',
    tabBarOptions: {
        activeTintColor: '#70DB93',
        inactiveTintColor: 'gray',
        tabStyle:{
          backgroundColor: '#fff'

        },
    },
    
}
);

export default createAppContainer(TabNavigator)