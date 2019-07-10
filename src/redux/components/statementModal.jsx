import {connect} from 'react-redux';
import statementModal from '../../modals/statementModal';
import { addStatement } from '../actions';

const mapStateToProps = state => ({
    preferences: state.preferences
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClickAdd: (text) => dispatch(addStatement(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(statementModal);