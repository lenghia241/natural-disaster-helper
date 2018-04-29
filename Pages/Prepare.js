import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text, Container, Content, Header, Body, Title, Left, Right, Icon, Footer, FooterTab } from 'native-base';

import { StackNavigator } from 'react-navigation';

import call from 'react-native-phone-call';
const args = {
  number: '+123456789', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}

export default class Prepare extends React.Component {

  calling = () => {
    return call(args).catch(console.error);
  }

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.img} source={require('../Image/preparation.jpg')} />

        <Button full rounded large dark style={styles.button} onPress={() => this.props.navigation.navigate('EarthQuakePre')}><Text>Earthquake</Text></Button>
        <Button full rounded large primary style={styles.button} onPress={() => this.props.navigation.navigate('FloodPre')}><Text>Flood</Text></Button>
        <Button full rounded large success style={styles.button} onPress={() => this.props.navigation.navigate('CyclonePre')}><Text>Cyclone</Text></Button>
        <Button full rounded large danger style={styles.button} onPress={() => this.props.navigation.navigate('VolcanoPre')}><Text>Volcano</Text></Button>

        <Footer style={styles.footer}>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="apps" />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('DisasterAlert')}>
              <Icon name="pulse" />
              <Text>Alert</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Sending')}>
              <Icon active name="navigate" />
              <Text>Signal</Text>
            </Button>
            <Button vertical>
              <Icon name="person" onPress={this.calling} />
              <Text>SOS</Text>
            </Button>
          </FooterTab>
        </Footer>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
  },
  img: {
    width: 400,
    height: 250,
  },
  footer: {
    marginBottom: 0,
    position: 'absolute',
    bottom: 0,
  }
});