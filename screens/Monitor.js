import React, {useState} from 'react';
import { View,TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Text } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import CreateChart from './Graph';


  export default function Monitor(){
    const [selectedLanguage, setSelectedLanguage] = useState("none");
    const [text, setText] = useState("");
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [energy, setEnergy] = useState();
    const [show2, setShow2] = useState(0);
    

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear();
        let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();
    
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
        setShow2(1);
    }
    const data={
        '202001': 0.46,
        '202002': 0.42,
        '202003': 0.75,
        '202004': 0.82,
        '202005': 0.32,
        '202006': 0.52,
        '202007': 0.62,
        '202008': 0.72,        
    }


      return (
        <View >
            <Text style={{fontSize:19, fontWeight: 'bold',paddingBottom:15}}>Monitor your systems</Text>
            <View>
                <Text>Solar system types</Text>
                <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '70%', width: 'auto', margin:'auto'}}>
                    <Picker
                        style={{height: 50,width: 'auto'}}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Canadian Solar 280W" value="CanadianSolar280W" />
                        <Picker.Item label="Canadian Solar 290W" value="CanadianSolar290W" />
                        <Picker.Item label="Canadian Solar 290W" value="CanadianSolar290W" />
                        <Picker.Item label="Canadian Solar 290W" value="CanadianSolar290W" />
                        <Picker.Item label="Canadian Solar 290W" value="CanadianSolar290W" />
                        <Picker.Item label="Canadian Solar 290W" value="CanadianSolar290W" />
                        <Picker.Item label="Canadian Solar 290W" value="CanadianSolar290W" />
                        <Picker.Item label="Canadian Solar 290W" value="CanadianSolar290W" />
                        <Picker.Item label="Canadian Solar 290W" value="CanadianSolar290W" />
                    </Picker>
                </View>
                <View style={{marginTop: 10}}>
                    <Text>Number of Panels</Text>
                    <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '70%', width: 'auto', margin:'auto'}}>
                        <TextInput
                            type="number"
                            style={{height: 50,width: 'auto'}}
                            placeholder="Enter number of panels"
                            onChangeText={text => handlePanelNumber(text)}
                            value={text}
                        />
                    </View>

                </View>
                <View style={{flex:1,flexDirection:'row', justifyContent: 'space-between', width: '50%', marginTop: 10, marginBottom: 10}}>
                    <View>
                        <Text>Pick Date</Text>
                        <Text>{date.toLocaleDateString()}</Text>
                    </View>
                    <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '70%', width: 'auto', margin:'auto'}}>
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
                <View style={{marginBottom: 10}}>
                    <Text>Energy produced by all {text} panels:</Text>
                    <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '70%', width: 'auto', margin:'auto'}}>
                        <TextInput
                            type="number"
                            style={{height: 50,width: 'auto'}}
                            onChangeText={energy => handleEnergyProduced(energy)}
                            value={energy}
                        />
                    </View>
                </View>
                <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '70%', width: 'auto', marginBottom:30}}>
                    <Button title="Save" onPress={() => handleSave()} />
                </View>
                <View style={{borderWidth: 1, borderColor: '#000', maxWidth: '70%', width: 'auto', marginBottom:30}}>
                    <Button title="Compare with Nasa Data" onPress={() => compareNasa()} />
                </View>
                <View style={{ flex: 0, borderTopWidth: 2, borderTopColor: '#000', maxWidth: '100%', width: 'auto', marginLeft:'auto', marginRight: 'auto'}}>
                    <CreateChart chartData={data} />
                </View>
            </View>
        </View>
      )
  }
