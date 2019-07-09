import { connect } from 'react-redux';
import { removeStatement, updateStatement } from '../actions';
import StatementEditor from '../../statementEditor';

const mapStateToProps = (state) => ({
    selectedIndex: state.currentStatement,
    statement: state.statements[state.currentStatement]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleDelete: index => dispatch(removeStatement(index)),
    handleUpdate: (statementIndex, text) => dispatch(updateStatement(statementIndex, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(StatementEditor);