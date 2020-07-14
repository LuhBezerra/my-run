import { StyleSheet} from 'react-native';

import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fontWeight from '../../styles/fontsWeight';
import fontsSize from '../../styles/fontsSize';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.transparentDark,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },

  modal: {
    height: '50%',
    width: '85%',
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-around',
    backgroundColor: colors.greyDarker,
  },
})

export const OutputContainer = styled.View`
  
`

export const Output = styled.View`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: #F5F5F5;
  padding-left: 10px;
  justify-content: center;
`;

export const OutputTitle = styled.Text`
  font-family: ${fontWeight.semiBold};
  font-size: ${fontsSize.big};
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.white}
`;

export const OutputText = styled.Text`
  font-family: ${fontWeight.bold};
  font-size: 25px;
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.darker}
`;

export const Button = styled.TouchableOpacity`
  width: 85%;
  height: 80px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${colors.red};
`;

export const ButtonText = styled.Text`
  font-family: ${fontWeight.black};
  font-size: ${fontsSize.bigg};
  color: ${colors.white};
`;
