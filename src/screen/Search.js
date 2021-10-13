import React from 'react'
import { View, Text,TouchableWithoutFeedback,TextInput ,StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native';

export default function Search() {
    const [text, onChangeText] = React.useState("");
    const navigation = useNavigation();

    const handleClick=()=>{
        navigation.navigate('principal', {data: text})
    }

    return (
        <View>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Ingrese la palabra que desea buscar</Text>
            </View>
            <View style={styles.containerInput}>
                <TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
                value={text}
                />
            </View>
            <View style={styles.btn}>
            <TouchableWithoutFeedback onPress={handleClick} >
                <Text style={styles.btnText}>
                    Buscar
                </Text>
            </TouchableWithoutFeedback>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    containerTitle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center'
    },
    containerInput:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center'
       
    },
    textInput:{
        borderColor:"black",
        borderWidth:1,
        borderRadius:10,
        marginTop:30,
        width:'80%'
    },
    btn:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
    },
    btnText:{
        fontSize:40,
        fontWeight:"bold",
        color:"blue"
    },
    title:{
        fontSize:20,
        fontWeight:'bold',

    }
})