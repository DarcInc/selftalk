import { connect } from 'react-redux';
import Body from '../../body';

const mapStateToProps = state => ({
    section: state.section
});

export default connect(mapStateToProps)(Body);