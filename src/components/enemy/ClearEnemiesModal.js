import { useDispatch } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, useDisclosure, ModalCloseButton, ModalOverlay, ModalContent, Text } from '@chakra-ui/react';
import { clearEnemies } from '../../actions/characters';

function ClearEnemiesModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(clearEnemies());
        onClose();
    }

    return (
        <>
            <Button colorScheme='red' onClick={onOpen}>Clear Enemies</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Clear Enemies</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Are you sure you want to clear all enemies? This cannot be undone.</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='ghost' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit} variant='red'>
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ClearEnemiesModal;