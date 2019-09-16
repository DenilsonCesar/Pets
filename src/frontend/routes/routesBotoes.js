import React from 'react'
import { Text } from 'react-native'

import { createStackNavigator, createAppContainer } from "react-navigation";

import Main from '../pages/main';
import Descricao from '../pages/descricaoPet';
import Cadastro from '../pages/cadastro';
import NovoPet from '../pages/addPet';
import Mapa from '../pages/maps';
import Categorias from '../pages/categoria';
import Camera from '../pages/camera';
import Galeria from '../pages/galeria';

import { Container, Titulo} from '../pages/styles/descricaoPet'

const AppNavigator  = createStackNavigator({
    Home: {screen: Main,
      navigationOptions: {
        header: null,
    }},
    Details: {screen: Descricao,
      navigationOptions: {
        headerRight: (
          <Titulo style={{paddingRight: 30}}>Por favor, me adota</Titulo>
        ),
        headerTintColor: '#fff' ,
        headerStyle: {
          backgroundColor: '#70DB93',
        }
      }},
      Cadastro: {screen: Cadastro,
        navigationOptions: {
          headerRight: (
            <Text 
              style={{
                paddingRight: 30, 
                fontSize: 25,
                fontWeight: 'bold',
                color: '#fff'
              }}
              >Cadastro</Text>
          ),
          headerTintColor: '#fff' ,
          headerStyle: {
            backgroundColor: '#70DB93',
          }
        }
      },
      NovoPet: {screen: NovoPet,
        navigationOptions: {
          headerRight: (
            <Text 
              style={{
                paddingRight: 30, 
                fontSize: 16,
                fontWeight: 'bold',
                color: '#fff'
              }}
              >Adicione um novo pet</Text>
          ),
          headerTintColor: '#fff' ,
          headerStyle: {
            backgroundColor: '#70DB93',
          }
        }
      },
      Mapa: {screen: Mapa},
      Categorias: {screen: Categorias,
        navigationOptions: {
          headerRight: (
            <Text 
              style={{
                paddingRight: 30, 
                fontSize: 25,
                fontWeight: 'bold',
                color: '#fff'
              }}
              >Categorias</Text>
          ),
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#70DB93'
          }
        }
      },
      Camera: {screen: Camera,
        navigationOptions: {
          header: null
        }},
      Galeria: {screen: Galeria,
        navigationOptions: {
          header: null
      }},
  }
);
  
  export default AppNavigator;

