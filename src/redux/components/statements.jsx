import { connect } from 'react-redux';
import { selectStatement } from '../actions';
import Statements from '../../statements';

const mapStateToProps = state => ({
    statements: state.statements,
    currentStatement: state.currentStatement
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectStatement: idx => dispatch(selectStatement(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(Statements);