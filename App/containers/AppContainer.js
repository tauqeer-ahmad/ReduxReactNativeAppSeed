import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import NavigationRoot from '../components/NavRoot'
import { ActionCreators } from '../actions'

function mapStateToProps (state) {
  return {
    navigation: state.default,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NavigationRoot);
