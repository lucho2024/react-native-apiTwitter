import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import Principal from './src/screen/Principal';
import { createStackNavigator } from '@react-navigation/stack';
import Grafico from './src/screen/Grafico';
import Search from './src/screen/Search';

const Stack = createStackNavigator();


const App = () => {
 
  return (
    <NavigationContainer>
  <Stack.Navigator>
        <Stack.Screen name="Home" component={Search} />
        <Stack.Screen name="principal" component={Principal} />
        <Stack.Screen name="grafico" component={Grafico} />
      </Stack.Navigator>

    </NavigationContainer>
   
  );
};

const styles = StyleSheet.create({
 

});

export default App;
