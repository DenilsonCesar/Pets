import React, { Component } from 'react';

import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { TextMsg } from './styles/chatStyles'

export default class Convesas extends Component {
  render() {
    return(
      <View>
        <ScrollView>
          <View>
            <Text>Nome do fulano</Text>
          </View>
        </ScrollView>
        <View style={{ alignItems: 'center', marginTop: 300}}>
          <View style={{flexDirection: 'row'}}>
            <TextMsg/>
            <TouchableOpacity 
              style={{
                justifyContent: 'center'
              }}>
              <Text><Icon name='send' size={30} color={"#70DB93"}/></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}