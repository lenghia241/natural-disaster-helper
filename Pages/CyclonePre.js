import React from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class CyclonePre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            before: [
                "Check the house, secure loose tiles and repair doors and windows.",
                "Remove dying trees near the house and anchor removable objects which can fly in cyclonic winds.",
                "Keep ready hurricane lantern filled with kerosene, battery operated torches and sufficient dry cells.",
                "Keep dry non-perishable food ready for emergency.",
                "Listen to All India Radio for forecasts and warnings",
                "Share information but don't spread rumours.",
                "Evacuate when the Government authorities instruct after closing the doors and windows securely. Don't stay back.",
                "Carry extra food, stove, drinking water, torch, battery, transistor, and essential medicine while evacuating.",
                "Switch off the main switch of your house before evacuation."
            ],
            during: [
                "Take care of the old and young.",
                "All family members remain close.",
                "Switch of all electrical appliances.",
                "Stay in an empty room.",
                "Movable items should be kept securely tied.",
                "Try to help your neighbours, but don't go out during cyclone."
            ],
            after: [
                "Those who shifted to the cyclone centre must remain there till instructions are received.",
                "Strictly avoid loose electrical wires after the cyclone.",
                "Beware of snakes and other animals immediately after the cyclone.",
                "Clear debris and carcasses from/near the premise after the cyclone.",
                "Report losses truthfully and accurately to the authorities."
            ],
            selectedState:[]
        }
    }
onPressBefore=()=>{
    this.setState({
        selectedState:this.state.before
    })
}
onPressDuring=()=>{
    this.setState({
        selectedState:this.state.during
    })
}
onPressAfter=()=>{
    this.setState({
        selectedState:this.state.after
    })
}
    render() {
        var {selectedState}=this.state;
        return (
            <View style={styles.container}>
                <View style={styles.buttonsCover}>
                <View><Button onPress={this.onPressBefore} title="Before"></Button></View>
                <View><Button onPress={this.onPressDuring} title="During"></Button></View>
                <View><Button onPress={this.onPressAfter} title="After"></Button></View>
                </View>
            {
                selectedState.length==0
                ?
                <Image source={require('../Image/cyclone.gif')} style={styles.waitingImage}/>
                :
                <FlatList
                    keyExtractor={() => Math.random().toString(36).substr(2, 9)}
                    data={selectedState}
                    renderItem={({item,index})=>
                    <View style={{justifyContent: 'center', padding: 10}}><Text style={styles.selectedState}>{item}</Text></View>
                    }
                />}    
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
    buttonsCover:{
        alignItems:"center",
        flexDirection:"row"
    },
    selectedState:{
        lineHeight:20,
        marginTop:10, 
        flexGrow: 1,
        flex: 1,
    },
    waitingImage: {
        width: 300,
        height: 400,
        marginTop: 60,
    }
});