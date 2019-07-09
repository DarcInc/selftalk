import { selectStatement } from '../actions';
import reducer from './currentStatement';

describe('Current Statement', () => {
    it('should select a new current statement', () => {
        let state = -1;
        let action = selectStatement(5);

        let newState = reducer(state, action);
        expect(newState).toBe(5);
    });
});