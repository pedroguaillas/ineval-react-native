import React from 'react';
import { FlatList } from 'react-native';
import InstitutionItem from './InstitutionItem';
import InstitutionHook from '../hooks/InstitutionHook.js';

const InstitutionList = () => {
    const { institucions } = InstitutionHook();
    return (
        <FlatList
            data={institucions}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: inst }) => (
                <InstitutionItem key={`codigo${inst.codigo}`} />
            )}
        />
    );
}

export default InstitutionList;