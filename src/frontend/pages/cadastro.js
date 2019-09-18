import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { PadraoTitulo } from '../pages/styles/mainStyles'
import { Container } from '../pages/styles/cadastroStyles'
import { Preecher, Titulo } from './styles/addStyles'

export default class pages extends Component {
  render() {
    return(
        <Container>
            <Titulo>Login</Titulo>
                <PadraoTitulo>Email</PadraoTitulo>
                    <Preecher placeholder= {'exemplo@pet.com.br'}/>
                <PadraoTitulo>Senha</PadraoTitulo>
                    <Preecher secureTextEntry={true} placeholder= {'******'}/>
            <Titulo>Informações adicionais</Titulo>
                <PadraoTitulo style={{marginTop: 20}}>Nome</PadraoTitulo>
                    <Preecher placeholder= {'Seu nome'}/>
                <PadraoTitulo>Telefone/Celular/Whatsapp</PadraoTitulo>
                    <Preecher placeholder= {'(85) 98571-9195'} keyboardType= "numeric"/>
                <PadraoTitulo>Cidade</PadraoTitulo>
                    <Preecher placeholder= {'Brasilia-DF'}/>
                <PadraoTitulo>Bairro</PadraoTitulo>
                    <Preecher placeholder= {'Bairro das flores'}/>
                <PadraoTitulo>Rua</PadraoTitulo>
                    <Preecher placeholder= {'Rua Z'}/>
                <PadraoTitulo>Nº</PadraoTitulo>
                    <Preecher placeholder= {'000 A'} keyboardType= "numeric"/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                        style={{
                            backgroundColor: '#70DB93', 
                            margin: 20, 
                            width: '98%',
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
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
            </View>
        </Container>
    );
  }
}
