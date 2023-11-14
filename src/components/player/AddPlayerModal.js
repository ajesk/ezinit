import { useDispatch } from 'react-redux';
import PlayerForm from './PlayerForm';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, useDisclosure, ModalCloseButton, ModalOverlay, ModalContent } from '@chakra-ui/react';
import { addPlayer } from '../../actions/characters';
import { useState } from 'react';

const defaultPlayer = {
    name: '',
    class: '',
    race: '',
    initMod: 0,
    type: 'player'
}

function AddPlayerModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [player, setPlayer] = useState(
        {
            ...defaultPlayer
        }
    )

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addPlayer(player));
        setPlayer({ ...defaultPlayer });
        onClose();
    }

    return (
        <>
            <Button colorScheme='green' onClick={onOpen}>Add Player</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Player</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <PlayerForm player={player} setPlayer={setPlayer} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='ghost' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={handleSubmit} variant='blue'>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddPlayerModal;