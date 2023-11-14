import { Flex } from '@chakra-ui/react';
import CombatList from '../components/combat/CombatList';


function CombatPage() {

    return (
        <Flex padding="4em">
            <CombatList />
        </Flex>
    );
}

export default CombatPage;