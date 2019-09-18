import React, { Component } from 'react';

import { View, Image, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class pages extends Component {
    constructor(props){
        super(props);
        this.state = {
            avatarSource: null,
            loading: true
        }
    }

    componentDidMount(){
      this.show()
    }

  render() {
      let img = this.state.avatarSource == null ? null:
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={this.state.avatarSource}
          style={{height: '90%', width: '90%', borderRadius: 20}}/>
      </View>
    return(
        <View>
            {img}
            {this.state.avatarSource == null ? 
            <View 
              style={{
                alignItems: 'center',
                marginTop: '50%'
              }}>
              <Text 
                style={{
                  fontSize: 30,
                  color: '#70DB93',
                  fontWeight: 'bold'
                }}>
                  SEM FOTO :(
              </Text>
                <TouchableOpacity 
                  style={{alignItems: 'center'}}
                  onPress={()=> {this.props.navigation.goBack(this.show())}}>
                    <Icon 
                      name={'local-see'} size={50} color={'#70DB93'}/>
                      <Text style={{color: '#70DB93'}}>Adicionar Foto</Text>
                </TouchableOpacity>
              </View>:
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity  
                  style={{
                    backgroundColor: '#70DB93', 
                    alignItems: 'center', 
                    alignItems: 'center',
                    height: 50,
                    width: '90%',
                    borderRadius: 15
                  }}
                  onPress={()=> {this.props.navigation.navigate('NovoPet', {petImg: this.state.avatarSource})}}>
                    <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Confirmar</Text>
                </TouchableOpacity>
              </View>
            }
        </View>
    )
  }

  show(){
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        this.setState({
          avatarSource: source,
        });
      }
    });
}
}

