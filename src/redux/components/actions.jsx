import { connect } from 'react-redux';
import { updateAction, removeAction } from '../actions';
import Actions from '../../actions';

const mapStateToProps = state => ({
    statement: state.statements[state.currentStatement],
    statementIndex: state.currentStatement
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    update: (statementIndex, actionIndex, text) => dispatch(updateAction(statementIndex, actionIndex, text)),
    remove: (statementIndex, actionIndex) => dispatch(removeAction(statementIndex, actionIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(Actions);