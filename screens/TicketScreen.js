import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { Button } from 'react-native-paper'
import qrcode from '../assets/qr.png'

const TicketScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.code}>
                <Image source={qrcode}></Image> 
            </View>
           <Text style={{fontSize: 24, fontWeight: 'bold'}}>Team A Vs Team B</Text>
           <View>
                <View key={`when`} style={styles.detailsItem}>
                  <Text style={styles.boldItem}>Date of the event: </Text>
                  <Text>Sunday 12/05/2021</Text>
              </View>
              <View style={styles.detailsItem}>
                  <Text style={styles.boldItem}>Date of purchase: </Text>
                  <Text> Sunday 12/05/2021</Text>
              </View>
              <View  style={styles.detailsItem}>
                  <Text style={styles.boldItem}>Address:  </Text>
                  <Text>Kigali Arena</Text>
              </View>
              <View  style={styles.detailsItem}>
                  <Text style={styles.boldItem}>Seat: </Text>
                  <Text>69</Text>
              </View>
              <View  style={styles.detailsItem}>
                  <Text style={styles.boldItem}>Price: </Text>
                  <Text>1000FRW</Text>
              </View>
           </View>
           <Button color="#257AAA" style={{backgroundColor: '#EAF4FB'}} >Print</Button>
        </View>
    )
}

export default TicketScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-evenly'
    },
    boldItem:{
        color: '#257AAA',
        fontWeight:'bold',
    },
    detailsItem:{
        display:'flex',
        flexDirection:'row',
        marginTop:5,
        paddingLeft:15,
    },
})
