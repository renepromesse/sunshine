import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { Card,Title, Paragraph } from 'react-native-paper';
import { cardContent } from '../dummyData';
import styles from '../styles/Home';

export default function Purchased({navigation}) {
  const MainCard = ({data}) => {
 return (
  <Card key={`card-${data.index}`} 
    style={styles.cardContainer} 
    onPress={() => navigation.navigate('Details', data)}
    onLongPress={() => null}
  >
      <Card.Cover key={`card-cover-${data.index}`} style={{height:150}} source={{ uri: `${data.content.image}` }}/>
      <Card.Actions key={`card-action-${data.index}`}  style={{padding:0, margin:0}}>
          <Card.Content key={`card-content-${data.index}`}  style={{paddingLeft:20, paddingRight:20}}>
              <Title key={`card-title-${data.index}`}  style={{fontSize:18,marginTop:0,marginBottom:0, color:'#257AAA'}}>{`${data.content.team1} vs ${data.content.team2}`}</Title>
              <View key={`card-details-${data.index}`}  style={styles.cardDetails}>
                 
                  
              </View>
          </Card.Content>
      </Card.Actions>
  </Card>
);
     
 }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.subTitle}>
        <Title>Upcoming games</Title>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {cardContent.map((content, index) =>(
            <MainCard key={`main-card-${index}`} data={{content,index}}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

