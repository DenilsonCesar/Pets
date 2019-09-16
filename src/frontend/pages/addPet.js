import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Picker, Modal } from 'react-native'

import { Imgs, Titulo, Preecher } from './styles/addStyles'
import { PadraoTitulo, Photo } from '../pages/styles/mainStyles'
import { Container } from '../pages/styles/cadastroStyles'

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../backend/server/api';

import ImagePicker from 'react-native-image-picker';

export default class addPet extends Component {
    
        state = {
            preview: null,
            image: null,
            _id: '',
            tipo: 'Cachorro',
            raca: '', 
            idade: '',
            sexo: 'Macho',
            descricao: '', 
            nomeDono: '',
            telefone: '', 
            cidade: '',
            bairro: '',
            rua: '', 
            num: '',
            modalVisible: false,
        }

        camera = () => {
            ImagePicker.launchCamera(
              {
                title: 'Selecionar Imagem',
                rotation: 360,
              },
              upload => {
                if (upload.error) {
                  console.log('Error');
                } else if (upload.didCancel) {
                  console.log('User Cancelled');
                } else {
                  const preview = {
                    uri: `data:image/jpeg;base64,${upload.data}`,
                  };
        
                  let prefix;
                  let ext;
        
                  if (upload.fileName) {
                    [prefix, ext] = upload.fileName.split('.');
                    ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
                  } else {
                    prefix = new Date().getTime();
                    ext = 'jpg';
                  }
        
                  const image = {
                    uri: upload.uri,
                    type: upload.type,
                    name: `${prefix}.${ext}`,
                  };
                  this.setState({ preview, image });
                }
              }
            );
          };

          galeria = () => {
            ImagePicker.launchImageLibrary(
              {
                title: 'Selecionar Imagem',
                rotation: 360,
              },
              upload => {
                if (upload.error) {
                  console.log('Error');
                } else if (upload.didCancel) {
                  console.log('User Cancelled');
                } else {
                  const preview = {
                    uri: `data:image/jpeg;base64,${upload.data}`,
                  };
        
                  let prefix;
                  let ext;
        
                  if (upload.fileName) {
                    [prefix, ext] = upload.fileName.split('.');
                    ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
                  } else {
                    prefix = new Date().getTime();
                    ext = 'jpg';
                  }
        
                  const image = {
                    uri: upload.uri,
                    type: upload.type,
                    name: `${prefix}.${ext}`,
                  };
                  this.setState({ preview, image });
                }
              }
            );
          };

    postar = async () => { 
        const data = new FormData();
        try{
        const { 
            image, _id, tipo, raca, idade, sexo, descricao, nomeDono, 
            telefone, cidade, bairro, rua,num 
        } = this.state;
        const { navigation } = this.props;

        data.append('image', image);
        data.append('_id', _id);
        data.append('tipo', tipo);
        data.append('raca', raca);
        data.append('idade', idade);
        data.append('sexo', sexo);
        data.append('descricao', descricao);
        data.append('nomeDono', nomeDono);
        data.append('telefone', telefone);
        data.append('cidade', cidade);
        data.append('bairro', bairro);
        data.append('rua', rua);
        data.append('num', num);

        this.vazio();

        await api.post('post', data);

        this.setState({
            preview: null,
            image: null,
            _id: '',
            tipo: 'Cachorro',
            raca: '', 
            idade: '',
            sexo: 'Macho', 
            descricao: '', 
            nomeDono: '',
            telefone: '', 
            cidade: '',
            bairro: '',
            rua: '', 
            num: ''
        });
      
      navigation.navigate('Home');
      }catch(err){
          console.log(this.postar)
          console.log(err)
          console.log('deu erro')
      }
    }
 
    render() {

        const { state } = this;

        return (
            <Container>
                <Titulo> Descrição do pet </Titulo>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                { 
                    state.image == null ? 
                    <Photo source={require('../pages/imagesTestes/teste3.jpg')}/>: 
                    state.preview && <Photo source={state.preview} />
                }
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}>
                            <View 
                                style={{ 
                                    borderColor: '#70DB93', 
                                    borderWidth: 1, 
                                    borderRadius: 20, 
                                    width: 80, 
                                    height: 190, 
                                    marginLeft: 10,
                                    justifyContent: "center",
                                    alignItems: 'center',
                                    marginTop: 17
                                }}>
                                <TouchableOpacity 
                                    style={{alignItems: 'center', flexDirection: 'column'}}
                                    onPress={this.camera}>
                                    <Icon 
                                        name={'local-see'} size={30} color={'#70DB93'}/>
                                        <Text style={{color: '#70DB93'}}>Camera</Text>
                                </TouchableOpacity>
                                    <View style={{ borderColor: '#70DB93', borderWidth: 1, width: 80, marginTop: 20, marginBottom: 20}}/>
                                <TouchableOpacity 
                                    style={{alignItems: 'center', flexDirection: 'column'}}
                                    onPress={this.galeria}>
                                    <Icon 
                                        name={'folder'} size={30} color={'#70DB93'}/>
                                        <Text style={{color: '#70DB93'}}>Galeria</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
                <PadraoTitulo>Nome</PadraoTitulo>
                    <Preecher value={state._id} 
                      onChangeText={(_id) => this.setState({_id})} 
                      placeholder= {'Nome do pet'}>
                    </Preecher>
                <PadraoTitulo> Tipo do Pet* </PadraoTitulo>
                <Picker
                    selectedValue={state.tipo}
                    style={{height: 50, width: '100%'}}
                    onValueChange={(itemValue) =>
                        this.setState({tipo: itemValue})
                    }>
                    <Picker.Item label="Cachorro" value={"Cachorro"} />
                    <Picker.Item label= "Gato" value= {"Gato"} />
                    <Picker.Item label="Outros" value={"Outros"} />
                </Picker>
                <PadraoTitulo> Raça </PadraoTitulo>
                    <Preecher value={state.raca} onChangeText={(raca) => this.setState({raca})} placeholder= {'ex: Vira-Lata'}></Preecher>
                <PadraoTitulo> Idade </PadraoTitulo>
                    <Preecher value={state.idade} onChangeText={(idade) => this.setState({idade})} keyboardType= "numeric"></Preecher>
                <PadraoTitulo> Sexo* </PadraoTitulo>
                <Picker
                    selectedValue={state.sexo}
                    style={{height: 50, width: '100%'}}
                    onValueChange={(itemValue) =>
                        this.setState({sexo: itemValue})
                    }>
                    <Picker.Item label="Macho" value={"Macho"} />
                    <Picker.Item label= "Fêmea" value= {"Fêmea"} />
                </Picker>
                <PadraoTitulo> Descrição* </PadraoTitulo>
                    <Preecher value={state.descricao} onChangeText={(descricao) => this.setState({descricao})} maxLength = {50} placeholder= {'ex: É um cachorro docio branco com pintas brancas e castrado'}></Preecher>
                <Titulo>Descrição do atual dono</Titulo>
                <PadraoTitulo> Nome do Dono* </PadraoTitulo>
                    <Preecher value={state.nomeDono} onChangeText={(nomeDono) => this.setState({nomeDono})} placeholder= {'Seu nome'}></Preecher>
                <PadraoTitulo>Telefone/Celular/Whatsapp*</PadraoTitulo>
                    <Preecher value={state.telefone} onChangeText={(telefone) => this.setState({telefone})} placeholder= {'ex: (85) 90000-0000'} keyboardType= "numeric"/>
                <PadraoTitulo>Cidade*</PadraoTitulo>
                    <Preecher value={state.cidade} onChangeText={(cidade) => this.setState({cidade})} placeholder= {'ex: Brasilia-DF'}/>
                <PadraoTitulo>Bairro*</PadraoTitulo>
                    <Preecher value={state.bairro} onChangeText={(bairro) => this.setState({bairro})} placeholder= {'ex: Bairro das flores'}/>
                <PadraoTitulo>Rua*</PadraoTitulo>
                    <Preecher value={state.rua} onChangeText={(rua) => this.setState({rua})} placeholder= {'ex: Rua Z'}/>
                <PadraoTitulo>Nº*</PadraoTitulo>
                    <Preecher value={state.num} onChangeText={(num) => this.setState({num})} placeholder= {'ex: 000'} keyboardType= "numeric"/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={this.postar}
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
                            Compartilhar
                        </Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}
