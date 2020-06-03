import React from 'react';
import { 
  Container,
  ValueContainer,
  ValueTitle,
  ValueText,
  ButtonAlter,
  ButtonAlterText,
  RunContainer,
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
      <ValueContainer>

        <ValueTitle>Valor por KM</ValueTitle>

        <ValueText>R$ 0,00</ValueText>
        
        <ButtonAlter>
          <ButtonAlterText>Alterar</ButtonAlterText>
        </ButtonAlter>

      </ValueContainer>

      <RunContainer>

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

      
      </RunContainer>
    </Container>
  );
}

