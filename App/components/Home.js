import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';

const route = {
  type: 'push',
  route: {
    key: 'second',
    scene: 'second',
    title: 'Second'
  }
}

class Home extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Build you own app using this sead :)
        </Text>
        <Text style={styles.instructions}>
          Happy coding.
        </Text>

        <TouchableHighlight onPress={() => this.props._handleNavigate(route)}>
          <Text style={styles.instructions}>Go to second scene</Text>
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

export default connect(mapStateToProps)(Home);

