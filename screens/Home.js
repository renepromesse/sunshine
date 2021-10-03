import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Platform, Text, View, StyleSheet,ScrollView, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CreateChart from './Graph';
import Monitor from './Monitor';
import More from './More';
import { getMonthlyNasaData } from '../redux/actions/getNasaData';


export default function Home({navigation}) {
  const [location, setLocation] = useState({set: false, coords: null});
  const [errorMsg, setErrorMsg] = useState(null);
  const { displayContent } = useSelector(state => state.header);
  const nasaData = useSelector(state => state.nasaMonthData);
  const dispatch = useDispatch();
  const { monthlyNasaData, monthlyNasaDataPending } = nasaData;
  const chartData = monthlyNasaData?.parameter;
  const ALLSKY_KT = chartData?.ALLSKY_KT ?? null;
  const KT = chartData?.KT ?? null;
  const TS = chartData?.TS ?? null;
  const PRECTOTCORR = chartData?.PRECTOTCORR ?? null;
  useEffect(() => {
    (async() => getLocation())();
  }, []);
  const handleSubmit = () =>{
    getLocation();
  }
  const handleGetData = () =>{
    dispatch(getMonthlyNasaData({long:location.coords.longitude, lat: location.coords.latitude}));
  }

  const getLocation = async () => {
    try{
      await Permissions.askAsync(Permissions.LOCATION);
      let location = await Location.getCurrentPositionAsync();
      if (location) {
        setLocation({set:true,coords: location.coords});
      }else{
        setLocation({set:false})
      }
    }catch(error){
      setLocation({set:false})
    }
    }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.subTitle}>
        {displayContent === 'Home' ? <Text style={{fontSize:19, marginRight: 10,marginBottom: 10}}>
          A graph of solar energy produced by the sun in your location (Year: 2020)</Text> : null}
        { !location.set ? (
          <Button
            color='white'
            mode='contained'
            onPress={handleSubmit}
            >
                Set location
          </Button>
        ) : null}
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        { displayContent === 'Home' ?
        <View style={{width:'100%'}}>
          <View style={{width:'55%'}}>
            { monthlyNasaDataPending ? <ActivityIndicator size="large" color="#00ff00" /> :
            <View>
              {ALLSKY_KT === null ? <Button onPress={() => handleGetData()}>Get Data</Button>: <CreateChart chartData={ALLSKY_KT}/>}
              
            </View>
          }
          </View>
        </View>
        
        : displayContent === 'Monitor' ? 
        <View style={{width: '100%'}}>
          <Monitor/>
        </View>
          

         :
         <View style={{widh: '100%',borderWidth:1, borderColor: 'red'}}>
           <More precipitation={PRECTOTCORR} kt={KT} ts={TS}/>
          </View>
      }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '99%',
      marginLeft:'auto',
      marginRight:'auto',
  },
  content:{
    alignItems:'center',
    paddingBottom:10,
},
subTitle:{
  display:'flex',
  borderStyle: 'solid',
  paddingLeft:5,
},
  LinearBackground:{
      flex: 1,
      justifyContent: 'center'
  },
  form: {
      flex: 0.5,
      justifyContent: 'center',
      justifyContent: 'space-evenly',
      padding: 30,
  },
  input:{
      marginBottom: 5,
      borderBottomWidth: 2,
      borderBottomColor: 'white',
      fontSize: 20,
      paddingBottom: 5,
      color: 'white'
  }
})
