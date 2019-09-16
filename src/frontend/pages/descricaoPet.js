import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'

import { Photo, Nome, PadraoTitulo, PadraoDescricao, Sexo, Descricao } from '../pages/styles/mainStyles'
import { ContainerImage} from '../pages/styles/descricaoPet'
import { Container, Imgs, Titulo, Cad, Preecher } from './styles/addStyles'

import api from '../../backend/server/api';

export default class descricaoPet extends Component {
    render() {

        const { baseURL } = api.defaults;

        const img = this.props.navigation.getParam('img');
        const nome = this.props.navigation.getParam('nome');
        const idade = this.props.navigation.getParam('idade');
        const desc = this.props.navigation.getParam('desc');
        const sexo = this.props.navigation.getParam('sexo');
        const tipo = this.props.navigation.getParam('tipo');
        const cidade = this.props.navigation.getParam('cidade');
        const bairro = this.props.navigation.getParam('bairro');
        const rua = this.props.navigation.getParam('rua');
        const num = this.props.navigation.getParam('num');
        const tel = this.props.navigation.getParam('tel');                       
                                                        
        return (
            <ScrollView>
                <ContainerImage/> 
                    <View style={{position: 'absolute', flexDirection: 'row', marginTop: 15, marginLeft: 20}}>
                        <Photo source={{uri: `${baseURL}../../file/${img}`}}/>
                        <Text style={{fontSize: 18, color: "#fff", fontWeight: 'bold', marginTop: 145, paddingRight: 20}}>{nome}</Text>
                    </View>
            <Container>
                    <PadraoTitulo>Idade</PadraoTitulo>
                        <PadraoDescricao>{idade}</PadraoDescricao>
                    <PadraoTitulo>Descricao</PadraoTitulo>
                        <PadraoDescricao>{desc}</PadraoDescricao>
                    <PadraoTitulo>Sexo</PadraoTitulo>
                        <PadraoDescricao>{sexo}</PadraoDescricao>
                    <PadraoTitulo>Tipo</PadraoTitulo>
                        <PadraoDescricao>{tipo}</PadraoDescricao>
                    <PadraoTitulo>Cidade</PadraoTitulo>
                        <PadraoDescricao>{cidade}</PadraoDescricao>
                    <PadraoTitulo>Bairro</PadraoTitulo>
                        <PadraoDescricao>{bairro}</PadraoDescricao>
                    <PadraoTitulo>Rua</PadraoTitulo>
                        <PadraoDescricao>{rua}</PadraoDescricao>
                    <PadraoTitulo>Nº</PadraoTitulo>
                        <PadraoDescricao>{num}</PadraoDescricao>
                    <PadraoTitulo>Telefone/Celular/Whapsapp</PadraoTitulo>
                        <PadraoDescricao>{tel}</PadraoDescricao>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={()=> {this.props.navigation.navigate('Cadastro')}}
                            style={{
                                backgroundColor: '#70DB93', 
                                margin: 20, 
                                width: '98%',
                                height: 50, 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10
                            }
                        }>
                        <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 25,
                            color: '#fff',
                        }}>
                            Adotar
                        </Text>
                    </TouchableOpacity>
                </View>
            </Container>
        </ScrollView>
        )
    }
}
