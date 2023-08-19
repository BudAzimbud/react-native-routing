import {View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const data = [
  {
    id: 1,
    name: 'Azim',
  },
  {
    id: 2,
    name: 'Pak ramdani',
  },
];

const Home = ({route}) => {
  const params = route.params;
  console.log('params', params);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Home</Text>
      <Text>{params?.id}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View>
              <Text>hello world</Text>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
      <ScrollView>
        {data.map(item => {
          return (
            <View key={item.id}>
              <Text>hello world</Text>
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
