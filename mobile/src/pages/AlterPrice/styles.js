import { StyleSheet} from 'react-native';

import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fontWeight from '../../styles/fontsWeight';
import fontsSize from '../../styles/fontsSize';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.transparent,
    position: 'absolute'
  },

  modal: {
    bottom: 0,// faz o modal ficar em baixo
    position: 'absolute',
    height: '40%',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: 'space-around',
    backgroundColor: colors.greyDarker,
  },
})
export const Indicador = styled.View`
  width: 50px;
  height: 5px;
  border-radius: 50px;
  align-self: center;
  margin-top: 5px;
  background-color: ${colors.greyDark};
`;

export const Input = styled.View`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  margin-top: 20px;
  justify-content: center;
  background-color: #636363;
  padding-left: 10px;
  margin-bottom: 20px;
`;

export const InputText = styled.TextInput`
  font-family: ${fontWeight.regular};
  font-size: ${fontsSize.big};
  margin-left: 15px;
  margin-right: 15px;
  color: ${colors.white}
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 25px;
  background-color: ${colors.yellow};
`;

export const ButtonText = styled.Text`
  font-family: ${fontWeight.bold};
  font-size: ${fontsSize.bigg};
  color: ${colors.white};
`;
