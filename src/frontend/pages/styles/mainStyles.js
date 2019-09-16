import styled from 'styled-components/native';

/*export const Container = styled(LinearGradient).attrs({
        colors:['#4c669f', '#3b5998', '#192f6a'],
        start:{x: 0, y: 0} ,
        end:{x: 1, y: 1},
})`
    flex: 1;
`;*/

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const ContainerSecundario = styled.View`
    margin-top: 10;
    padding-bottom: 5;
    padding-left: 20;
    padding-right: 20;
    border-radius: 30; 
`;

export const Photo = styled.Image`
  border-radius: 20;
  width: 213;
  height: 213;
  margin-bottom: 12;
  margin-top: 12;
  margin-left: 3;
  margin-right: 15;
`;

export const NomeTitulo = styled.Text`
  font-size: 11;
  color: #000;
  font-weight: bold;
  margin-top: 15;
`;

export const Nome = styled.Text`
  font-size: 16;
  color: #70DB93;
  font-weight: bold;
`;

export const PadraoTitulo = styled.Text`
  font-size: 11;
  color: #000;
  font-weight: bold;
  margin-top: 5;
`;

export const PadraoDescricao = styled.Text`
  font-size: 16;
  color: #70DB93;
  font-weight: bold;
`;

export const Descricao = styled.Text`
  font-size: 16;
  margin-right: 10;
  color: #70DB93;
  padding-bottom: 15;
  font-weight: bold;
`;

export const BotãoMais = styled.Text`
  font-size: 20;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-family: sans-serif;
  padding-top: 5;
`;

export const Titulo = styled.Text`
  font-size: 20;
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-family: sans-serif;
  margin-top: 20;
  margin-bottom: 20;
`;

export const ViewTitulo = styled.Image`
  height: 200;
  width: 420;
  margin-bottom: 15;
`;

export const Pesquisar = styled.TextInput`
  font-size: 18;
  height: 50;
  width: 340;
  border-radius: 10;
  padding-left: 40;
  background-color: #fff;
  color: #70DB93;
`;

export const DivBotao = styled.View`
  border-color: #70DB93;
  border-width: 1;
  height: 50;
  margin-left: 10;
  margin-right: 10;
`;

export const BordaBotao = styled.View`
  border-color: #70DB93;
  border-radius: 10;
  border-width: 1;
  flex-direction: row;
  height: 50;
  width: 340;
  align-items: center;
  justify-content: center;
`;


                            
