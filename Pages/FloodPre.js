import React from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class FloodPre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            before: [
                "Avoid building in a floodplain unless you elevate and reinforce your home.",
                "Elevate the furnace, water heater, and electric panel if susceptible to flooding.",
                "Install 'check valves' in sewer traps to prevent flood water from backing up into the drains of your home",
                "Construct barriers (levees, beams, floodwalls) to stop floodwater from entering the building.",
                "Seal walls in basements with waterproofing compounds to avoid seepage.",
                "Listen to the radio or television for information"
            ],
            during: [
                "Be aware that flash flooding can occur. If there is any possibility of a flash flood, move immediately to higher ground. Do not wait for instructions to move.",
                "Be aware of streams, drainage channels, canyons, and other areas known to flood suddenly. Flash floods can occur in these areas with or without such typical warnings as rain clouds or heavy rain.",
                "Secure your home. If you have time, bring in outdoor furniture. Move essential items to an upper floor.",
                "Turn off utilities at the main switches or valves if instructed to do so. Disconnect electrical appliances. Do not touch electrical equipment if you are wet or standing in water.",
                "Do not walk through moving water. Six inches of moving water can make you fall. If you have to walk in water, walk where the water is not moving. Use a stick to check the firmness of the ground in front of you.",
                "Do not drive into flooded areas. If floodwaters rise around your car, abandon the car and move to higher ground if you can do so safely. You and the vehicle can be quickly swept away."
            ],
            after: [
               " Listen for news reports to learn whether the community’s water supply is safe to drink.",
                "Avoid floodwaters; water may be contaminated by oil, gasoline, or raw sewage. Water may also be electrically charged from underground or downed power lines.",
                "Avoid moving water.",
                "Be aware of areas where floodwaters have receded. Roads may have weakened and could collapse under the weight of a car.",
                "Stay away from downed power lines, and report them to the power company.",
                "Return home only when authorities indicate it is safe.",
                "Stay out of any building if it is surrounded by floodwaters.",
                "Use extreme caution when entering buildings; there may be hidden damage, particularly in foundations.",
                "Service damaged septic tanks, cesspools, pits, and leaching systems as soon as possible. Damaged sewage systems are serious health hazards."
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
                <Image source={require('../Image/flood.gif')} style={styles.waitingImage}/>
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