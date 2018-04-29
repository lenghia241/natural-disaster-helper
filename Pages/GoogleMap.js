import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { MapView } from 'expo';
export default class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: this.props.navigation.state.params.lat,
            longitude: this.props.navigation.state.params.long,
            image: this.props.navigation.state.params.img,
            crisisList: []
        }
    }
    render() {
        return (
            <View>
                <MapView
                    style={{ height: "100%" }}
                    initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: Math.max(0, this.state.latitude),
                        longitudeDelta: Math.max(0, this.state.longitude)
                    }}>
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude
                        }} title="s"
                    ><Image style={{ width: 60, height: 60 }} source={this.state.image}></Image>
                    </MapView.Marker>
                </MapView>
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