import React from 'react';
import { Card,Title, Paragraph } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native';

const TicketCard = ({data, navigation}) => {
    return (
     <Card key={`card-${data.index}`} 
       style={styles.cardContainer} 
       onPress={() => navigation.navigate('Ticket')}
       onLongPress={() => null}
     >
         <View style={styles.cardWrapper}>
            <Card.Actions key={`card-action-${data.index}`}  style={styles.cardActions}>
                <Card.Content key={`card-content-${data.index}`} >
                    <Title key={`card-title-${data.index}`}  
                    style={{fontSize:15,marginTop:0,marginBottom:0, color:'#257AAA'}}
                    >
                        {`${data.content.team1} vs ${data.content.team2}`}
                    </Title>
                    <Text>
                        <Text style={styles.boldText}>Date of Event</Text> {data.content.dateOfEvent}
                    </Text>
                    <Text>
                        <Text style={styles.boldText}>Date of Purchase</Text> {data.content.dateOfPurchase}
                    </Text>
                    <Text>
                        <Text style={styles.boldText}>Address</Text> {data.content.address}
                    </Text>
                    <Text>
                        <Text style={styles.boldText}>Seat Number</Text> {data.content.seatNumber}
                    </Text>
                    <Text>
                        <Text style={styles.boldText}>Price</Text> {data.content.price}
                    </Text>
                </Card.Content>
            </Card.Actions>
            <Card.Cover key={`card-cover-${data.index}`} 
                style={styles.cardCover} 
                source={{ uri: `${data.content.QRCodeImage}` }}
            />
         </View>
     </Card>
   );
        
    }

export default TicketCard;

const styles = StyleSheet.create({
    cardContainer:{
        width: '95%',
        marginTop:20,
        display: 'flex',
        flexDirection:'row'
    },
    cardWrapper:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    cardCover:{
        height: 150,
        width: '40%',
        padding:5,
        margin:5
    },
    cardActions:{
        width: '55%',
        padding:0, 
        margin:0,
    },
    boldText:{
        fontWeight: 'bold',
        color:'green',
        fontSize: 13
    }
})