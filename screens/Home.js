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

  // const loaders = (
    
  //   <View>
  //     {console.log("------------", nasaData)}
  //     { monthlyNasaDataPending ? <ActivityIndicator size="large" color="#00ff00" /> : null }
      
  // </View>
  // )
  
  console.log(chartData);
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
    console.log('calling...')
    try{
      await Permissions.askAsync(Permissions.LOCATION);
      let location = await Location.getCurrentPositionAsync();
      if (location) {
        setLocation({set:true,coords: location.coords});
      }else{
        setLocation({set:false})
      }
    }catch(error){
      console.log(error);
      setLocation({set:false})
    }
    }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.subTitle}>
        { !location.set ? (
          <Button
            color='white'
            mode='contained'
            onPress={handleSubmit}
            >
                Set location
          </Button>
        ) : <Text style={{borderWidth:1, borderColor:'red'}}>welcome
        {JSON.stringify(monthlyNasaData)}
        { JSON.stringify(location.coords)}</Text>}
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        { displayContent === 'Home' ?
        <View>
          {console.log('charaaaaa',ALLSKY_KT)}
          { monthlyNasaDataPending ? <ActivityIndicator size="large" color="#00ff00" /> :
          <View>
            {ALLSKY_KT === null ? <Button onPress={() => handleGetData()}>Get Data</Button>: <CreateChart chartData={ALLSKY_KT}/>}
            
          </View>
        }
          {/* <CreateChart chartData={ALLSKY_KT}/> */}
          {/* <CreateChart/>
          <CreateChart/>
          <CreateChart/>
          <CreateChart/> */}
        </View>
        
        : displayContent === 'Monitor' ? 
        <View style={{borderWidth: 1, borderColor: '#f00', width: '100%'}}>
          {/* <CreateChart/> */}
          {/* { loaders} */}
          <Monitor/>
        </View>
          

         :<More/>
      }
      </ScrollView>
      <View>
        <Text>Bezier Line Chart</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',

  },
  content:{
    alignItems:'center',
    paddingBottom:10,
},
subTitle:{
  display:'flex',
  borderStyle: 'solid',
  paddingLeft:10,
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
