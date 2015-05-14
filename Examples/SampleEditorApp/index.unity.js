/**
 * Sample React Unity Editor UI
 * https://github.com/pgavazzi/react-unity
 */
'use strict';

var React = require('react-unity');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Editor,
} = React;

var EditorMyScript = React.createClass({
  render: function() {
    return (
      <Editor style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Unity!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.unity.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </Editor>
    );
  }
});

var styles = StyleSheet.create({
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

AppRegistry.registerComponent('EditorMyScript', () => EditorMyscript);
