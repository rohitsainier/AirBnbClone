import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({
   row:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    paddingVertical:20,
    borderBottomWidth:1,
    borderColor:'lightgrey',
   },
   title:{
        fontWeight:'bold',
   },
   subtitle:{
        color:'#8d8d8d',
   },
   rightView:{
        flexDirection:'row',
        alignItems:'center',
   },
   button:{
       width:40,
       height:40,
       borderWidth:1,
       borderRadius:20,
       justifyContent:'center',
       alignItems:'center',
   },
   countValue:{
       marginHorizontal:16,
       fontSize:20,
   },
});

export default styles;