import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Swiper from 'react-native-swiper';
export default class PreventBleeding extends React.Component {
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide1}>
                    <View  style={{flex:5,width:"100%"}} ><Image style={{width:"100%",height:"100%"}}  source={require('../Image/step1bleeding.png')}/></View>
                    <View  style={{flex:2, justifyContent: 'center',alignItems: 'center',flexDirection:"column"}} > 
                    <Text style={styles.instructHead}>1.Apply primary pressure with hands</Text>
                    <Text style={styles.instructContent}>Expose to find where the bleedind is coming from and apply FIRM,STEADY PRESSURE to the bleeding site with both hands if possible</Text>
                    </View>
                </View>
                <View style={styles.slide2}>
                <View  style={{flex:5,width:"100%"}} ><Image style={{width:"100%",height:"100%"}}  source={require('../Image/step2bleeding.png')}/></View>
                    <View  style={{flex:2, justifyContent: 'center',alignItems: 'center',flexDirection:"column"}} > 
                    <Text style={styles.instructHead}>2.Apply dressing and press</Text>
                    <Text style={styles.instructContent}>Expose to find where the bleedind is coming from and apply FIRM,STEADY PRESSURE to the bleeding site with bandages or clothing</Text>
                    </View>
                </View>
                <View style={styles.slide3}>
                <View  style={{flex:5,width:"100%"}} ><Image style={{width:"100%",height:"100%"}}  source={require('../Image/step3bleeding.png')}/></View>
                    <View  style={{flex:2, justifyContent: 'center',alignItems: 'center',flexDirection:"column"}} > 
                    <Text style={styles.instructHead}>3.Apply Tourniquets</Text>
                    <Text style={styles.instructContent}>If the bleeding does not stop, place a tourniquet 2-3 inches closer to the torso from the bleeding. The tourniquet may be applied and secured over clothing</Text>
                    </View>
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      flexDirection:"column"
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    instructHead:{
        fontSize:20,
        fontWeight:"600",
        justifyContent: 'center',
    },
    
    instructContent:{
        fontSize:15,
        justifyContent: 'center',
        lineHeight:20,
        padding:20
    },
});