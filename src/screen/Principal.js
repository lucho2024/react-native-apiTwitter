import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Tweets from '../components/Tweets';
import {useNavigation} from '@react-navigation/native';

export default function Principal({route}) {
  console.log(route.params.data);
  const navigation = useNavigation();
  const [q, setq] = useState(route.params.data);
  const [count, setCount] = useState(100);
  const [tweets, settweets] = useState([]);

  useEffect(() => {
    //setq(route.params.data)
    fecthData();
  }, []);
  const fecthData = async () => {
    const url = 'https://api.twitter.com/1.1/search/tweets.json';
    try {
      const url2 = `${url}?q=${q}&result_type=recent&count=${count}`;
      console.log(url2);
      let response = await fetch(url2, {
        headers: {
          Authorization:
            'bearer AAAAAAAAAAAAAAAAAAAAAExxOgEAAAAAhd4rGR%2FWbIVVrJHX4VENmP23T1M%3DfH5bJDX9ewYftHFz642bDHQBafdZBQzUwHq9YyEBwW8wEapQsk',
        },
      });
      response = await response.json();
      settweets(response.statuses);
    } catch (err) {
      console.log('err', err);
    }
  };
  const handleClick = () => {
    navigation.navigate('grafico', {data: tweets});
  };
  const keyExtractor = item => {
    return item.id;
  };
  return (
    <>
      <View style={styles.scroll}>
        <FlatList
          data={tweets}
          renderItem={({item}) => <Tweets data={item} />}
          ListEmptyComponent={() => <Text>No hay data</Text>}
          keyExtractor={keyExtractor}
        />
      </View>
      <View style={styles.containerBtn}>
        <TouchableWithoutFeedback onPress={handleClick}>
          <Text style={styles.textBtn}>Analizar</Text>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    height: '90%',
    marginTop: 5,
  },
  containerBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
