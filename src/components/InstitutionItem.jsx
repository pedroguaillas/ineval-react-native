import React from 'react';
import { Text, View } from "react-native";

const InstitutionItem = (props) => {
    return (
        <View>
            <Text>{props.amie}</Text>
            <Text>{props.nm_inst}</Text>
            <Text>{props.nm_prov}</Text>
            <Text>{props.nm_prov}</Text>
            <Text>{props.codigo}</Text>
            <Text>{props.imat}</Text>
            <Text>{props.ilyl}</Text>
            <Text>{props.icn}</Text>
            <Text>{props.ies}</Text>
        </View>
    );
}

export default InstitutionItem;