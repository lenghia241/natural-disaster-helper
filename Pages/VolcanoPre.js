import React from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class VolcanoPre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            before: [
              "Each one should be aware of the dangers that volcanic eruptions pose to lives and be prepared to face whatever circumstances the eruption may bring.",
              "Prepare all necessary things to bring once evacuation is needed. Those in danger zones are warned when to evacuate. Once given the signal refrain from saying you will be all right. Refusing to evacuate will pose more serious problems.",
              "Store as much food, water, light sources and batteries that are very useful in case of emergency.",
            "Volcanic eruptions have ash falls so be prepared for masks or anything to cover nose and mouth.",
               "Prioritize the safety of kids before other things. If you have relatives or friends who are far from the volcano, take your children there until such time that your place is safe."
            ],
            during: [
                "Avoid all low-lying places because lava flows and mudflows are more likely to pass here",
                "Seek cover in case of ash falls rock falls.",
                "Use masks and cover your mouth and nose to avoid breathing in ashes.",
                " If you are inside a house; close all doors and windows to avoid ashes from getting inside.",
                "Always stay indoors.",
                "Stay in the evacuation center until further instructions. Do not attempt to leave the place unless told to do",
                "Keep a watchful eye on the kids because they might be tempted to go out and see what’s going on outside."
            ],
            after: [
                "Go back to your house but leave the kids behind someone who can take care of them while you check your house.",
                "Clean everything around and check all damages incurred.",
                "Use masks while cleaning ash and other debris.",
                "Wait for further announcements related to the volcano activities.",
                "Make sure that your house is still safe for all of you."
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
                <Image source={require('../Image/Volcano.gif')} style={styles.waitingImage}/>
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