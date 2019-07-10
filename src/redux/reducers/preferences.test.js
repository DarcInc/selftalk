import preferences from './preferences';
import { updatePreferences, loadInitialPreferences } from '../actions';

describe('Update Preferences', () => {
    it('should update preferences', () => {
        let state = {showHelp: true};
        let action = updatePreferences({showHelp: false});

        let newState = preferences(state, action);
        expect(newState.showHelp).toBe(false);
    });
})

describe('Load Initial Preferences', () => {
    it('should load initial preferences', () => {
        let state = {};
        let action = loadInitialPreferences({showHelp: true});

        let newState = preferences(state, action);
        expect(newState.showHelp).toBe(true);
    });
});