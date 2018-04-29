import React from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class EarthquakePre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            before: [
                "Fasten shelves securely to walls, and place heavy objects on lower shelves.",
                "Store breakable items in low, closed cabinets.",
                "Hang items such as pictures and mirrors away from beds and anywhere people sit.",
                "Brace hanging light fixtures.",
                "Repair known defective electrical wiring and gas connections.",
                "Strap your water heater to studs in the wall and bolt it to the floor.",
                "Repair any large existing cracks in walls or foundations.",
                "Store poisons such as pesticides and herbicides, as well as flammable liquids, on bottoms shelves of latched cabinets.",
                "Identify safe places in each room (under sturdy furniture, against inside walls, away from glass).",
                "Locate safe places outdoors (away from buildings, trees, electrical lines, and bridges).",
                "Teach family members how to turn off gas, electricity, and water.",
                "Teach children how to dial 911 in an emergency.",
                "Have disaster supplies on hand (flashlight and extra batteries, battery operated radio, fist aid kit with manual, emergency food and drinking water, non electric can opener, cash, sturdy shoes).",
                "Develop an emergency communications plan in case family members are separated."
            ],
            during: [
                "if you are indoors, Take cover beneath a sturdy piece of furniture or against an indoor wall away from glass that might break.",
                "Stay inside! The most dangerous thing you can do during an earthquake is to try to leave.",
                "If you are outdoor, Move into the open, away from buildings, street lights, and overhead utility wires. Stay there until the shaking stops",
                "If you are in a moving vehicle Try to find a clear area away from buildings, trees, overpasses, and overhead wires.",
                "Stop quickly and stay in the vehicle.",
                "Once the shaking has stopped, proceed with caution. Bridges and ramps may have been damaged during the shaking."
            ],
            after: [
                "Be prepared for aftershocks. They may cause additional damage for hours to months after the main shock.",
                "Help injured or trapped persons within the limits of your abilities.",
                "Listen to a battery operated radio or television for emergency information.",
                "Check on the elderly and disabled, or children who may need special help.",
                "Stay out of damaged buildings!",
                "Use the telephone only for emergency calls.",
                "Clean up spilled materials.",
                "Open cabinet and closet doors cautiously.",
                "Inspect chimneys for damage, and be extremely careful when lighting fires in fireplaces. Chimney damage may lead to fires.",
                "Check utilities for damage. If you smell gas, turn off the gas and do not use electrical devices (including telephones). Stay away from broken electrical wires, and turn off the main fuse box or circuit breaker. If water pipes are damaged, do not use the toilet and avoid tap water for drinking. Use your emergency supply, and melt ice cubes for additional water."
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
                <Image source={require('../Image/earthquake.gif')} style={styles.waitingImage}/>
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