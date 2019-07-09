import { connect } from 'react-redux';
import actionsModal from '../../modals/actionsModal';
import { addAction } from '../actions'

const mapStateToProps = state => ({
    statementIndex: state.currentStatement
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClickAdd: (statementIndex, text) => dispatch(addAction(statementIndex, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(actionsModal);
