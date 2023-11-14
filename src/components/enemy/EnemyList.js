import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function EnemyList() {
    const enemies = useSelector((state) => {
        return state.characters.enemies
    });

    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Enemies</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Race</Th>
                        <Th>HP</Th>
                        <Th>Initiative</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        enemies.map((enemy) => (
                            <Tr>
                                <Td>{enemy.name}</Td>
                                <Td>{enemy.description}</Td>
                                <Td>{enemy.hp}</Td>
                                <Td>{enemy.initiative}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default EnemyList;