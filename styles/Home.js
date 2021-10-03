import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eaf4fb',
  },
    subTitle:{
      display:'flex',
      borderStyle: 'solid',
      paddingLeft:10,
    },
    content:{
        alignItems:'center',
        paddingBottom:10,
    },
    cardContainer:{
      width: '95%',
      marginTop: 25,
    },
    cardDetails:{
        borderColor: 'black',
        display: 'flex',
        flexDirection:'row',
        width: '100%',
        margin:0
    },
    detailsItem:{
        width: '50%',
        borderColor: 'red',
    },
    detailsItem2:{
        width: '50%',
        borderColor: 'red',
        alignItems:'flex-end'
    },
    cardParagraph:{
        display:'flex',
        flexDirection:'column',
        paddingTop:0,
        marginTop:0,
        marginBottom:0,
    },
    itemTitle:{
        fontWeight:'bold'
    }
  });

  export default styles