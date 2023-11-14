import combat from "./combat";


describe('reducers/combat.test.js', () => {
    describe('default', () => {
        it('should return the base state for unknown action', () => {
            const result = combat(undefined, { type: 'UNKNOWN' });

            expect(result.characters.length).toBe(0);
            expect(result.turn).toBe(0);
        });
    });
    describe('START', () => {
        const baseMessage = {
            type: 'START'
        }
        it('should apply character list to state', () => {
            const characters = [{ name: 'char 1' }, { name: 'char 2' }];
            const message = {
                ...baseMessage,
                payload: characters
            };
            const result = combat(undefined, message);
            expect(result.characters.length).toBe(2);
            expect(result.turn).toBe(0);
        });
    });
    describe('DISABLE and REVIVE', () => {
        const disable = {
            type: 'DISABLE'
        };

        const revive = {
            type: 'REVIVE'
        };

        it('should disable a character', () => {
            const state = {
                characters: [{
                    name: 'char 1'
                }, {
                    name: 'char 2'
                }],
                turn: 0
            };

            const result = combat(state, { ...disable, payload: 0 });

            expect(result.characters[0].disabled).toBeTruthy();
        });
        it('should revive a disabled character', () => {
            const state = {
                characters: [{
                    name: 'char 1'
                }, {
                    name: 'char 2'
                }],
                turn: 0
            };

            combat(state, { ...disable, payload: 1 });
            const result = combat(state, { ...revive, payload: 1 });

            expect(result.characters[0].disabled).toBeFalsy();
        });
    });
    describe('PROGRESS and UNDO', () => {
        const progress = { type: 'PROGRESS' }
        const undo = { type: 'UNDO' };
        const state = {
            characters: [{
                name: 'char 1'
            }, {
                name: 'char 2'
            }, {
                name: 'char 3'
            }],
            turn: 0
        };

        it('should progress to next turn', () => {
            let result = combat(state, progress);
            expect(result.turn).toBe(1);
            result = combat(result, progress);
            expect(result.turn).toBe(2);
        });
        it('should loop around when turn reaches the end', () => {
            let result = { ...state };

            for (let i = 0; i < state.characters.length; i++) {
                result = combat(result, progress);
            }
            expect(result.turn).toBe(0);
        });
        it('should undo the last move', () => {
            let result = combat(state, progress);
            result = combat(result, undo);
            expect(result.turn).toBe(0);
        });
        it('should loop around to last element on undo', () => {
            let result = combat(state, undo);
            expect(result.turn).toBe(state.characters.length - 1);
        });
    });
});