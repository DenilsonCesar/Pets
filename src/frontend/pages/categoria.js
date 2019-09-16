import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import { Container, ViewBotao, TextBotao } from './styles/categoriasStyles'

export default class categoria extends Component {
    render() {
        return (
            <Container>
                <TouchableOpacity>
                    <ViewBotao>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TextBotao>Cachorro</TextBotao>
                            <Image 
                                style={{width: 50, height: 50, marginLeft: 160}}
                                source={require('./imagesTestes/cachorro.png')}/>
                        </View>
                    </ViewBotao>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ViewBotao>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TextBotao>Gato</TextBotao>
                            <Image 
                                style={{width: 50, height: 50, marginLeft: 205}}
                                source={require('./imagesTestes/gato.jpg')}/>
                        </View>
                    </ViewBotao>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ViewBotao>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TextBotao>Macho</TextBotao>
                            <Image 
                                style={{width: 45, height: 45, marginLeft: 185}}
                                source={require('./imagesTestes/macho.jpg')}/>
                        </View>
                    </ViewBotao>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ViewBotao>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TextBotao>Fêmea</TextBotao>
                            <Image 
                                style={{width: 50, height: 50, marginLeft: 185}}
                                source={require('./imagesTestes/femea.jpg')}/>
                        </View>
                    </ViewBotao>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ViewBotao>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TextBotao>Outros</TextBotao>
                            <Image 
                                style={{width: 50, height: 50, marginLeft: 180}}
                                source={require('./imagesTestes/outros.png')}/>
                        </View>
                    </ViewBotao>   
                </TouchableOpacity>     
            </Container>
        )
    }
}
