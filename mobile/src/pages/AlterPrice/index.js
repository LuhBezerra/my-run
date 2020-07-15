import React, { useState, useEffect } from 'react'
import { Animated, Dimensions, KeyboardAvoidingView, } from 'react-native';

import { TextInputMask } from 'react-native-masked-text'

import fonts from '../../styles/fontsSize';
import { rawValue } from './noMask'
import {
  styles,
  Indicador,
  Input,
  Button,
  ButtonText,
} from './styles';

const { height } = Dimensions.get('window');

export let valueWithoutMask

const Modal = ({ show, close }) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  });
  
  const [currentValue, setCurrentValue] = useState("0");

  const value = currentValue

  valueWithoutMask = rawValue(value)

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100 }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 1, useNativeDriver: true })
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
        <Input>
          <TextInputMask
            placeholder={'R$: Insira aqui o novo valor'}
            placeholderTextColor={'#F0F0F0'}
            style={{color: '#f0f0f0', fontSize: 20}}
            keyboardAppearance={"dark"}
            keyboardType={"number-pad"}
            type={'money'}
            options={{
              precision: 2,
              separator: '.',
              delimiter: ' ',
              unit: 'R$ ',
              suffixUnit: ''
            }}
            value={currentValue}
            onChangeText={text => setCurrentValue(text)}
            />
        </Input>

        <Button onPress={close} >
          <ButtonText>Confirmar</ButtonText>
        </Button>
      </Animated.View>
    </Animated.View>
  )
}

export default Modal;