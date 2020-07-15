import React, { useState, useEffect } from 'react'
import { Animated, Dimensions, Image, } from 'react-native';

import {
  styles,
  ContainerText,
  TextH1,
  TextH2,
  Button,
} from './styles';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const RunFinished = ({ show, close }) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(0)
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 250 }),
      Animated.timing(state.opacity, { toValue: 1, duration: 250 }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 8, useNativeDriver: true })
    ]).start()
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: -width, duration: 0, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 200 }),
      Animated.timing(state.container, { toValue: height, duration: 0 })
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
            { translateX: state.container }
          ]
        }]}
      >
        <Animated.View 
          style={[styles.modal, {
            transform: [
              { translateX: state.modal }
            ]
          }]}
        >
            <TextH1>FINALIZADA!</TextH1>
            <Image 
              style={{width: 225, height: 65.5}}
              source={require('../../assets/iconMoney.png')}
            />

            <ContainerText>
              <TextH1>IRÁ PAGAR:</TextH1>

              <TextH2>R$ 25.00</TextH2>
            </ContainerText>

        </Animated.View>
            <Button onPress={close} >
                  <Image 
                    style={{width: 30, height: 30}}
                    source={require('../../assets/x.png')}
                  />
            </Button>
      </Animated.View>
  )
}

export default RunFinished;