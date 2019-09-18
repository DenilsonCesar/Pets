import React, { Component, Fragment  } from 'react'
import { TouchableOpacity, Text, View, Picker, ActivityIndicator } from 'react-native'

import { ViewConfigPhoto, Titulo, Preecher } from './styles/addStyles'
import { PadraoTitulo, Photo } from '../pages/styles/mainStyles'
import { Container } from '../pages/styles/cadastroStyles'

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../backend/server/api';

import ImagePicker from 'react-native-image-picker';

import * as yup from 'yup'
import { Formik } from 'formik'

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
    loading: false
  }

  camera = () => {
    ImagePicker.launchCamera({
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
    });
  };

  galeria = () => {
    ImagePicker.launchImageLibrary({
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
    });
  };

  postar = async () => { 
    const data = new FormData();
    const { navigation } = this.props;
      try{
        const { 
            image, _id, tipo, raca, idade, sexo, descricao, nomeDono, 
            telefone, cidade, bairro, rua,num 
        } = this.state;

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

        <Formik
          //onSubmit={values => Alert.alert(JSON.stringify(values))}
          validationSchema={yup.object().shape({
            tipo: yup
              .string()
              .required('Campo Obrigatório*'),
            sexo: yup
              .string()
              .required('Campo Obrigatório*'),
            descricao: yup
              .string()
              .required('Campo Obrigatório*'),
            nomeDono: yup
              .string()
              .required('Campo Obrigatório*'),
            telefone: yup
              .number()
              .required('Campo Obrigatório*'),
            cidade: yup
              .string()
              .required('Campo Obrigatório*'),
            bairro: yup
              .string()
              .required('Campo Obrigatório'),
            rua: yup
              .string()
              .required('Campo Obrigatório'),
            num: yup
              .number()
              .required('Campo Obrigatório'),
          })}
        >
        {({  errors, setFieldTouched, touched }) => (
        <Fragment>
          <Titulo> Descrição do pet </Titulo>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            { 
              state.image == null ? 
              <Photo source={require('../pages/imagesTestes/teste3.jpg')}/>: 
              state.preview && <Photo source={state.preview} />
            }
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <ViewConfigPhoto>
                  <TouchableOpacity 
                    style={{alignItems: 'center', flexDirection: 'column'}}
                      onPress={this.camera}>
                        <Icon name={'local-see'} size={30} color={'#70DB93'}/>
                        <Text style={{color: '#70DB93'}}>Camera</Text>
                  </TouchableOpacity>
                    <View style={{ borderColor: '#70DB93', borderWidth: 1, width: 80, marginTop: 20, marginBottom: 20}}/>
                  <TouchableOpacity 
                    style={{alignItems: 'center', flexDirection: 'column'}}
                      onPress={this.galeria}>
                        <Icon name={'folder'} size={30} color={'#70DB93'}/>
                        <Text style={{color: '#70DB93'}}>Galeria</Text>
                  </TouchableOpacity>
                </ViewConfigPhoto>
              </View>
          </View>
            <PadraoTitulo>Nome</PadraoTitulo>
              <Preecher 
                name="_id"
                onChangeText={(_id) => this.setState({_id})} 
                placeholder= {'Nome do pet'}
              />
            <PadraoTitulo> Tipo do Pet* </PadraoTitulo>
              <Picker
                selectedValue={state.tipo}
                style={{height: 50, width: '100%'}}
                onValueChange={(tipo) => this.setState({tipo})}
                onBlur={() => setFieldTouched('tipo')}
              >
                  <Picker.Item label="Cachorro" value={"Cachorro"} />
                  <Picker.Item label= "Gato" value= {"Gato"} />
                  <Picker.Item label="Outros" value={"Outros"} />
              </Picker>
                {
                  touched.tipo && errors.tipo &&
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.tipo}</Text>
                }
            <PadraoTitulo> Raça </PadraoTitulo>
              <Preecher 
                value={state.raca} 
                onChangeText={(raca) => this.setState({raca})} 
                placeholder= {'ex: Vira-Lata'}
              />
            <PadraoTitulo> Idade </PadraoTitulo>
              <Preecher 
                value={state.idade} 
                onChangeText={(idade) => this.setState({idade})} 
                keyboardType= "numeric"
              />
            <PadraoTitulo> Sexo* </PadraoTitulo>
              <Picker
                selectedValue={state.sexo}
                style={{height: 50, width: '100%'}}
                onValueChange={(sexo) => this.setState({sexo})}
                onBlur={() => setFieldTouched('sexo')}
               >
                <Picker.Item label="Macho" value={"Macho"} />
                <Picker.Item label= "Fêmea" value= {"Fêmea"} />
              </Picker>
              {
                touched.sexo && errors.sexo &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.sexo}</Text>
              }
            <PadraoTitulo> Descrição* </PadraoTitulo>
              <Preecher 
                value={state.descricao} 
                onChangeText={(descricao) => this.setState({descricao})}
                onBlur={() => setFieldTouched('descricao')}
                maxLength = {50} 
                placeholder= {'ex: É um cachorro docio branco com pintas brancas e castrado'}
              />
              {
                touched.descricao && errors.descricao &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.descricao}</Text>
              }
            
            <Titulo>Descrição do atual dono</Titulo>
            
            <PadraoTitulo> Nome do Dono* </PadraoTitulo>
              <Preecher 
                value={state.nomeDono} 
                onChangeText={(nomeDono) => this.setState({nomeDono})}
                onBlur={() => setFieldTouched('nomeDono')}
                placeholder= {'Seu nome'}
              />
              {
                touched.nomeDono && errors.nomeDono &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.nomeDono}</Text>
              }
            <PadraoTitulo>Telefone/Celular/Whatsapp*</PadraoTitulo>
              <Preecher 
                value={state.telefone} 
                onChangeText={(telefone) => this.setState({telefone})}
                onBlur={() => setFieldTouched('telefone')}
                placeholder= {'ex: (85) 90000-0000'} 
                keyboardType= "numeric"
              />
              {
                touched.telefone && errors.telefone &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.telefone}</Text>
              }
            <PadraoTitulo>Cidade*</PadraoTitulo>
              <Preecher 
                value={state.cidade} 
                onChangeText={(cidade) => this.setState({cidade})}
                onBlur={() => setFieldTouched('cidade')}
                placeholder= {'ex: Brasilia-DF'}
              />
              {
                touched.cidade && errors.cidade &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.cidade}</Text>
              }
            <PadraoTitulo>Bairro*</PadraoTitulo>
              <Preecher 
                value={state.bairro} 
                onChangeText={(bairro) => this.setState({bairro})}
                onBlur={() => setFieldTouched('bairro')}
                placeholder= {'ex: Bairro das flores'}
              />
              {
                touched.bairro && errors.bairro &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.bairro}</Text>
              }
            <PadraoTitulo>Rua*</PadraoTitulo>
              <Preecher 
                value={state.rua} 
                onChangeText={(rua) => this.setState({rua})}
                onBlur={() => setFieldTouched('rua')}
                placeholder= {'ex: Rua Z'}
              />
              {
                touched.rua && errors.rua &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.rua}</Text>
              }
            <PadraoTitulo>Nº*</PadraoTitulo>
              <Preecher 
                value={state.num} 
                onChangeText={(num) => this.setState({num})}
                onBlur={() => setFieldTouched('num')}
                placeholder= {'ex: 000'} 
                keyboardType= "numeric"
              />
              {
                touched.num && errors.num &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.num}</Text>
              }
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
            </Fragment>
            )}
        </Formik>
      </Container>
    )
  }
}
