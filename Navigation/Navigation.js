import { StackNavigator } from 'react-navigation';
import HomeScreen from '../Pages/HomeScreen';
import FirstAid from "../Pages/FirstAid";
import SendingSignal from '../Pages/SendingSignal';
import Sos from '../Pages/Sos';
import DisasterAlert from '../Pages/DisasterAlert';
import Prepare from '../Pages/Prepare';
import GoogleMap from '../Pages/GoogleMap';
import EarthquakePre from '../Pages/EarthQuakePre';
import CyclonePre from '../Pages/CyclonePre';
import VolcanoPre from '../Pages/VolcanoPre';
import FloodPre from '../Pages/FloodPre';
import PreventBleeding from "../Pages/PreventBleeding";
const Navigation = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Natural Disaster Helper',
            headerStyle: { backgroundColor: 'white', height: 35 },
            headerTitleStyle: { color: 'black', paddingBottom: 10 },
        },
    },
    FirstAid: {
        screen: FirstAid,
        navigationOptions: {
            headerTitle: 'First Aid',
        },
    },
    DisasterAlert: {
        screen: DisasterAlert,
        navigationOptions: {
            headerTitle: 'Disaster Alert'
        },
    },
    Sending: {
        screen: SendingSignal,
        navigationOptions: {
            headerTitle: "Sending Emergency Signals"
        },
    },
    Prepare: {
        screen: Prepare,
        navigationOptions: {
            headerTitle: "Preparation"
        }
    },
    EarthQuakePre:{
        screen:EarthquakePre,
        navigationOptions: {
            headerTitle: "Earthquake Preparation"
        }
    },
    CyclonePre:{
        screen:CyclonePre,
        navigationOptions: {
            headerTitle: "Cyclone Preparation"
        }
    },
    VolcanoPre:{
        screen:VolcanoPre,
        navigationOptions: {
            headerTitle: "Volcano Preparation"
        }
    },
    FloodPre:{
        screen:FloodPre,
        navigationOptions: {
            headerTitle: "Flood Preparation"
        }
    },
    Sos: {
        screen: Sos,
        navigationOptions: {
            headerTitle: "Emergency Call"
        }
    },
    GoogleMap: {
        screen: GoogleMap,
        navigationOptions: {
            headerTitle: "Map"
        }
    },
    PreventBleeding: {
        screen: PreventBleeding,
        navigationOptions: {
            headerTitle: "Prevent Bleeding"
        }
    }
})
export default Navigation;