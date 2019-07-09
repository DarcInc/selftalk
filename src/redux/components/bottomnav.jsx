import { connect } from 'react-redux';
import BottomNav from '../../bottomnav';

const mapStateToProps = state => ({
    section: state.section
});

export default connect(mapStateToProps)(BottomNav);