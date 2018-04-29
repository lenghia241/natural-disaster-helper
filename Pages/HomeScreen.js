import React from 'react';
import {
    StyleSheet,
    // Text, 
    View,
    // Button, 
    ImageBackground, Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button, Text, Container, Content, Header, Body, Title, Left, Right } from 'native-base';

import call from 'react-native-phone-call';
import Swiper from 'react-native-swiper';
const args = {
    number: '+123456789', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}
export default class HomeScreen extends React.Component {
    calling = () => {
        return call(args).catch(console.error);
    }
    render() {
        return (
            <ImageBackground source={require('../Image/bg.jpg')} style={styles.backGround}>
                <Container style={styles.container}>

                    <View style={{ flex: 1 }}><Image style={{ height: 170, width: 170 }} source={require('../Image/logo.png')} /></View>
                    <View style={styles.buttonContainer}>

                        <Button full large warning style={styles.btn_alert} onPress={() => this.props.navigation.navigate('DisasterAlert')}><Text>Disaster Alert</Text></Button>
                        <Button full large warning style={styles.btn_alert} onPress={() => this.props.navigation.navigate('Prepare')}><Text>Preparation</Text></Button>
                        <Button full large warning style={styles.btn_alert} onPress={() => this.props.navigation.navigate('FirstAid')}><Text>First Aid Instruction</Text></Button>
                        <Button full large danger style={styles.btn_alert} onPress={() => this.props.navigation.navigate('Sending')}><Text>Sending Emergency Signals</Text></Button>
                        <Button full large danger style={styles.btn_alert} onPress={this.calling}><Text>Emergency call (SOS)</Text></Button>

                    </View>
                </Container>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.73)',
    },
    backGround: {
        flex: 1,
        alignSelf: 'stretch',
        width: '100%'
    },
    buttonContainer: {
        flex: 3,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    btn_alert: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 10,
    },
});
