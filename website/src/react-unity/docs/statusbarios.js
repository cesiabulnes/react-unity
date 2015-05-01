/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 29,
      "source": "setStyle(style: number, animated?: boolean) \{\\n    animated = animated || false;\\n    RCTStatusBarManager.setStyle(style, animated);\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "style"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"boolean\\",\\"length\\":1}",
          "name": "animated?"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "setStyle"
    },
    \{
      "line": 34,
      "source": "setHidden(hidden: boolean, animation: number) \{\\n    animation = animation || StatusBarIOS.Animation.none;\\n    RCTStatusBarManager.setHidden(hidden, animation);\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"boolean\\",\\"length\\":1}",
          "name": "hidden"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "animation"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "setHidden"
    }
  ],
  "properties": [
    [
      [
        "static"
      ],
      "",
      "Style",
      "\{\\n    default: RCTStatusBarManager.Style.default,\\n    lightContent: RCTStatusBarManager.Style.lightContent\\n  }",
      "",
      18
    ],
    [
      [
        "static"
      ],
      "",
      "Animation",
      "\{\\n    none: RCTStatusBarManager.Animation.none,\\n    fade: RCTStatusBarManager.Animation.fade,\\n    slide: RCTStatusBarManager.Animation.slide,\\n  }",
      "",
      23
    ]
  ],
  "superClass": null,
  "type": "api",
  "line": 16,
  "name": "StatusBarIOS",
  "docblock": "/**\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * @flow\\n */\\n",
  "requires": [
    \{
      "name": "NativeModules"
    }
  ],
  "filepath": "Libraries/Components/StatusBar/StatusBarIOS.ios.js",
  "componentName": "StatusBarIOS",
  "example": \{
    "path": "Examples/UIExplorer/StatusBarIOSExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  StyleSheet,\\n  View,\\n  Text,\\n  TouchableHighlight,\\n  StatusBarIOS,\\n} = React;\\n\\nexports.framework = 'React';\\nexports.title = 'StatusBarIOS';\\nexports.description = 'Module for controlling iOS status bar';\\nexports.examples = [\{\\n  title: 'Status Bar Style',\\n  render() \{\\n    return (\\n      <View>\\n        \{Object.keys(StatusBarIOS.Style).map((key) =>\\n          <TouchableHighlight style=\{styles.wrapper}\\n            onPress=\{() => StatusBarIOS.setStyle(StatusBarIOS.Style[key])}>\\n            <View style=\{styles.button}>\\n              <Text>setStyle(StatusBarIOS.Style.\{key})</Text>\\n            </View>\\n          </TouchableHighlight>\\n        )}\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Status Bar Style Animated',\\n  render() \{\\n    return (\\n      <View>\\n        \{Object.keys(StatusBarIOS.Style).map((key) =>\\n          <TouchableHighlight style=\{styles.wrapper}\\n            onPress=\{() => StatusBarIOS.setStyle(StatusBarIOS.Style[key], true)}>\\n            <View style=\{styles.button}>\\n              <Text>setStyle(StatusBarIOS.Style.\{key}, true)</Text>\\n            </View>\\n          </TouchableHighlight>\\n        )}\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Status Bar Hidden',\\n  render() \{\\n    return (\\n      <View>\\n        \{Object.keys(StatusBarIOS.Animation).map((key) =>\\n          <View>\\n            <TouchableHighlight style=\{styles.wrapper}\\n              onPress=\{() => StatusBarIOS.setHidden(true, StatusBarIOS.Animation[key])}>\\n              <View style=\{styles.button}>\\n                <Text>setHidden(true, StatusBarIOS.Animation.\{key})</Text>\\n              </View>\\n            </TouchableHighlight>\\n            <TouchableHighlight style=\{styles.wrapper}\\n              onPress=\{() => StatusBarIOS.setHidden(false, StatusBarIOS.Animation[key])}>\\n              <View style=\{styles.button}>\\n                <Text>setHidden(false, StatusBarIOS.Animation.\{key})</Text>\\n              </View>\\n            </TouchableHighlight>\\n          </View>\\n        )}\\n      </View>\\n    );\\n  },\\n}];\\n\\nvar styles = StyleSheet.create(\{\\n  wrapper: \{\\n    borderRadius: 5,\\n    marginBottom: 5,\\n  },\\n  button: \{\\n    backgroundColor: '#eeeeee',\\n    padding: 10,\\n  },\\n});\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"statusbarios","title":"StatusBarIOS","layout":"autodocs","category":"apis","permalink":"docs/statusbarios.html","next":"stylesheet"}}, content);
  }
});
Post.content = content;
module.exports = Post;
