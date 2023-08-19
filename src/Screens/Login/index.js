import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BottomNavigator', {screen: 'Create'});
        }}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
