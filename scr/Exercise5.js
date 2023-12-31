import react from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",

    },
    box:{
        width:100,
        height:100,
        justifyContent:"center",
        alignItems:"center",
    }
});

const Square = ({text,bgColor = "aqua"}) => (
   <View style={[styles.box,{backgroundColor:bgColor}]}>
    <Text>{text}</Text>
   </View>
);

const Ex5 =()=>{
    return(
        <View style={styles.container}>
            <Square text="Square1"/>
            <Square text="Square2" bgColor="#4dc2c2"/>
            <Square text="Square3" bgColor="#ff637c"/>
        </View>
    )
}
export default Ex5;