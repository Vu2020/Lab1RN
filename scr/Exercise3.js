import react from "react";
import {  Text, TouchableOpacity, View } from "react-native"
const Button = (props) =>(
    <TouchableOpacity
    onPress={props.onPress}
    style={{
        backgroundColor:"#ff637c",
        alignSelf:"center",
        margin:10,
        padding:10,
        ...props.buttonStyle,
    }}>
    <Text style={{color:"#fff"}}>{props.text}</Text>
    </TouchableOpacity>
);
const Ex3=()=>{
    return(
        <View>
            <Button text="Say hello" onPress={()=> alert("hello!")}/>
            <Button text="Say Goodbye" onPress={()=> alert("goodbye!")} buttonStyle={{backgroundColor:"#4dc2c2"}} ></Button>
            
        </View>
    )
}
export default Ex3;
