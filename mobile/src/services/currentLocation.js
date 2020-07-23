import {useEffect} from 'react'

import Geolocation from '@react-native-community/geolocation';

export function LocationUser(state){

  useEffect(requestLocationPermission)

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Permissão para acessar o local do dispositivo",
          message:
            "My Run precisa acessar a sua localização" +
            "assim poderá medir a quilometragem",
          buttonNegative: "Cancelar",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(data=>console.warn(data))
        console.warn("Geolocation")
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };  

  const currentLocation = () => {
    
  };

  const sleep = time  => new Promise(resolve => {
    setTimeout(resolve, time)
  });

  const inTimes = async() => {

    while (state == 'on'){
      await sleep(3000)
      console.log('teste')
    }
  }

  return inTimes(); 


}