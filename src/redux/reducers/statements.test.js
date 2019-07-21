import statements from './statements';
import { addStatement, removeStatement, updateStatement, addEvidence, addAction,
    loadInitialData, updateEvidence, removeEvidence, updateAction, removeAction } from '../actions'

describe('Statements', () => {
    describe('Adding statements', () => {
        it('should add a statement to an empty list of statements', () => {
            let state = [];
            let action = addStatement('my statement');

            let newState = statements(state, action);
            expect(newState).toStrictEqual([{
                text: 'my statement',
                evidence: [],
                actions: []
            }]);
        });

        it('should add a statement to an existing list of statements', () => {
            let state = [{title: 'old statement', evidence: [], actions: []}];
            let action = addStatement('my statement');

            let newState = statements(state, action);
            expect(newState.length).toBe(2);
            expect(newState[1]).toStrictEqual({
                text: 'my statement',
                evidence: [],
                actions: []
            })
        });
    });

    const generateStatementList = () => {
        return [
            {text: 'statement 1', evidence: [], actions: []},
            {text: 'statement 2', evidence: [], actions: []},
            {text: 'statement 3', evidence: [], actions: []}
        ]
    };

    describe('Removing a statement', () => {
        it('should allow removing a statement', () => {
            let state = generateStatementList();
            let action = removeStatement(1);

            let newState = statements(state, action);
            expect(newState.length).toBe(2);
            expect(newState[0].text).toBe('statement 1');
            expect(newState[1].text).toBe('statement 3');
        });
    });

    describe('Updating a statement', () => {
        it('should update the statement text', () => {
            let state = generateStatementList();
            let action = updateStatement(1, 'new text');

            let newState = statements(state, action);
            expect(newState.length).toBe(3);
            expect(newState[1].text).toBe('new text');
        });
    });
});

describe('Evidence', () => {
    const generateStatementList = () => {
        return [
            {text: 'statement 1', evidence: [], actions: []},
            {text: 'statement 2', evidence: ['evidence 1', 'evidence 2', 'evidence 3'], actions: []},
            {text: 'statement 3', evidence: [], actions: []}
        ]
    };

    it('should add new evidence', () => {
        let state = generateStatementList();
        let action = addEvidence(0, 'new evidence');

        let newState = statements(state, action);
        expect(newState.length).toBe(3);
        expect(newState[0].evidence.length).toBe(1);
        expect(newState[0].evidence).toStrictEqual(['new evidence']);
    });

    it('should update existing evidence', () => {
        let state = generateStatementList();
        let action = updateEvidence(1, 0, 'new text');

        let newState = statements(state, action);
        expect(newState.length).toBe(3);
        expect(newState[1].evidence.length).toBe(3);
        expect(newState[1].evidence[0]).toBe('new text');
    });

    it('should remove an existing evidence', () => {
        let state = generateStatementList();
        let action = removeEvidence(1, 2)

        let newState = statements(state, action);
        expect(newState.length).toBe(3);
        expect(newState[1].evidence.length).toBe(2);
        expect(newState[1].evidence[0]).toBe('evidence 1');
        expect(newState[1].evidence[1]).toBe('evidence 2');
    })
});

describe('Actions', () => {
    const actionList = () => {
        return [
            {
                text: 'action 1',
                frequency: 'once'
            },
            {
                text: 'action 2',
                frequency: 'infrequently'
            },
            {
                text: 'action 3',
                frequency: 'frequently'
            }
        ]
    };

    const generateStatementList = () => {
        return [
            {text: 'statement 1', evidence: [], actions: []},
            {text: 'statement 2', evidence: [], actions: actionList()},
            {text: 'statement 3', evidence: [], actions: []}
        ]
    };

    it('should add new actions', () => {
        let state = generateStatementList();
        let action = addAction(0, {text: 'take an action', frequency: 'once'});

        let newState = statements(state, action);
        expect(newState.length).toBe(3);
        expect(newState[0].actions.length).toBe(1);
        expect(newState[0].actions[0]).toStrictEqual({text: 'take an action', frequency: 'once'});
    });

    it('should update an action', () => {
        let state = generateStatementList();
        let action = updateAction(1, 0, {text:'new text', frequency:'frequently'});

        let newState = statements(state, action);
        expect(newState.length).toBe(3);
        expect(newState[1].actions.length).toBe(3);
        expect(newState[1].actions[0]).toStrictEqual({text:'new text', frequency:'frequently'});
    });

    it('should remove an existing action', () => {
        let state = generateStatementList();
        let action = removeAction(1, 1);

        let newState = statements(state, action);
        expect(newState.length).toBe(3);
        expect(newState[1].actions.length).toBe(2);
        expect(newState[1].actions[0]).toStrictEqual({text: 'action 1',frequency: 'once'});
        expect(newState[1].actions[1]).toStrictEqual({text: 'action 3',frequency: 'frequently'});
    });
});

describe('Initial Data', () => {
    it('should load new initial data', () => {
        let state = [];
        let action = loadInitialData([{title: 'foo', evidence:[], actions:[]}]);

        let newState = statements(state, action);
        expect(newState.length).toBe(1);
        expect(newState[0]).toStrictEqual({title: 'foo', evidence:[], actions:[]});
    });
});