import React from 'react';
import { View } from "react-native";
import StyleText from './StyleText';

const InstitutionStats = (props) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
            <StyleText fontWeight='bold'>Matemática</StyleText>
            <StyleText>{props.imat}</StyleText>
        </View>
        <View>
            <StyleText fontWeight='bold'>Lenguaje</StyleText>
            <StyleText>{props.ilyl}</StyleText>
        </View>
        <View>
            <StyleText fontWeight='bold'>Ciencias</StyleText>
            <StyleText>{props.icn}</StyleText>
        </View>
        <View>
            <StyleText fontWeight='bold'>Estudios</StyleText>
            <StyleText>{props.ies}</StyleText>
        </View>
    </View>
)

const InstitutionItem = (props) => {
    return (
        <View>
            <StyleText fontSize='subheading' fontWeight='bold'>Código: {props.amie}</StyleText>
            <StyleText color='primary'>Institución: {props.nm_inst}</StyleText>
            <StyleText color='secondary'>Provincia: {props.nm_prov}</StyleText>
            <StyleText>Ciudad: {props.nm_prov}</StyleText>
            <StyleText>Calificaciones:{props.codigo}</StyleText>
            <StyleText fontWeight='bold'>NOTAS</StyleText>
            <InstitutionStats {...props} />
        </View>
    );
}

export default InstitutionItem;