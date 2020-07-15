import { StyleSheet} from 'react-native';

import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fontWeight from '../../styles/fontsWeight';
import fontsSize from '../../styles/fontsSize';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.transparentDarker,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },

  modal: {
    height: '50%',
    width: '85%',
    borderRadius: 30,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 25,
    paddingBottom: 25,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.green,
  },
})


export const TextH1 = styled.Text`
  font-family: ${fontWeight.extraBold};
  font-size: ${fontsSize.biggg};
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.darker};
`

export const ContainerText = styled.View`
  margin-top: 20px;
  align-items: center;
`

export const TextH2 = styled.Text`
  font-family: ${fontWeight.black};
  font-size: 50px;
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.darker};
`

export const Button = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${colors.white};
  position: absolute;
  bottom: 8.5%;
`