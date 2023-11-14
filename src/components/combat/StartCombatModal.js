import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, useDisclosure, ModalCloseButton, ModalOverlay, ModalContent, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { addRolls, zipParticipants } from './combatUtil';
import { startCombat } from '../../actions/combat';
import { combatPage } from '../../actions/page';

function StartCombatModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    const players = useSelector((state) => {
        return state.characters.players;
    });
    const enemies = useSelector((state) => {
        return state.characters.enemies;
    });

    const [rolls, setRoll] = useState([]);

    const handleSubmit = () => {
        const participants = zipParticipants(addRolls(players, rolls), [...enemies]);
        dispatch(startCombat(participants));
        dispatch(combatPage());
        onClose();
    }

    const saveRoll = (e, key) => {
        e.persist();
        setRoll((init) => {
            const update = [ ...init ];
            update[key] = e.target.value;
            return update;
        });
    };

    const open = () => {
        setRoll(new Array(players.lenght).fill(0));
        onOpen();
    }

    return (
        <>
            <Button colorScheme='green' onClick={open}>Start Combat</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Roll for initiative!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {
                            rolls.map((player, i) => (
                                <FormControl key={i}>
                                    <FormLabel>{player.name}</FormLabel>
                                    <Input
                                        type="number"
                                        value={rolls[i].initiative}
                                        onChange={(e) => saveRoll(e, i)}
                                        required
                                    />
                                </FormControl>
                            ))
                        }
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='ghost' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit} variant='green'>
                            Begin
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default StartCombatModal;