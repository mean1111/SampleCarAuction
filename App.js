import React from 'react';
import { Text,StyleSheet, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return (
      <View >
        <LoginScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
