import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { progressCombat, undo } from '../../actions/combat';

function CombatHeader() {
    const dispatch = useDispatch();
    const progress = () => dispatch(progressCombat())
    const revert = () => dispatch(undo())
    

    return (
        <>
            <Button colorScheme='green' onClick={progress}>Next</Button>
            <Button colorScheme='red' onClick={revert}>Back</Button>
        </>
    );
}

export default CombatHeader;