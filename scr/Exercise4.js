import react,{useState} from "react";
import { View,Text, Button } from "react-native";

const Ex4 =()=>{
    const [pressCount,setPressCount] = useState(0);
    return(
      <View style={{alignItems:"center" ,marginTop:20}}>
        <Text>You've pressed the button:{pressCount} time(s)</Text>
        <Button title={'Pressed me'}
        onPress={()=> setPressCount(pressCount+1)}
        ></Button>
      </View>
    )
}
export default Ex4;