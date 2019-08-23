import { connect } from 'react-redux';
import { updateAction, removeAction, actionComplete } from '../actions';
import Actions from '../../actions';

const mapStateToProps = state => ({
    statement: state.statements[state.currentStatement],
    statementIndex: state.currentStatement
});

const mapDispatchToProps = (dispatch) => ({
    update: (statementIndex, actionIndex, text) => dispatch(updateAction(statementIndex, actionIndex, text)),
    remove: (statementIndex, actionIndex) => dispatch(removeAction(statementIndex, actionIndex)),
    complete: (statementIndex, actionIndex) => dispatch(actionComplete(statementIndex, actionIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(Actions);