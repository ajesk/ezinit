import { Card, CardBody, CardHeader, Heading, Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";


const CombatList = () => {
    const combatList = useSelector((state) => state.combat.characters);
    const turn = useSelector((state) => state.combat.turn);


    const buildCardList = () => {
        const list = [];
        for (var i = 0; i < combatList.length; i++) {
            var pointer = (i + turn) % combatList.length;
            const character = combatList[pointer];
            list.push(
                <Card key={i} backgroundColor={i === 0 ? 'lightblue' : 'white'} size="sm" >
                    <CardHeader>
                        <Heading size='md'>{character.name}</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>init = {character.initiative}</Text>
                    </CardBody>
                </Card>
            );
        }
        return list;
    }


    return (
        <Stack spacing='4'>
            {buildCardList()}
        </Stack>
    );
}

export default CombatList;