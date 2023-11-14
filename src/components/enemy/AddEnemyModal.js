import { useDispatch } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, useDisclosure, ModalCloseButton, ModalOverlay, ModalContent } from '@chakra-ui/react';
import { addEnemy } from '../../actions/characters';
import { useState } from 'react';
import EnemyForm from './EnemyForm';

const defaultEnemy = {
    name: '',
    description: '',
    initiative: 0,
    hp: 0,
    type: 'enemy'
}

function AddEnemyModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [enemy, setEnemy] = useState(
        {
            ...defaultEnemy
        }
    )

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addEnemy(enemy));
        setEnemy({ ...defaultEnemy });
        onClose();
    }

    return (
        <>
            <Button colorScheme='red' onClick={onOpen}>Add Enemy</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Enemy</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <EnemyForm enemy={enemy} setEnemy={setEnemy} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='ghost' mr={3} onClick={onClose}>
                            Cancel
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

export default AddEnemyModal;