/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var Prism = require('Prism');
var React = require('React');
var Site = require('Site');

var index = React.createClass({
  render: function() {
    return (
      <Site>
        <div className="hero">
          <div className="wrap">
            <div className="text"><strong>React Unity</strong></div>
            <div className="minitext">
              A framework for building native Unity UI using React
            </div>
          </div>
        </div>

        <section className="content wrap">
          <div style={{margin: '40px auto', maxWidth: 800}}>

          <p>
            React Unity enables you to build editor-class UI experiences on native platforms using a consistent developer experience based on JavaScript and
            {' '}<a href="http://facebook.github.io/react/" >React</a>{'. '}
            The focus of React Unity is on developer efficiency across all the platforms you care about &mdash; learn once, write anywhere.
            Unity uses React Unity in multiple production Unity UIs and will continue investing in React Unity.
          </p>
          </div>

          <div className="buttons-unit">
            <a href="docs/getting-started.html#content" className="button">Get started with React Unity</a>
          </div>

          <div style={{margin: '40px auto', maxWidth: 800}}>

          <h2>Native Unity Components</h2>
          <p>
            With React Unity, you can use the standard Unity editor components such as EditorWindow and Button used in the Unity Editor.  This gives your app a consistent look and feel with the rest of the editor ecosystem, and keeps the quality bar high.  These components are easily incorporated into your own editor UI using their React component counterparts, such as Editor and Button.
          </p>
          <Prism>
{`var React = require('react-unity');
var { Editor, Button } = React;

var EditorMyScript = React.createClass({
  render: function() {
    return (
      <Editor>
        <Button label="React Unity" onClick={this.onClickButton}=>
        </Button>
      </Editor>
    );
  },
  onClickButton: function() {
    console.log("Button pressed!");
  }
});`}
          </Prism>

          <h2>Flexbox and Styling</h2>
          <p>
            Laying out views should be easy, which is why we brought the flexbox layout model from the web to React Unity.  Flexbox makes it simple to build the most common UI layouts, such as stacked and nested boxes with margin and padding.  React Unity also supports common web syles, such as fontWeight, and the StyleSheet abstraction provides an optimized mechanism to declare all your styles and layout right along with the components that use them and apply them inline.
          </p>
          <Prism>
{`var React = require('react-unity');
var { Image, StyleSheet, Text, Editor } = React;

var EditorMyScript = React.createClass({
  render: function() {
    return (
      <Editor style={styles.row}>
        <Image
          source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
          style={styles.image}
        />
        <Text style={styles.title}>
          React Unity
        </Text>
        <Text style={styles.subtitle}>
          Build high quality Unity Editor UI using React
        </Text>
      </Editor>
    );
  },
});
var styles = StyleSheet.create({
  row: { flexDirection: 'row', margin: 40 },
  image: { width: 40, height: 40, marginRight: 10 },
  text: { flex: 1, justifyContent: 'center'},
  title: { fontSize: 11, fontWeight: 'bold' },
  subtitle: { fontSize: 10 },
});`}
          </Prism>

          <h2>Extensibility</h2>
          <p>
            It is certainly possible to create a great app using React Unity without writing a single line of native code, but React Native is also designed to be easily extended with custom native views and modules - that means you can reuse anything you{"'"}ve already built, and can import and use your favorite native libraries.  To create a simple module in Unity, create a new class that implements the RCTUBridgeModule interface, and add the RCTUExport attribute [RCTUExport] the function that you want to make available to JavaScript. Additionally, the class itself must be explicitly exported with the RCTUExportModule attribute [RCTUExportModule].
          </p>
          <Prism>
{`// Unity C#

using UnityEditor.React;

[RCTUExportModule]
public class MyCustomModule : RCTUBridgeModule
{
  // Available as NativeModules.MyCustomModule.processString
  [RCTUExport]
  public void processString(string input, callback cb)
  {
    cb(input.Replace("Goodbye","Hello));
  }
}

`}
          </Prism>

          <Prism>
{`// JavaScript

var React = require('react-unity');
var { NativeModules, Text } = React;

var Message = React.createClass({
  render: function() {
    getInitialState() {
      return { text: 'Goodbye World.' };
    },
    componentDidMount() {
      NativeModules.MyCustomModule.processString(this.state.text, (text) => {
        this.setState({text});
      });
    },
    return (
      <Text>{this.state.text}</Text>
    );
  },
});`}
          </Prism>

          </div>
          <section className="home-bottom-section">
            <div className="buttons-unit">
              <a href="docs/getting-started.html#content" className="button">Get started with React Unity</a>
            </div>
          </section>
        </section>
      </Site>
    );
  }
});

module.exports = index;
