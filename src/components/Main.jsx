import React from 'react';
import { View } from 'react-native';
import Constanst from 'expo-constants';
import InstitutionList from "./InstitutionList";

const Main = () => {
    return (
        <View styles={{ marginTop: Constanst.statusBarHeight, flexGrow: 1 }}>
            <InstitutionList />
        </View>
    );
}

export default Main;