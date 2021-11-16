import React, { useEffect, useState } from 'react'
import { View, Text,ActivityIndicator , Dimensions,TouchableWithoutFeedback,StyleSheet} from 'react-native'
import Sentiment from'sentiment';
import {PieChart, BarChart,} from 'react-native-chart-kit';

const sentiment = new Sentiment();

export default function Grafico({route}) {
    const tw = route.params.data;
    var screenWidth = Dimensions.get('window').width;

    const [good, setgood] = useState([])
    const [bad, setBad] = useState([])
    const [neutro, setNeutro] = useState([])
    const [todos, setTodos] = useState([])
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([])
/*Holi*/
    useEffect(() => {     
        analyze();
    }, [])

    const analyze =async ()=>{
        let g =[];
        let b =[];
        let n =[];
     
        if(tw.length>0){     
          for (let index = 0; index < tw.length; index++) {
            const result = sentiment.analyze(tw[index]?.text);
            console.log(result);
            if(result.comparative>0){         
              g.push(result.comparative)         
            }else if(result.comparative <0 ){
              b.push(result.comparative)
            }else{
              n.push(result.comparative)
            } 
            
          }
          setgood(g);
          setBad(b);
          setNeutro(n);
        
          }          
      }
      const crossData = () => {
        if (todos !== undefined) {
         
          const data = [
            {
              name: "Bueno",
              population: good.length,
              color: "rgba(131, 167, 234, 1)",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "Malo",
              population: bad.length,
              color: "#F00",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "Neutro",
              population: neutro.length,
              color: "yellow",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            }
          
          ];
          const data2 = {
            labels: ["Bueno", "Malo", "Neutro"],
            datasets: [
              {
                data: [good.length,bad.length,neutro.length]
              }
            ]
          };      
          setData2(data2);
          setData(data);
        }
    }

    const handleClick=()=>{
        crossData();
    }
      const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      };
    return (
        <View>
          
            
            {data.length > 0 ? (
                <>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Gráfica pastel</Text>
                </View>
                
                <PieChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                />
                <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Gráfica de Barras</Text>
                </View>
               
                    <BarChart
                  
                  data={data2}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  verticalLabelRotation={10}
                  />
              
                </>
            ) :null
            }
            <View style={{marginTop:10}}>
                <Text style={styles.text}>Sentimietos buenos : {good.length}</Text>
            </View>
            <View>
                <Text style={styles.text}>Sentimientos malos : {bad.length}</Text>
            </View>
            <View>
                <Text style={styles.text}>
                    Sentimientos neutros : {neutro.length}
                </Text>
            </View>
            <View style={styles.btn}>
                <TouchableWithoutFeedback onPress={handleClick}>
                     <Text style={styles.textBtn}>Generar gráfica</Text>
                </TouchableWithoutFeedback>
                
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    btn:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    
    }
    ,textBtn:{
        fontSize:30,
        fontWeight:'bold',
        color:"blue",
        marginTop:15
    }
    ,
    text:{
        fontSize:20,
        fontWeight:'bold',

    }
})
