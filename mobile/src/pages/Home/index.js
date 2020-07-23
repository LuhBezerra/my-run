import React, {useState} from 'react';
import { StatusBar, ScrollView, KeyboardAvoidingView, Dimensions, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import SwipeableBottomPanel from '../AlterPrice';
import { valueWithoutMask } from '../AlterPrice';
import ActiveRunPanel from '../Run'
import RunFinished from '../RunFinished'
import { LocationUser } from '../../services/currentLocation'

import colors from '../../styles/colors';
import { 
  ValueContainer,
  ValueTitle,
  ValueText,
  ButtonAlter,
  ButtonAlterText,
  RunContainer,
  RunPanel,
  RunPanelTitle,
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
  const [modalRunFinished, setModalRunFinished] = useState(false);

  const [valuePerKm, setValuePerKm] = useState("R$0,00")

  const [coordinates, setCoordinates] = useState({
    latitude:0,
    longitude: 0,
    error: null
  });

  const desactiveModalAlterPrice = () => {
    setModalAlterPrice(false),
    setValuePerKm(Intl.NumberFormat('pt-BR', 
    { style: 'currency', currency: 'BRL' }).format(valueWithoutMask))
  }

  const closeRunPanel = () => {
    setModalRun(false),
    setModalRunFinished(true)
  }

  const openRunPanel = () => {
    requestLocationPermission(),
    console.log(coordinates)
  }
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Permissão para acessar o local do dispositivo",
          message:
            "My Run precisa acessar a sua localização" +
            " só assim poderá medir a quilometragem.",
          buttonNegative: "Cancelar",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(position => setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        }), error => setCoordinates({ error: error.message }),
          {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 2000
          }
        ),setModalRun(true)
      } else {
        alert("Não foi possível acessar sua localização.");
      }
    } catch (err) {
      console.warn(err);
    }
  };  

    return(
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1, 
          justifyContent: "space-between", 
          height: heightOfDeviceScreen-24,
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
            <RunPanelTitle>DADOS DA CORRIDA ANTERIOR</RunPanelTitle>

            <OutputTitle style={{marginTop: 15}}>Distância percorrida:</OutputTitle>
            <Output>
              <OutputText>0.0 KM</OutputText>
            </Output>

            <OutputTitle>Valor cobrado:</OutputTitle>
            <Output>
              <OutputText>R$ 0,00</OutputText>
            </Output>
          </RunPanel>
        </RunContainer>

        <ButtonInit onPress={() => openRunPanel()}>
          <ButtonInitText>INICIAR CORRIDA</ButtonInitText>
        </ButtonInit>
      
        <SwipeableBottomPanel
          show={modalAlterPrice}
          close={() => desactiveModalAlterPrice()}/>

        <ActiveRunPanel
          show={modalRun}
          close={() => closeRunPanel()}
        />

        <RunFinished
          show={modalRunFinished}
          close={() => setModalRunFinished(false)}
        />
      </ScrollView>
  );
}