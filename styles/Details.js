import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    headerImage:{
        display: 'flex',
        width:'100%',
        height: '27%',
  
    },
    imageContainer:{
      height: 150,
      width: '100%',
      position: 'relative',
      top: 0,
      left: 0,
      backgroundColor:'rgba(0,0,0,0.5)'
      },
    textContainer:{
      width:'100%',
      height:'100%',
      position: 'absolute',
      top:0,
      justifyContent: 'flex-end',
      alignItems:'center',
      backgroundColor:'rgba(0,0,0,0.3)'
      },
      titleText:{
          fontWeight: 'bold',
          color: 'white',
          fontSize: 22,
      },
      detailsContainer:{
          display:'flex',
          paddingLeft: 20,
          paddingRight:20,
          width: '100%',
          height: '65%',
      },
      parText:{
          height:'50%',
          paddingLeft:5,
          marginBottom:15,
      },
      detailsItem:{
          display:'flex',
          flexDirection:'row',
          marginTop:5,
          paddingLeft:15,
      },
      boldItem:{
          color: '#257AAA',
          fontWeight:'bold',
      },
      buttonContainer:{
          marginTop:10,
          justifyContent: 'center',
          alignItems:'center'
      },


      modalContainer:{
          backgroundColor:'white',
          width:'100%',
          height: '50%',
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
          position:'absolute',
          bottom: 0,
          marginBottom:0,
          marginLeft:0,
          alignItems:'center'
      },
      pickerContainer:{
        display:'flex', 
        borderWidth:1, 
        borderColor:'black', 
        width:'80%',height:'auto',
        justifyContent:'center',
        marginTop:20,
        borderRadius:50,
      },
      ticketCount:{
          display:'flex',
          width:'80%',
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop:20, 
      },
     momoButton: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'80%',
        backgroundColor: '#fbcc0c',
        padding: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.35,
      },
      momoButtonContainer:{
          marginTop:10,
          borderTopWidth:1,
          display:'flex',
          position:'absolute',
          bottom:0,
          height:'40%',
          width:'80%',
          justifyContent: 'center',
          alignItems:'center',
      },
  
  });

  export default styles