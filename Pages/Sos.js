import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{StackNavigator} from'react-navigation';
export default class Sos extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sos screen</Text>
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