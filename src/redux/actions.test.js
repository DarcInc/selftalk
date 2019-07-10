import {ADD_STATEMENT, REMOVE_STATEMENT, SELECT_STATEMENT, UPDATE_STATEMENT,
    addStatement, removeStatement, selectStatement, updateStatement} from './actions';

import {ADD_EVIDENCE, UPDATE_EVIDENCE, REMOVE_EVIDENCE, 
    addEvidence, updateEvidence, removeEvidence } from './actions';

import {ADD_ACTION, UPDATE_ACTION, REMOVE_ACTION, 
    addAction, updateAction, removeAction} from './actions';

import {CHANGE_SECTION, BELIEFS_SECTION, changeSection} from './actions'; 

import {LOAD_INITIAL_DATA, loadInitialData} from './actions';

import {UPDATE_PREFERENCES, LOAD_INITIAL_PREFERENCES, updatePreferences, loadInitialPreferences} from './actions';

describe('Statements', () => {
    it('should create a new statement to add', () => {
        let action = addStatement('statement text');
        expect(action.type).toBe(ADD_STATEMENT);
        expect(action.data.statement).toBe('statement text');
    });

    it('should allow removing a statement', () => {
        let action = removeStatement(3);
        expect(action.type).toBe(REMOVE_STATEMENT);
        expect(action.data.removeIndex).toBe(3);
    });

    it('should allow selecting a statement', () => {
        let action = selectStatement(3);
        expect(action.type).toBe(SELECT_STATEMENT);
        expect(action.data.selectedIndex).toBe(3);
    });

    it('should should update a statement', () => {
        let action = updateStatement(3, 'new text');
        expect(action.type).toBe(UPDATE_STATEMENT);
        expect(action.data.statementIndex).toBe(3);
        expect(action.data.text).toBe('new text');
    });
});

describe('Evidence', () => {
    it('should create and add new evidence', () => {
        let action = addEvidence(2, 'evidence text');
        expect(action.type).toBe(ADD_EVIDENCE);
        expect(action.data.evidence).toBe('evidence text');
        expect(action.data.statementIndex).toBe(2);
    });

    it('should update existing evidence', () => {
        let action = updateEvidence(1, 3, 'newText');
        expect(action.type).toBe(UPDATE_EVIDENCE);
        expect(action.data.statementIndex).toBe(1);
        expect(action.data.evidenceIndex).toBe(3);
        expect(action.data.text).toBe('newText');
    });

    it('should allow removing evidence', () => {
        let action = removeEvidence(1, 3);
        expect(action.type).toBe(REMOVE_EVIDENCE);
        expect(action.data.statementIndex).toBe(1);
        expect(action.data.evidenceIndex).toBe(3);
    });
});

describe('Actions', () => {
    it('should create and add a new action', () => {
        let action = addAction(2, 'action text');
        expect(action.type).toBe(ADD_ACTION);
        expect(action.data.action).toBe('action text');
        expect(action.data.statementIndex).toBe(2);
    });

    it('should update an exisitng action', () => {
        let action = updateAction(1, 3, 'new text');
        expect(action.type).toBe(UPDATE_ACTION);
        expect(action.data.statementIndex).toBe(1);
        expect(action.data.actionIndex).toBe(3);
        expect(action.data.text).toBe('new text');
    });

    it('should allow removing an action', () => {
        let action = removeAction(1, 3);
        expect(action.type).toBe(REMOVE_ACTION);
        expect(action.data.statementIndex).toBe(1);
        expect(action.data.actionIndex).toBe(3);
    });
});

describe('Section', () => {
    it('should allow user to change sections', () => {
        let action = changeSection(BELIEFS_SECTION);
        expect(action.type).toBe(CHANGE_SECTION);
        expect(action.data.section).toBe(BELIEFS_SECTION);
    });
});

describe('Initial Data', () => {
    it('should load initial data', () => {
        let action = loadInitialData([{text: 'foo', evidence: [], actions: []}]);
        expect(action.type).toBe(LOAD_INITIAL_DATA);
        expect(action.data.statements).toStrictEqual(
            [{text: 'foo', evidence: [], actions: []}]
        )
    });
});

describe('Preferences', () => {
    it('should update preferences', () => {
        let action = updatePreferences({showHelp: true});
        expect(action.type).toBe(UPDATE_PREFERENCES);
        expect(action.data.preferences).toStrictEqual({showHelp: true});
    });

    it('should load initial preferences', () => {
        let action = loadInitialPreferences({showHelp: true});
        expect(action.type).toBe(LOAD_INITIAL_PREFERENCES);
        expect(action.data.preferences).toStrictEqual({showHelp: true});
    });
});