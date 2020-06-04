import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fontWeight from '../../styles/fontsWeight';
import fontsSize from '../../styles/fontsSize';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${colors.transparent};
  position: absolute;
`;

export const Panel = styled.View`
  bottom: 0; /*envia o painel pra baixo*/
  position: absolute;
  height: 40%;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-around;
  background-color: ${colors.greyDarker};
`;

export const Indicador = styled.View`
  width: 50px;
  height: 5px;
  border-radius: 50px;
  align-self: center;
  margin-top: 5px;
  background-color: ${colors.greyDark};
`;

export const Output = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-top: 20px;
  justify-content: center;
  background-color: #636363;
`;

export const OutputText = styled.TextInput`
  font-family: ${fontWeight.regular};
  font-size: ${fontsSize.regular};
  margin-left: 15px;
  margin-right: 15px;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
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
