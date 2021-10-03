import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Paragraph, Title, Button } from 'react-native-paper';
import Modal from 'react-native-modal';
import styles from '../styles/Details';
import {  } from 'react';

export default function Details({ route, navigation }) {
  const [visible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Standard Ticket');

  const changeVisibility = (value) => {
      return setIsVisible(value);
  }

  const handlePopup = () => {
    changeVisibility(false)
    return navigation.navigate('Ticket')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
          <View key={`header-${route.params.index}`} style={styles.headerImage}>
            <ImageBackground
                source={{ uri: `${route.params.content.image}` }}
                style={styles.imageContainer}
            >
                <View style={styles.textContainer}>
                    <Title
                        style={styles.titleText}
                    >
                        {route.params.content.team1} vs {route.params.content.team2}
                    </Title>

                </View>
            </ImageBackground>
          </View>
          <View key={`details-${route.params.index}`} style={styles.detailsContainer}>
              <Title style={{color:'#257AAA',fontSize:17}}>Description</Title>
              <Paragraph numberOfLines={9} style={styles.parText}>
                  {route.params.content.description}
              </Paragraph>
              <View key={`when-${route.params.index}`} style={styles.detailsItem}>
                  <Text style={styles.boldItem}>When: </Text>
                  <Text>{route.params.content.when}</Text>
              </View>
              <View key={`where-${route.params.index}`} style={styles.detailsItem}>
                  <Text style={styles.boldItem}>Where: </Text>
                  <Text>{route.params.content.where}</Text>
              </View>
              <View key={`time-${route.params.index}`} style={styles.detailsItem}>
                  <Text style={styles.boldItem}>Time: </Text>
                  <Text>{route.params.content.time}</Text>
              </View>
              <View key={`seats-${route.params.index}`} style={styles.detailsItem}>
                  <Text style={styles.boldItem}>Remaining Seats: </Text>
                  <Text>{route.params.content.remainingSeats}</Text>
              </View>
              <View key={`ticket-${route.params.index}`} style={styles.detailsItem}>
                  <Text style={styles.boldItem}>Ticket: </Text>
                  <Text>{route.params.content.price}</Text>
              </View>
          </View>
          <View key={`button-${route.params.index}`} style={styles.buttonContainer}>
              <Button 
              mode='contained'
              onPress={()=>changeVisibility(true)}
              style={{backgroundColor:'#257AAA', width:'50%', }}
              >
                  Get a Ticket
              </Button>
          </View>
      </ScrollView>
            <Modal
            isVisible={visible}
            onSwipeComplete={()=> changeVisibility(false)}
            swipeDirection='down'
            style={{ display:'flex', marginLeft:0,marginRight:0,marginBottom:0}}
            >
                <View key={`modal-${route.params.index}`} style={styles.modalContainer}>
                    <View key='ticketCount' style={styles.ticketCount}>
                        <Text style={{fontSize:16, fontWeight:'500', color:'grey'}} key={`count`}>{selectedValue}</Text>
                        <Text>x1</Text>
                        <Text style={{fontSize:16, fontWeight:'500', color:'grey'}} key={`price`}>{route.params.content.price}</Text>
                    </View>
                    <View key='totalCount' style={styles.ticketCount}>
                        <Text style={{fontSize:25, fontWeight:'bold'}} key={`total`}>Total</Text>
                        <Text style={{fontSize:25, fontWeight:'bold'}} key={`totalPrice`}>{route.params.content.price}</Text>
                    </View>
                    <View key={`button-pay-${route.params.index}`} style={styles.momoButtonContainer}>
                        <TouchableOpacity 
                            style={styles.momoButton}
                            onPress={handlePopup}
                        >
                            <Text style={{fontWeight:'bold'}}>Pay with MOMO</Text>
                            <Image source={require('../assets/mtn.jpg')} style={{width:55,height:23}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
    </View>
  );
}
