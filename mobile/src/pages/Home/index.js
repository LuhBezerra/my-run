import React, {useState} from 'react';
import { StatusBar, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native';
import SwipeableBottomPanel from '../AlterPrice';
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
  styles,
} from './styles';

const {height: heightOfDeviceScreen} = Dimensions.get('window');

export default function Home(){
  const [modal, setModal] = useState(false);
  const [valuePerKm, setValuePerKm] = useState(Intl.NumberFormat('pt-BR', 
    { style: 'currency', currency: 'BRL' }).format(0))

  const activeModal = () => {
    setModal(true)
  }

    return(
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1, 
          justifyContent: "center", 
          height: heightOfDeviceScreen
        }}
        >
        <StatusBar backgroundColor={colors.greyRegular} barStyle="dark-content" />
        
        <ValueContainer>

          <ValueTitle>Valor por KM</ValueTitle>

          <ValueText>{valuePerKm}</ValueText>
          
          <ButtonAlter onPress={() => activeModal()}>
            <ButtonAlterText>Alterar</ButtonAlterText>
          </ButtonAlter>

        </ValueContainer>

        <KeyboardAvoidingView behavior="padding">
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
        </KeyboardAvoidingView>

        <SwipeableBottomPanel
          show={modal}
          close={() => setModal(false)}/>
      </ScrollView>
  );
}