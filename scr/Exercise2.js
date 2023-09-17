import react from "react"
import { Button, TouchableOpacity, View } from "react-native"
import { Text } from "react-native-paper"

const Ex2=()=>{
    return(
        <View style={{flex:1,justifyContent:"center"}}>
            <Button title="button1" onPress={()=> alert("hello!")}/>
                <TouchableOpacity
                onPress={()=> alert("hello2!")}
                style={{
                    backgroundColor:"blue",
                    padding:10,
                    alignItems:"center",
                    marginTop:10
                }}>
                    <Text style={{ color:"white",fontSize:18}}>button2</Text>
                </TouchableOpacity>
            \
        </View>
    )
}
export default Ex2;