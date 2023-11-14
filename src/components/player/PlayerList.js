import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function PlayerList() {
    const players = useSelector((state) => state.characters.players);

    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Players</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Race</Th>
                        <Th>Class</Th>
                        <Th>Initiative</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        players.map((player) => (
                            <Tr>
                                <Td>{player.name}</Td>
                                <Td>{player.race}</Td>
                                <Td>{player.class}</Td>
                                <Td>{player.initMod}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default PlayerList;