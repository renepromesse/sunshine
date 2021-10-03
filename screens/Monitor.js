import React, {useState} from 'react';
import { View,TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Text } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import CreateChart from './Graph';


  export default function Monitor(){
    const [selectedLanguage, setSelectedLanguage] = useState("java");
    const [text, setText] = useState("");
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [energy, setEnergy] = useState();
    

    const onChange = (event, selectedDate) => {
        try
       { const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear();
        let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();
        console.log(fDate + " " + fTime);}
        catch(e){
            console.log(e);
        }

    };
    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };
    const handlePanelNumber = (value) =>{
        setText(value);
    }
    const handleSave = () =>{
        console.log('save');
    }
    const compareNasa = () =>{
        console.log('compare');
    }


      return (
        <View style={{borderWidth: 1, borderColor: '#f0f'}}>
            <Text style={{fontSize:15, fontWeight: 'bold',paddingBottom:15}}>Monitor your systems</Text>
            <View>
                <Text>Solar system types</Text>
                <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '60%', width: 'auto', margin:'auto'}}>
                    <Picker
                        style={{height: 50,width: 'auto'}}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <Text>Number of Panels</Text>
                <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '60%', width: 'auto', margin:'auto'}}>
                    <TextInput
                        type="number"
                        style={{height: 50,width: 'auto'}}
                        placeholder="Enter number of panels"
                        onChangeText={text => handlePanelNumber(text)}
                        value={text}
                    />
                </View>
                <Text>Pick Date</Text>
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
                <Text>Energy produced by all {text}:</Text>
                <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '60%', width: 'auto', margin:'auto'}}>
                    <TextInput
                        type="number"
                        style={{height: 50,width: 'auto'}}
                        onChangeText={energy => handleEnergyProduced(energy)}
                        value={energy}
                    />
                </View>
                <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '60%', width: 'auto', margin:'auto'}}>
                    <Button title="Save" onPress={() => handleSave()} />
                </View>
                <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '60%', width: 'auto', margin:'auto'}}>
                    <Button title="Compare with Nasa Data" onPress={() => compareNasa()} />
                </View>
                <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '60%', width: 'auto', margin:'auto'}}>
                    <CreateChart />
                </View>
            </View>
        </View>
      )
  }
