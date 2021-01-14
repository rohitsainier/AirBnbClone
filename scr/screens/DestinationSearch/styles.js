import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        margin:20,
    },
    textInput:{
        fontSize:20,
        marginBottom:20,
        fontWeight:'500',
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:15,
        borderBottomWidth:1,
        borderColor:'lightgrey',
    },
    iconContainer:{
        backgroundColor:'#d7d7d7',
        padding:10,
        borderRadius:10,
        marginRight:10,
    },
    locationText:{
        fontSize:17,
    },
});

export default styles;