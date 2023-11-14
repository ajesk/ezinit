import { FormControl, FormLabel, Input } from '@chakra-ui/react';

function EnemyForm({enemy, setEnemy}) {
    
    const saveStat = (e, key) => {
        e.persist();
        setEnemy((enemy) => {
            const update = { ...enemy };
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
                    value={enemy.name}
                    onChange={(e) => saveStat(e, 'name')}
                    required
                />
            </FormControl>
            <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                    type="text"
                    id="description"
                    value={enemy.description}
                    onChange={(e) => saveStat(e, 'description')}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Initiative</FormLabel>
                <Input
                    type="text"
                    id="initiative"
                    value={enemy.initiative}
                    onChange={(e) => saveStat(e, 'initiative')}
                />
            </FormControl>
            <FormControl>
                <FormLabel>HP</FormLabel>
                <Input
                    type="text"
                    id="hp"
                    value={enemy.hp}
                    onChange={(e) => saveStat(e, 'hp')}
                />
            </FormControl>
        </>
    );
}

export default EnemyForm;