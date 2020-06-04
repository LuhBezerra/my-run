import React, { useState, useEffect } from 'react'
import { StyleSheet, StatusBar, Animated, Dimensions } from 'react-native';
//import TextInputMask from 'react-native-text-input-mask';
import colors from '../../styles/colors';
import {
  styles,
  Container,
  Panel,
  Indicador,
  Output,
  OutputText,
  Button,
  ButtonText,
} from './styles';

const { height } = Dimensions.get('window');

const Modal = ({ show, close }) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100 }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
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
        <Indicador/>

        <Output>
          <OutputText 
            placeholder={'R$: Insira aqui o novo valor'} 
            placeholderTextColor={'#F0F0F0'}
            keyboardAppearance={"dark"}
            keyboardType={"numeric"}
          />
        </Output>

        <Button onPress={close} >
          <ButtonText>Confirmar</ButtonText>
        </Button>
      </Animated.View>
    </Animated.View>
  )
}

export default Modal;