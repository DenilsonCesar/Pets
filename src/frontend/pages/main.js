import React, { Component } from 'react'
import { Text, View, StatusBar, TouchableOpacity, FlatList, RefreshControl } from 'react-native'

import { 
    Photo, 
    PadraoTitulo, 
    PadraoDescricao,
    Nome,
    NomeTitulo,
    BotãoMais,
    Descricao, 
    Container, 
    Pesquisar, 
    Titulo, 
    ViewTitulo,
    ContainerSecundario,
    DivBotao,
    BordaBotao
} from '../pages/styles/mainStyles';

import api from '../../backend/server/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import io from 'socket.io-client';

export default class Main extends Component {
    constructor(props){
        super(props);
            this.state = {
            feed: [],
            refreshing: false,
            pesquisar: '',
            _id: null
          };
    }
    
    registerToSocket = () => {
        const socket = io(api.defaults.baseURL);
    
        const { state } = this;
    
        socket.on('post', newPost => {
          this.setState({ feed: [newPost, ...state.feed] });
        });
    }

    componentDidMount() {
        loadRequest = async () => {
            const response = await api.get('post');
            const pet = response.data
            this.setState({ feed: pet });
        }
        loadRequest();
        this.registerToSocket();
    };

    onRefreshHandler = () => {
        // reset pageNo to 1
        this.setState({ refreshing: true });
        setTimeout(() => {
          this.loadRequest();
          this.setState({ refreshing: false });
        }, 300);
      };

    searchButton = async () => {
        const response = await api.get(this.state._id);
        const pet = response.data;
        this.setState({ feed: pet });    
    } 
    
    render(){
        const { baseURL } = api.defaults;

    return (
        <Container>
        <View>
            <View>
                <StatusBar barStyle={"light-content"} backgroundColor={'#70DB93'}/>
                    <View style={{ alignItems: 'center'}}> 
                        <ViewTitulo source={require('./styles/cabecalho.jpg')}/>
                            <View style={{position: 'absolute'}}>
                                <Titulo>Feed</Titulo>
                                <Pesquisar
                                    autoCorrect={false}
                                    onSubmitEditing={ this.searchButton }
                                    value={this.state._id}
                                    onChangeText={ _id => this.setState({_id})} 
                                placeholder={'Buscar'}/>{console.log(this.searchButton)}
                                <Icon style={{marginTop: 80, position: 'absolute', paddingLeft: 10}} name='search' size={28} color={'#B5AAAA'}/>
                            </View>
                    </View>
                        <View style={{ alignItems: 'center' }}>
                            <BordaBotao>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('NovoPet')}>
                                    <View style={{ marginRight: 5 }}>
                                        <Text style={{ color: '#70DB93', justifyContent: 'flex-start', fontSize: 15,  marginLeft: 10 }}>
                                            Novo Pet
                                        </Text>
                                    </View >
                                </TouchableOpacity>
                                    <DivBotao/>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Mapa')}>
                                    <View style={{ marginRight: 5 }}>
                                        <Text style={{ color: '#70DB93', justifyContent: 'center', fontSize: 15, marginLeft: 20, marginRight: 15 }}>
                                            Mapa
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                    <DivBotao/>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Categorias')}>
                                    <View>
                                        <Text style={{ color: '#70DB93', justifyContent: 'flex-end', fontSize: 15 }}>
                                            Categorias
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </BordaBotao>    
                        </View>
                </View>
            </View>
            <View>         
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefreshHandler}
                        />
                    }
                    data={this.state.feed}
                    keyExtractor={post => post._id}
                    renderItem={({ item }) => (
                    <View>
                        <View>
                            <ContainerSecundario>
                                <View style={{flexDirection: 'row'}}>
                                
                                        <Photo
                                            source={{ uri: `${baseURL}../../file/${item.image}` }}
                                        />
              
                                        <View style={{flexDirection: 'column'}}>
                                            <NomeTitulo>Nome</NomeTitulo>
                                                <Nome>{item._id}</Nome>
                                        <View style={{flexDirection: 'column'}}>
                                            <PadraoTitulo>Sexo</PadraoTitulo>
                                                <PadraoDescricao>{item.sexo}</PadraoDescricao>
                                        <View style={{flexDirection: 'column'}}>
                                            <TouchableOpacity 
                                                style={{backgroundColor: '#70DB93', height: 43, width: 116, borderRadius: 10, marginTop: 35}}
                                                onPress={()=> this.props.navigation.navigate('Details' , 
                                                    { 
                                                        img: item.image, 
                                                        nome: item._id,
                                                        idade: item.idade, 
                                                        desc: item.descricao, 
                                                        sexo: item.sexo,
                                                        tipo: item.tipo,
                                                        cidade: item.cidade,
                                                        bairro: item.bairro,
                                                        rua: item.rua,
                                                        num: item.num,
                                                        tel: item.telefone
                                                    })}>
                                                <BotãoMais>Mais</BotãoMais>
                                            </TouchableOpacity>
                                        </View>
                                        </View>
                                        </View>
                                </View>
                                    <PadraoTitulo>Descrição</PadraoTitulo>
                                        <Descricao>{item.descricao}</Descricao>
                                        <Text style={{fontSize: 15}}>
                                       
                                        {item.createdAt}
           
                                        </Text>
                            </ContainerSecundario>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <View style={{borderBottomWidth: 1, width: 380, backgroundColor: '#E6E5E5'}}></View>
                        </View>
                    </View>
                    )
                }/>
            </View>
        </Container>
    )}
}   


