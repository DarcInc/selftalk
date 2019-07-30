import { connect } from 'react-redux';
import actionsModal from '../../modals/actionsModal';
import { addAction } from '../actions'

const mapStateToProps = state => ({
    statementIndex: state.currentStatement,
    preferences: state.preferences
});

const mapDispatchToProps = (dispatch) => ({
    onClickAdd: (statementIndex, action) => dispatch(addAction(statementIndex, action))
});

export default connect(mapStateToProps, mapDispatchToProps)(actionsModal);
