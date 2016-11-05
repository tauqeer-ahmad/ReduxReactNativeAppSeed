import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';

class Second extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Second Scene
        </Text>
        <TouchableHighlight onPress={() => this.props._goBack()}>
          <Text style={styles.instructions}>Go Back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Second);

