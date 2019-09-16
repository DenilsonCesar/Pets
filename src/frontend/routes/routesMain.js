import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Main from './routesBotoes';
import Maps from '../pages/maps'

export default createMaterialTopTabNavigator({
    Feed: { screen: Main, navigationOptions:{
        tabBarOptions: {
            style: {
              backgroundColor: '#70DB93',
            },
            indicatorStyle: {
              backgroundColor: '#fff'
          }
          }
    }}, 
    Mapa: { screen: Maps, navigationOptions:{
        tabBarOptions: {
            style: {
              backgroundColor: '#70DB93',
            },
            indicatorStyle: {
                backgroundColor: '#fff'
            }
          }
    }}, 
    
})