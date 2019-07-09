import section from './section';
import { changeSection, BELIEFS_SECTION, ACTIONS_SECTION } from '../actions';

describe('Section', () => {
    it('should change sections', () => {
        let state = BELIEFS_SECTION;
        let action = changeSection(ACTIONS_SECTION);

        let newState = section(state, action);
        expect(newState).toBe(ACTIONS_SECTION);
    })
});