import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home', {
            id: 1,
          });
        }}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
