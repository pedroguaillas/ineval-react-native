import React from 'react';
import { FlatList, Text } from 'react-native';
import InstitutionItem from './InstitutionItem';
import useInstitutions from '../hooks/useInstitutions';

const InstitutionList = () => {
    const { institutions } = useInstitutions()
    return (
        <FlatList
            data={institutions}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: inst }) => (
                <InstitutionItem  {...inst} />
            )}
        />
    );
}

export default InstitutionList;