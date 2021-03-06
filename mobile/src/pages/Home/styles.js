import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fontWeight from '../../styles/fontsWeight';
import fontsSize from '../../styles/fontsSize';

export const ValueContainer = styled.View`
  width: 55%;
  height: 140px;
  border-radius: 10px;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  margin-top: 15px;
  background-color: ${colors.white};
`;

export const ValueTitle = styled.Text`
  font-family: ${fontWeight.semiBold};
  font-size: ${fontsSize.small};
  color: ${colors.darker};
`;

export const ValueText = styled.Text`
  font-family: ${fontWeight.bold};
  font-size: ${fontsSize.bigger};
  color: ${colors.darker};
`;

export const ButtonAlter = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border-bottom-right-radius:10px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.greyDark};
`;

export const ButtonAlterText = styled.Text`
  font-family: ${fontWeight.extraBold};
  font-size: ${fontsSize.big};
  color: ${colors.white};
`;

export const RunContainer = styled.View`
  margin-left: 15px;
  margin-right: 15px;
`;

export const RunPanel = styled.View`
  width: 100%;
  border-radius: 10px;
  align-self: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${colors.white};

`;

export const RunPanelTitle = styled.Text`
  text-align: center;
  font-family: ${fontWeight.black};
  font-size: ${fontsSize.regular};
  color: ${colors.darker};
`;

export const Output = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  align-self: center;
  justify-content: center;
  padding-left: 15px;
  background-color: ${colors.greyRegular};
`;

export const OutputTitle = styled.Text`
  font-family: ${fontWeight.semiBold};
  font-size: ${fontsSize.big};
  margin-top: 25px;
  margin-left: 5px;
  color: ${colors.darker};
`;

export const OutputText = styled.Text`
  font-family: ${fontWeight.bold};
  font-size: ${fontsSize.bigg};
  color: ${colors.dark};

`;

export const ButtonInit = styled.TouchableOpacity`
  width: 92.5%;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 10px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: ${colors.yellow};
`;

export const ButtonInitText = styled.Text`
  font-family: ${fontWeight.black};
  font-size: ${fontsSize.bigge};
  color: ${colors.white};
`;