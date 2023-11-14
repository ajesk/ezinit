import { zipParticipants } from "./combatUtil";


describe('combatUtil.test.js zipParticipants', () => {
    const enemiesSeed = [{
        name: 'Goblin 1',
        description: 'Door',
        initiative: 12,
        hp: 12,
        type: 'enemy'
    }];
    const playersSeed = [{
        name: 'Tralen',
        race: 'Gnome',
        class: 'Wizard',
        initMod: 1,
        roll: 10,
        type: 'player'
    }]

    it('should zip together players and enemies', () => {
        const enemies = [...enemiesSeed];
        const players = [...playersSeed];
        const result = zipParticipants(players, enemies);

        expect(result.length).toBe(enemies.length + players.length);
    });
    it('should add player roll and mod together', () => {
        const enemies = [];
        const players = [...playersSeed];
        const result = zipParticipants(players, enemies);
        const playerBefore = players[0];
        const initValues = playerBefore.initMod + playerBefore.roll;
        const initiative = result[0].initiative;

        expect(initiative).toBe(initValues);
    });
    it('should sort participants by initiative value', () => {
        const enemies = [...enemiesSeed];
        const players = [...playersSeed];
        const result = zipParticipants(players, enemies);

        let lastInit = 999;
        for (let i = 0; i < result.length; i++) {
            const currentInit = result[i].initiative; 
            expect(currentInit).toBeLessThan(lastInit);
            lastInit = currentInit;
        }
    });
    it('should let players take precedence when initiative values are equal', () => {
        const enemies = [...enemiesSeed];
        const players = [...playersSeed];
        enemies[0].initiative = 11;

        const result = zipParticipants(players, enemies);
        expect(result[0].type).toBe('player');
    });
});