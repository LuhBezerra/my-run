import React from 'react';
import { StatusBar } from 'react-native';
import colors from '../../styles/colors';
import { 
  Container,
  ValueContainer,
  ValueTitle,
  ValueText,
  ButtonAlter,
  ButtonAlterText,
  RunContainer,
  RunPanel,
  Output,  
  OutputTitle,
  OutputText,
  ButtonInit,
  ButtonInitText,
} from './styles';

export default function Home(){
    return(
      <Container 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      >
        <StatusBar backgroundColor={colors.greyRegular} barStyle="dark-content" />
        
        <ValueContainer>

          <ValueTitle>Valor por KM</ValueTitle>

          <ValueText>R$ 0,00</ValueText>
          
          <ButtonAlter>
            <ButtonAlterText>Alterar</ButtonAlterText>
          </ButtonAlter>

        </ValueContainer>

        <RunContainer>
          <RunPanel>
            <OutputTitle>Distância percorrida:</OutputTitle>
            <Output>
              <OutputText>0.0 KM</OutputText>
            </Output>

            <OutputTitle>Valor a  ser pago:</OutputTitle>
            <Output>
              <OutputText>R$ 0,00</OutputText>
            </Output>
            <ButtonInit>
              <ButtonInitText>INICIAR CORRIDA</ButtonInitText>
            </ButtonInit>
          </RunPanel>
        </RunContainer>

      </Container>
  );
}

