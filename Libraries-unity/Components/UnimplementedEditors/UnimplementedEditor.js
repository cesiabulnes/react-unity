/**
 * Common implementation for a simple stubbed view. Simply applies the view's styles to the inner
 * View component and renders its children.
 *
 * @providesModule UnimplementedEditor
 */

'use strict';

var React = require('React');
var StyleSheet = require('StyleSheet');
var Editor = require('Editor');

var UnimplementedEditor = React.createClass({
  setNativeProps: function() {
    // Do nothing.
    // This method is required in order to use this view as a Touchable* child.
    // See ensureComponentIsNative.js for more info
  },
  render: function() {
    return (
      <View style={[styles.unimplementedEditor, this.props.style]}>
        {this.props.children}
      </View>
    );
  },
});

var styles = StyleSheet.create({
  unimplementedEditor: {
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'flex-start',
  }
});

module.exports = UnimplementedEditor;
