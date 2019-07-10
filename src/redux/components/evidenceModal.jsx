import {connect} from 'react-redux';
import evidenceModal from '../../modals/evidenceModal';
import { addEvidence } from '../actions';

const mapStateToProps = state => ({
    statementIndex: state.currentStatement,
    preferences: state.preferences
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClickAdd: (statementIndex, text) => dispatch(addEvidence(statementIndex, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(evidenceModal);