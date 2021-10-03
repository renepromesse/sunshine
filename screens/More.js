import React, {useEffect} from 'react';
import { View } from 'react-native';
import { Text, ActivityIndicator, Button } from 'react-native-paper';
import CreateChart from './Graph';


  export default function More({precipitation, kt, ts}){
    const monthlyTemperaturePending = false;
    const ALLSKY_KT = null;
    const handleGetData = () =>{
      // dispatch(getMonthlyNasaData({long:location.coords.longitude, lat: location.coords.latitude}));
    }
    useEffect( () =>{
    })
    const data1=precipitation;
    const data2=kt;
    const data3 = ts;

      return (
        <View style={{width: '100%',paddingLeft: 10, paddingRight: 10}}>
        <View style={{flex:1}}>
        <Text style={{fontSize:19,marginLeft:10, marginRight: 10,marginBottom: 10}}>
          A graph of precipitation in your location (Year: 2020)
          </Text>
      </View>
        <View style={{width:'100%'}}>
          <View style={{width:'55%'}}>
            { monthlyTemperaturePending ? <ActivityIndicator size="large" color="#00ff00" /> :
            <View>
              {precipitation === null ? <Button onPress={() => handleGetData()}>Get Data</Button>: <CreateChart chartData={data1}/>}
              
            </View>
          }
          </View>
        </View>
        
        <View style={{flex:1}}>
        <Text style={{fontSize:19,paddingLeft: 10, marginRight: 10,marginBottom: 10}}>
          A graph of temperature in your location (Year: 2020)
          </Text>
      </View>
        <View style={{width:'100%'}}>
          <View style={{width:'55%'}}>
            { monthlyTemperaturePending ? <ActivityIndicator size="large" color="#00ff00" /> :
            <View>
              {kt === null ? <Button onPress={() => handleGetData()}>Get Data</Button>: <CreateChart chartData={data2}/>}
              
            </View>
          }
          </View>
        </View>

        <View style={{flex:1}}>
        <Text style={{fontSize:19,paddingLeft: 10, marginRight: 10,marginBottom: 10}}>
          A graph of out sky clearness in your location (Year: 2020)
          </Text>
      </View>
        <View style={{width:'100%'}}>
          <View style={{width:'55%'}}>
            { monthlyTemperaturePending ? <ActivityIndicator size="large" color="#00ff00" /> :
            <View>
              {ts === null ? <Button onPress={() => handleGetData()}>Get Data</Button>: <CreateChart chartData={data3}/>}
              
            </View>
          }
          </View>
        </View>
      
        </View>
      )
  }
