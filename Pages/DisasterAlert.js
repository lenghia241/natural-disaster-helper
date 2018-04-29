import React from 'react';
import { StyleSheet, View, Alert, FlatList, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import { StackNavigator } from 'react-navigation';

import call from 'react-native-phone-call';
const args = {
    number: '+123456789', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}

export default class DisasterAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            crises: []
        }
    }

    componentDidMount() {
        const url = 'https://api.sigimera.org/v1/crises?auth_token=b583UEoK4HYEcA1TvfCS';
        fetch(url)
            .then((respon) => respon.json())
            .then((responJson) => {
                this.setState({
                    crises: responJson
                })
            })
            .catch((error) => {
                Alert.alert("Go back")
            })
    }

    calling = () => {
        return call(args).catch(console.error);
    }

    choosingLogo = (type) => {
        if (type === "earthquake") {
            return require('../Image/earthquake.png');
        }
        else if (type === "cyclone") {
            return require('../Image/cyclone.png');
        }
        else if (type === 'flood') {
            return require('../Image/flood.png');
        }
        else {
            return require('../Image/volcano.png');
        }
    }


    findMagnitude = (type, string) => {
        if (type === "earthquake") {
            return string.slice(string.indexOf("Magnitude"));
        }
        else if (type === "cyclone") {
            return string.slice(string.indexOf("maximum wind speed"), string.indexOf("km/h") + 4);
        }
        else if (type === 'flood') {
            return string.slice(string.indexOf("caused"));
        }
        else {
            return "";
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={() => Math.random().toString(36).substr(2, 9)}
                    data={this.state.crises}
                    renderItem={({ item, index }) =>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate("GoogleMap", { long: item.foaf_based_near[0], lat: item.foaf_based_near[1], img: this.choosingLogo(item.dc_subject[0]) })}>
                            <View style={styles.listStyle}>
                                <Image style={styles.logo} source={this.choosingLogo(item.dc_subject[0])}></Image>
                                <View style={styles.infor}>
                                    <Text style={styles.disaster} key={index}>{item.dc_subject[0].charAt(0).toUpperCase() + item.dc_subject[0].slice(1)}</Text>
                                    <Text style={styles.date}>Date: {item.dc_date}</Text>
                                    <Text style={styles.country}>Country: {item.gn_parentCountry[0]}</Text>
                                    <Text style={styles.severity}>Severity: {this.findMagnitude(item.dc_subject[0], item.dc_description)}</Text>
                                </View>
                                <Button transparent style={styles.btn_showMap} onPress={() => this.props.navigation.navigate("GoogleMap", { long: item.foaf_based_near[0], lat: item.foaf_based_near[1], img: this.choosingLogo(item.dc_subject[0]) })}><Text>Show</Text></Button>
                            </View>
                        </TouchableHighlight>
                    }
                />
                <Footer>
                    <FooterTab>
                        <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name="apps"/>
                            <Text>Home</Text>
                        </Button>
                        <Button vertical active onPress={() => this.props.navigation.navigate('DisasterAlert')}>
                            <Icon name="pulse" />
                            <Text>Alert</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Sending')}>
                            <Icon active name="navigate"/>
                            <Text>Signal</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" onPress={this.calling}/>
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
        backgroundColor: '#fff'
    },
    listStyle: {
        flexDirection: "row",
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: "black",
        height: 150,
        alignItems: 'center',
        marginRight: 60
    },
    logo: {
        height: 90,
        width: 90
    },
    infor: {
        flexDirection: "column",
        marginRight: 10
    },
    disaster: {
        fontSize: 20,
        color: "black",
        fontWeight: "600",
        height: '25%',
        marginTop: 10
    },
    date: {
        height: '20%'
    },
    country: {
        height: '20%'
    },
    severity: {
        height: '20%'
    },
    btn_showMap: {
        position: "absolute",
        right: 0,
        top: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
});