import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import MapView from 'react-native-maps'
import {} from 'react-native/Libraries/NewAppScreen';

const App = () => {
    const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
    return (
        <MapView style={{flex: 1}} region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }} showsUserLocation={true}/>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#ffffff"
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        flex:1,
        backgroundColor: "#ffffff"
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    }
});

export default App;
