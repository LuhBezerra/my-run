import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import colors from '../../styles/colors';

import {
  Container,
  Panel,
  Indicador,
  Output,
  OutputText,
  Button,
  ButtonText,
} from './styles';

const Modal = () => {
  return( 
    <Container>
      <StatusBar backgroundColor={colors.transparent} barStyle="dark-content" />
      <Panel>
        <Indicador/>

        <Output>
          <OutputText 
            placeholder={'R$: Insira aqui o novo valor'} 
            placeholderTextColor={'#F0F0F0'}
            keyboardAppearance={"dark"}
            keyboardType={"numeric"}
          />
        </Output>

        <Button>
          <ButtonText>Confirmar</ButtonText>
        </Button>
      </Panel>
    </Container>
  )
}

const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    textAlign: 'center'
  },
})

export default Modal;