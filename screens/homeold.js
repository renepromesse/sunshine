



import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { Card,Title, Paragraph } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { cardContent } from '../dummyData';
import { displayContentAction, headerAction } from '../redux/actions/headerAction';
import styles from '../styles/Home';
import MainCard from './MatchCard';
import TicketCard from './TicketCard';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const {homeCardContent} = useSelector(state => state.home);
  const { displayContent } = useSelector(state => state.header);
  const { ticketCardContent } = useSelector(state => state.home);
  
  // useEffect(()=>{
  //   dispatch(headerAction(true));
  // },[])
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.subTitle}>
        <Title>{displayContent === 'Home' ? 'Upcoming games': 'All tickets you bought:'}</Title>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        { displayContent === 'Home' ?
        homeCardContent.map((content, index) =>(
            <MainCard key={`main-card-${index}`} navigation={navigation} data={{content,index}}/>
        )) 
        : displayContent === 'Purchased' ? 
        ticketCardContent.map((content, index) =>(
          <TicketCard key={`main-ticket-card-${index}`} navigation={navigation} data={{content, index}}/>
        )) : <Text>No data yet</Text>
      }
      </ScrollView>
    </SafeAreaView>
  );
}
