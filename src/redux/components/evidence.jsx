import {connect} from 'react-redux';
import Evidence from '../../evidence';
import { updateEvidence, removeEvidence } from '../actions';


const mapStateToProps = state => ({
    statement: state.statements[state.currentStatement],
    statementIndex: state.currentStatement
});

const mapDispatchToProps = (dispatch) => ({
    update: (statementIndex, evidenceIndex, text) => dispatch(updateEvidence(statementIndex, evidenceIndex, text)),
    remove: (statementIndex, evidenceIndex) => dispatch(removeEvidence(statementIndex, evidenceIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(Evidence);