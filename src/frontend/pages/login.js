import React, { Component } from 'react';

import { Text, View,TextInput, Image, TouchableOpacity } from 'react-native';

import {Container, TextCad, Titulo } from './styles/loginStyle'

export default class pages extends Component {
  render() {
    return(
        <Container>
            <View style={{ alignItems: 'center' }}>
                <Image 
                    style={{height: 140, width: 160}}
                    source={require('./imagesTestes/login.jpg')}/>
            </View>
            <Titulo>Login</Titulo>
            <View style={{ alignItems: 'center' }}>
                <TextCad/>
            </View>
            <Titulo>Senha</Titulo>
            <View style={{ alignItems: 'center' }}>
                <TextCad/>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                        style={{
                            backgroundColor: '#70DB93', 
                            margin: 20, 
                            width: '95%',
                            height: 50, 
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}>
                        <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 25,
                            color: '#fff',
                        }}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Ainda não tem uma conta? Cadastre-se</Text>
                    </TouchableOpacity>
            </View>
        </Container>
    )
  }
}
