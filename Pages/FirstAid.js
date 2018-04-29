import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Button, Text, Footer, FooterTab, Icon } from 'native-base';

import { StackNavigator } from 'react-navigation';

import call from 'react-native-phone-call';

const args = {
  number: '+123456789', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}
export default class FirstAid extends React.Component {

  calling = () => {
    return call(args).catch(console.error);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: "100%", flexDirection: "row", }}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("PreventBleeding")} style={styles.nav}>
            <View><Image style={styles.img} source={require('../Image/bleeding.png')} />
              <Text style={styles.text}>Bleeding</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("PreventBleeding")} style={styles.nav}>
            <View><Image style={styles.img} source={require('../Image/bone.png')} />
              <Text style={styles.text}>Bleeding</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{ width: "100%", flexDirection: "row", }}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("PreventBleeding")} style={styles.nav}>
            <View><Image style={styles.img} source={require('../Image/breath.png')} />
              <Text style={styles.text}>Bleeding</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("PreventBleeding")} style={styles.nav}>
            <View><Image style={styles.img} source={require('../Image/head.png')} />
              <Text style={styles.text}>Bleeding</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{ width: "100%", flexDirection: "row", }}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("PreventBleeding")} style={styles.nav}>
            <View><Image style={styles.img} source={require('../Image/fainting.png')} />
              <Text style={styles.text}>Bleeding</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("PreventBleeding")} style={styles.nav}>
            <View><Image style={styles.img} source={require('../Image/cpr.png')} />
              <Text style={styles.text}>Bleeding</Text>
            </View>
          </TouchableHighlight>
        </View>

        <Footer>
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
    justifyContent: 'center',
    flexDirection: "column",
  },
  nav: {
    alignItems: "center",
    width: "45%",
    margin: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "#fec209",
    borderRadius: 5,
    marginBottom: 30,
    paddingTop: 20,
    paddingBottom: 20
  },
  img: {
    height: 100,
    width: 100
  },
  text: {
    fontSize: 20
  }
});
