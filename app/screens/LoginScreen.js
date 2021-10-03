import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Alert} from 'react-native'
import { Button } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'

export default function LoginScreen() {
    const [phoneNumber, setNumber] = useState("")

    const handleSubmit = () => {
        Alert.alert("Confirm phone number",`A verification code will be sent to: +250${phoneNumber}`,[
            {text: 'cancel'},
            {text: 'Confirm'}
        ])
    }
    const handleChange =(e) => {
        setNumber(e)
    }

    return (
        <View style={styles.container}>
            <LinearGradient
            colors={["#6ADEED", "#4D9CC9", "#2A4C9D"]}
            style={styles.LinearBackground}
            start={{x: 0, y:0}}
            end = {{x:1, y: 1}}
            >
            <View style={styles.form}>

            <Text style={{color: 'white'}}>
                Enter a phone number to get verification code
                </Text>


                <TextInput
                placeholder='Your Phone number'
                placeholderTextColor='white'
                style={styles.input}
                value={phoneNumber}
                onChangeText={handleChange}
                />

                
                <Button
                color='white'
                mode='contained'
                disabled={!phoneNumber}
                onPress={handleSubmit}
                >
                    Send verification code
                </Button>
            </View>
           </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',

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
