import React, { useState} from 'react';
import { View, Button } from 'react-native';
import { Dimensions } from "react-native";
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
    LineChart
  } from "react-native-chart-kit";
import { Text } from 'react-native-paper';
import { numberToDays } from '../helpers/basic';


  export default function CreateChart({chartData}){
    const [checked, setChecked] = React.useState('daily');

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [dateEnd, setDateEnd] = useState(new Date());
    const [modeEnd, setModeEnd] = useState('date');
    const [showEnd, setShowEnd] = useState(false);

    const chartConfig = {'one':{
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, 
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        decimalPlaces:0
      },
      'two':{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        },
        }
    };
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear();
      let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();
      console.log(fDate + " " + fTime);

  };
//   const onChangeEnd = (event, selectedDate) => {
//     try
//    { const currentDate = selectedDate || dateEnd;
//     setShowEnd(Platform.OS === 'ios');
//     setDateEnd(currentDate);
//     let tempDate = new Date(currentDate);
//     let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear();
//     let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();
//     console.log(fDate + " " + fTime);}
//     catch(e){
//         console.log(e);
//     }

// };
  const showMode = currentMode => {
      setShow(true);
      setMode(currentMode);
  };
//   const showModeEnd = currentMode => {
//     setShow(true);
//     setModeEnd(currentMode);
// };
    console.log('CHARDATA',chartData);


    // const labels = [];
    // const data = [];
    // let startYear = '';
    let {labels, data, startYear} = numberToDays(chartData, [], [], '')
  // data.push(1);
  console.log("LABELS",labels);
      

      return (
        <View>
        <Text>Bezier Line Chart</Text>
        <View style={{borderWidth:1, borderColor:'red', width:'50%'}}>
        <View style={{flex:1, flexDirection: 'row',alignItems: 'center'}}>
          <Text>Monthly</Text>
            <RadioButton
              value="first"
              status={ checked === 'monthly' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('monthly')}
            />

        </View>
        <View style={{flex:1, flexDirection: 'row',alignItems: 'center'}}>
          <Text>Daily</Text>
          <RadioButton
            value="second"
            status={ checked === 'daily' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('daily')}
          />
          </View>

          <View>
          <Text>Start Date</Text>
                <Text>{date.toLocaleDateString()}</Text>
                <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '60%', width: 'auto', margin:'auto'}}>
                    <Button title="Select Date" onPress={() => showMode('date')} />
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            timeZoneOffsetInMinutes={0}
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>  
          </View>
          <View>
          {/* <Text>End Date</Text>
                <Text>{dateEnd.toLocaleDateString()}</Text>
                <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '60%', width: 'auto', margin:'auto'}}>
                    <Button title="Select Date" onPress={() => showModeEnd('date')} />
                    {showEnd && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            timeZoneOffsetInMinutes={0}
                            value={dateEnd}
                            mode={modeEnd}
                            is24Hour={true}
                            display="default"
                            onChange={onChangeEnd}
                        />
                    )}
                </View>   */}
          </View>

        </View>
        <LineChart
            data={{
            labels: labels,
            datasets: [
                {
                data:data,
                }
            ],
            legend:[`${labels[0]}-${labels[labels.length-1]} ${chartData}`]
            }}
            width={Dimensions.get("window").width} 
            height={220}
            yAxisLabel=""
            yAxisSuffix=" kwh"
            yAxisInterval={1} 
            chartConfig={chartConfig.two}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
            
            showValuesOnTopOfBars={true}
            horizontalLabelRotation={5}
            verticalLabelRotation={-50}
            fromZero={true}
            decimalPlaces={1}


        />
        </View>
      )
  }


