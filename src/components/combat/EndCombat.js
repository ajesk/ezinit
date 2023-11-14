import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { characterPage } from '../../actions/page';

function EndCombat() {
    const dispatch = useDispatch();
    const endCombat = () => dispatch(characterPage());

    return (
        <Button colorScheme='red' onClick={endCombat}>End Combat</Button>
    );
}

export default EndCombat;