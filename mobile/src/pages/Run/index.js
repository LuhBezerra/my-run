import React, { useState, useEffect } from 'react'
import { Animated, Dimensions, Text, } from 'react-native';

import fonts from '../../styles/fontsSize';
import {
  styles,
  OutputContainer,
  Output,
  OutputTitle,
  OutputText,
  Button,
  ButtonText,
} from './styles';

const { height } = Dimensions.get('window');


const Run = ({ show, close }) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100 }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 12, useNativeDriver: true })
    ]).start()
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
      Animated.timing(state.container, { toValue: height, duration: 100 })
    ]).start()
  };

  useEffect(() => {
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show])

  return( 
    <Animated.View 
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}
    >
      <Animated.View 
        style={[styles.modal, {
          transform: [
            { translateY: state.modal }
          ]
        }]}
      >
        <OutputContainer>
          <OutputTitle>Distância Atual</OutputTitle>
          <Output>
            <OutputText>0.0 KM</OutputText>
          </Output>
        </OutputContainer>

        <OutputContainer>
          <OutputTitle>Valor Atual</OutputTitle>
          <Output>
            <OutputText>R$ 0.00</OutputText>
          </Output>
        </OutputContainer>

        <Button onPress={close} >
          <ButtonText>FINALIZAR CORRIDA</ButtonText>
        </Button>
      </Animated.View>
    </Animated.View>
  )
}

export default Run;