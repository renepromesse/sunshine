import React from 'react';
import { Card,Title, Paragraph } from 'react-native-paper';
import { Text, View } from 'react-native';
import styles from '../styles/Home';


const MainCard = ({data, navigation}) => {
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
                     
                     <View key={`details-${data.index}`} style={styles.detailsItem}>
                       
                       <Paragraph key={`item-${data.index}`} style={styles.cardParagraph}>
                           {data.content.when}
                       </Paragraph>
                       <Paragraph key={`item2-${data.index}`} style={styles.cardParagraph}>
                           {data.content.where}
                       </Paragraph>
                     </View>
   
                     <View key={`details2-${data.index}`} style={styles.detailsItem2}>
                       <Paragraph key={`item3-${data.index}`} style={styles.cardParagraph}>
                           <Text key={`item-text-${data.index}`}>{data.content.time}</Text>
                       </Paragraph>
                       <Paragraph key={`item4-${data.index}`} style={styles.cardParagraph}>
                           <Text key={`item-text2-${data.index}`}>{data.content.price}</Text>
                       </Paragraph>
                       
                     </View>
                     
                 </View>
             </Card.Content>
         </Card.Actions>
     </Card>
   );
        
    }

export default MainCard;