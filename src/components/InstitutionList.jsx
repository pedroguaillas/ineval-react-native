import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import InstitutionItem from './InstitutionItem';

const InstitutionList = () => {
    const [institutions, setInstitutions] = useState(null)

    const fetchInstitutions = async () => {
        const response = await globalThis.fetch('https://inca.evaluacion.gob.ec/api/wssest/amie/01B00020?param1=PRUEBA&param2=ineval2024');
        const json = await response.json()
        setInstitutions(json)
    }

    useEffect(() => {
        fetchInstitutions()
    }, [])

    const insdata = institutions

    return (
        <FlatList
            data={insdata}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: inst }) => (
                <InstitutionItem {...inst} />
            )}
        />
    );
}

export default InstitutionList;