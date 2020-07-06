import React, {useState} from 'react';
import { StatusBar, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native';
import SwipeableBottomPanel from '../AlterPrice';
import colors from '../../styles/colors';
import { 
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

import { value } from '../AlterPrice'

const {height: heightOfDeviceScreen} = Dimensions.get('window');

export default function Home(){
  const [modal, setModal] = useState(false);
  const [valuePerKm, setValuePerKm] = useState(Intl.NumberFormat('pt-BR', 
    { style: 'currency', currency: 'BRL' }).format(0))

  const desactiveModal = () => {
    setModal(false),
    setValuePerKm(value)
  }

    return(
      <ScrollView
        showsVerticalScrollIndicator={false}
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
          
          <ButtonAlter onPress={() => setModal(true)}>
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

        <SwipeableBottomPanel
          show={modal}
          close={() => desactiveModal()}/>
      </ScrollView>
  );
}