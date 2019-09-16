import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'


export default class Perfil extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center'}}>
                <View style={{ backgroundColor: '#70DB93', width: 500, height: 100 }}></View>
                <View style={{position: 'absolute', marginTop: 50, alignItems: 'center' }}>
                    <Image 
                        style={{ 
                            width: 80, 
                            height: 80, 
                            borderRadius: 45,
                            borderColor: '#70DB93',
                            borderWidth: 5
                        }} 
                        source={require('./imagesTestes/user.png')}/>
                    <Text>Nome do usuário</Text>
                </View>  
            </View>         
        )
    }
}
