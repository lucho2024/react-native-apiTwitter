import React from 'react'
import { View, Text,ScrollView,StyleSheet ,Image} from 'react-native'

export default function Tweets({data}) {
    return (
        <View style={styles.container}>
            <View style={styles.tweet}>
                <View>
                    <Text style={styles.titulo}>
                      Usuario :  
                    </Text>
                    <Text>{data?.user?.name}</Text>
                </View>
                    <View>
                        <Text style={styles.titulo}>
                      Tweet: 
                        </Text>
                        <Text>
                        {data?.text}

                        </Text>
                    </View>
          </View>
    </View>
    )
}

const styles = StyleSheet.create({
  
    container:{
        display:'flex',
        flexDirection:'column',
        borderWidth:1,
        marginHorizontal:5,
        borderColor:'blue',
        marginVertical:10,
        borderRadius:5

    },
    tweet:{
        margin:5
    },
    titulo:{
        color:'black',
        fontSize:15,
        fontWeight:'bold'
    }
})