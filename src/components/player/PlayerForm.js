import { FormControl, FormLabel, Input } from '@chakra-ui/react';

function PlayerForm({player, setPlayer}) {
    
    const saveStat = (e, key) => {
        e.persist();
        setPlayer((player) => {
            const update = { ...player };
            update[key] = e.target.value;
            return update;
        });
    };

    return (
        <>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                    type="text"
                    id="name"
                    value={player.name}
                    onChange={(e) => saveStat(e, 'name')}
                    required
                />
            </FormControl>
            <FormControl>
                <FormLabel>Race</FormLabel>
                <Input
                    type="text"
                    id="race"
                    value={player.race}
                    onChange={(e) => saveStat(e, 'race')}
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="class">Class</FormLabel>
                <Input
                    type="text"
                    id="class"
                    value={player.class}
                    onChange={(e) => saveStat(e, 'class')}
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="init-mod">Initiative Modifier</FormLabel>
                <Input
                    type="text"
                    id="init-mod"
                    value={player.initMod}
                    onChange={(e) => saveStat(e, 'initMod')}
                />
            </FormControl>
        </>
    );
}

export default PlayerForm;