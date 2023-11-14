import { Box, Flex, Heading } from '@chakra-ui/react';
import PlayerList from '../components/player/PlayerList';
import EnemyList from '../components/enemy/EnemyList';


function CharacterPage() {

    return (
        <Flex>
            <Box margin="1em" flex={1}>
                <Heading size={"md"}>Players</Heading>
                <PlayerList />
            </Box>
            <Box margin="1em" flex={1}>
                <Heading size={"md"}>Enemies</Heading>
                <EnemyList />
            </Box>
        </Flex>
    );
}

export default CharacterPage;