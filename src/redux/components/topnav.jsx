import { connect } from 'react-redux';
import { changeSection } from '../actions';
import topnav from '../../topnav';

const mapStateToProps = state => ({
    section: state.section,
    currentStatement: state.currentStatement
});

const mapDispatchToProps = dispatch => ({
    selectSection: section => dispatch(changeSection(section))
});

export default connect(mapStateToProps, mapDispatchToProps)(topnav);