/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 52,
      "source": "static alert(\\n    title: ?string,\\n    message?: ?string,\\n    buttons?: Array<\{\\n      text: ?string;\\n      onPress: ?Function;\\n    }>\\n  ): void \{\\n    var callbacks = [];\\n    var buttonsSpec = [];\\n    title = title || '';\\n    message = message || '';\\n    buttons = buttons || [DEFAULT_BUTTON];\\n    buttons.forEach((btn, index) => \{\\n      callbacks[index] = btn.onPress;\\n      var btnDef = \{};\\n      btnDef[index] = btn.text || DEFAULT_BUTTON_TEXT;\\n      buttonsSpec.push(btnDef);\\n    });\\n    RCTAlertManager.alertWithArgs(\{\\n      title,\\n      message,\\n      buttons: buttonsSpec,\\n    }, (id) => \{\\n      var cb = callbacks[id];\\n      cb && cb();\\n    });\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":2,\\"nullable\\":true}",
          "name": "title"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":2,\\"nullable\\":true}",
          "name": "message?"
        },
        \{
          "typehint": "Array<\{\\n      text: ?string;\\n      onPress: ?Function;\\n    }>",
          "name": "buttons?"
        }
      ],
      "tparams": null,
      "returntypehint": "void",
      "name": "alert"
    }
  ],
  "type": "api",
  "line": 44,
  "name": "AlertIOS",
  "docblock": "/**\\n * Launches an alert dialog with the specified title and message.\\n *\\n * Optionally provide a list of buttons. Tapping any button will fire the\\n * respective onPress callback and dismiss the alert. By default, the only\\n * button will be an 'OK' button\\n *\\n * The last button in the list will be considered the 'Primary' button and\\n * it will appear bold.\\n *\\n * \`\`\`\\n * AlertIOS.alert(\\n *   'Foo Title',\\n *   'My Alert Msg',\\n *   [\\n *     \{text: 'Foo', onPress: () => console.log('Foo Pressed!')},\\n *     \{text: 'Bar', onPress: () => console.log('Bar Pressed!')},\\n *   ]\\n * )\\n * \`\`\`\\n */\\n",
  "requires": [
    \{
      "name": "NativeModules"
    }
  ],
  "filepath": "Libraries/Utilities/AlertIOS.js",
  "componentName": "AlertIOS",
  "example": \{
    "path": "Examples/UIExplorer/AlertIOSExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  StyleSheet,\\n  View,\\n  Text,\\n  TouchableHighlight,\\n  AlertIOS,\\n} = React;\\n\\nexports.framework = 'React';\\nexports.title = 'AlertIOS';\\nexports.description = 'iOS alerts and action sheets';\\nexports.examples = [\{\\n  title: 'Alerts',\\n  render() \{\\n    return (\\n      <View>\\n        <TouchableHighlight style=\{styles.wrapper}\\n          onPress=\{() => AlertIOS.alert(\\n            'Foo Title',\\n            'My Alert Msg'\\n          )}>\\n          <View style=\{styles.button}>\\n            <Text>Alert with message and default button</Text>\\n          </View>\\n        </TouchableHighlight>\\n        <TouchableHighlight style=\{styles.wrapper}\\n          onPress=\{() => AlertIOS.alert(\\n            null,\\n            null,\\n            [\\n              \{text: 'Button', onPress: () => console.log('Button Pressed!')},\\n            ]\\n          )}>\\n          <View style=\{styles.button}>\\n            <Text>Alert with only one button</Text>\\n          </View>\\n        </TouchableHighlight>\\n        <TouchableHighlight style=\{styles.wrapper}\\n          onPress=\{() => AlertIOS.alert(\\n            'Foo Title',\\n            'My Alert Msg',\\n            [\\n              \{text: 'Foo', onPress: () => console.log('Foo Pressed!')},\\n              \{text: 'Bar', onPress: () => console.log('Bar Pressed!')},\\n            ]\\n          )}>\\n          <View style=\{styles.button}>\\n            <Text>Alert with two buttons</Text>\\n          </View>\\n        </TouchableHighlight>\\n        <TouchableHighlight style=\{styles.wrapper}\\n          onPress=\{() => AlertIOS.alert(\\n            'Foo Title',\\n            null,\\n            [\\n              \{text: 'Foo', onPress: () => console.log('Foo Pressed!')},\\n              \{text: 'Bar', onPress: () => console.log('Bar Pressed!')},\\n              \{text: 'Baz', onPress: () => console.log('Baz Pressed!')},\\n            ]\\n          )}>\\n          <View style=\{styles.button}>\\n            <Text>Alert with 3 buttons</Text>\\n          </View>\\n        </TouchableHighlight>\\n        <TouchableHighlight style=\{styles.wrapper}\\n          onPress=\{() => AlertIOS.alert(\\n            'Foo Title',\\n            'My Alert Msg',\\n            '..............'.split('').map((dot, index) => (\{\\n              text: 'Button ' + index,\\n              onPress: () => console.log('Pressed ' + index)\\n            }))\\n          )}>\\n          <View style=\{styles.button}>\\n            <Text>Alert with too many buttons</Text>\\n          </View>\\n        </TouchableHighlight>\\n      </View>\\n    );\\n  },\\n}];\\n\\nvar styles = StyleSheet.create(\{\\n  wrapper: \{\\n    borderRadius: 5,\\n    marginBottom: 5,\\n  },\\n  button: \{\\n    backgroundColor: '#eeeeee',\\n    padding: 10,\\n  },\\n});\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"alertios","title":"AlertIOS","layout":"autodocs","category":"apis","permalink":"docs/alertios.html","next":"appregistry"}}, content);
  }
});
Post.content = content;
module.exports = Post;
