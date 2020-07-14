import React, {useState} from 'react';
import { StatusBar, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native';
import SwipeableBottomPanel from '../AlterPrice';
import { valueWithoutMask } from '../AlterPrice';
import ActiveRunPanel from '../Run'
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

const {height: heightOfDeviceScreen} = Dimensions.get('window');

export default function Home(){
  const [modalAlterPrice, setModalAlterPrice] = useState(false);
  const [modalRun, setModalRun] = useState(false);

  const [valuePerKm, setValuePerKm] = useState("R$0,00")

  const desactiveModalAlterPrice = () => {
    setModalAlterPrice(false),
    setValuePerKm(Intl.NumberFormat('pt-BR', 
    { style: 'currency', currency: 'BRL' }).format(valueWithoutMask))
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
          
          <ButtonAlter onPress={() => setModalAlterPrice(true)}>
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

            <ButtonInit onPress={() => setModalRun(true)}>
              <ButtonInitText>INICIAR CORRIDA</ButtonInitText>
            </ButtonInit>
          </RunPanel>
        </RunContainer>

        <SwipeableBottomPanel
          show={modalAlterPrice}
          close={() => desactiveModalAlterPrice()}/>

        <ActiveRunPanel
          show={modalRun}
          close={() => setModalRun(false)}
        />
      </ScrollView>
  );
}