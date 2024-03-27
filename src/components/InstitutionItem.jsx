import React from 'react';
import { View } from "react-native";
import StyleText from './StyleText';

const InstitutionItem = (props) => {
    return (
        <View>
            <StyleText fontSize='subheading' fontWeight='bold'>Código: {props.amie}</StyleText>
            <StyleText>Institución: {props.nm_inst}</StyleText>
            <StyleText color='primary'>Provincia: {props.nm_prov}</StyleText>
            <StyleText>Ciudad: {props.nm_prov}</StyleText>
            <StyleText fontWeight='bold'>Cod2:{props.codigo}</StyleText>
            <StyleText>Matemática: {props.imat}</StyleText>
            <StyleText>Lenguaje: {props.ilyl}</StyleText>
            <StyleText>Ciencias: {props.icn}</StyleText>
            <StyleText>Estudios: {props.ies}</StyleText>
        </View>
    );
}

export default InstitutionItem;