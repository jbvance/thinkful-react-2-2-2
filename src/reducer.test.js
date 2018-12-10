import hotColdReducer from './reducer';
import { generateAuralUpdate, restartGame, makeGuess } from './actions';

describe('hotColdReducer', () => {
    const guesses = []
    const feedback = 'Make your guess!';
    const auralStatus = '';
    const correctAnswer = Math.round(Math.random() * 100) + 1;

    it('Should set the initial state when nothing is passed in', () => {
        const state = hotColdReducer(undefined, {type: '__UNKNOWN'});
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual(feedback);
        expect(state.auralStatus).toEqual(auralStatus);
        expect(parseInt(correctAnswer)).toBeGreaterThan(0);
        expect(parseInt(correctAnswer)).toBeLessThan(101);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = hotColdReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    it('Should make guess', () => {
        let state;
        const guess = 75;
        state = hotColdReducer(state, makeGuess(guess));
       expect(state.guesses).toEqual([guess]);
    });

    it ('should restart game', () => {
        let state;
        const correctAnswer = 51
        state = hotColdReducer(state, restartGame(correctAnswer));
        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer
        }) ;
    });
});


