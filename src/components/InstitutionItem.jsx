import React from 'react';
import { Text, View } from "react-native";

const InstitutionItem = (props) => {
    return (
        <View>
            <Text>{props.amie}</Text>
            <Text>{props.nm_inst}</Text>
            <Text>{props.nm_prov}</Text>
        </View>
    );
}

export default InstitutionItem;