import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import CreateChart from './Graph';


  export default function More(){
   

      return (
        <View>
        <Text>More section</Text>
        <Text>Temperature</Text>
          <CreateChart />
          <Text>Humidity</Text>
          <CreateChart />
        </View>
      )
  }
