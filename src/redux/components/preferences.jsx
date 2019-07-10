import { connect } from 'react-redux';
import Preferences from '../../preferences';
import { updatePreferences } from '../actions';


const mapStateToProps = state => ({
    preferences: state.preferences
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    update: preferences => dispatch(updatePreferences(preferences))
});

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);