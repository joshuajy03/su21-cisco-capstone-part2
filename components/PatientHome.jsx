import React from "react";
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import PatientProfile from "./PatientProfile.jsx";
import { Button } from 'react-native-paper';
import { Header } from "react-native/Libraries/NewAppScreen";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function PatientHome( {navigation} ) {
    return (
        <React.Fragment>
        <View>
        <Button icon="menu" labelStyle={{ fontSize: 40 }} style={{width: 36, height: 40, marginTop: 40, marginLeft: 8}} onPress={() => navigation.openDrawer()} />
        <Text>hello</Text>
            

        </View>
        </React.Fragment>
    );
}

export default PatientHome;