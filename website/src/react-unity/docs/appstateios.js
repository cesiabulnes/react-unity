/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 81,
      "source": "addEventListener: function(\\n    type: string,\\n    handler: Function\\n  ) \{\\n    _appStateHandlers[handler] = RCTDeviceEventEmitter.addListener(\\n      DEVICE_APPSTATE_EVENT,\\n      (appStateData) => \{\\n        handler(appStateData.app_state);\\n      }\\n    );\\n  }",
      "docblock": "/**\\n   * Add a handler to AppState changes by listening to the \`change\` event type\\n   * and providing the handler\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "type"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "handler"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "addEventListener"
    },
    \{
      "line": 96,
      "source": "removeEventListener: function(\\n    type: string,\\n    handler: Function\\n  ) \{\\n    if (!_appStateHandlers[handler]) \{\\n      return;\\n    }\\n    _appStateHandlers[handler].remove();\\n    _appStateHandlers[handler] = null;\\n  }",
      "docblock": "/**\\n   * Remove a handler by passing the \`change\` event type and the handler\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "type"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "handler"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "removeEventListener"
    }
  ],
  "properties": [
    [
      [
        "static"
      ],
      "",
      "currentState",
      "null : ?String",
      "",
      107
    ]
  ],
  "superClass": null,
  "type": "api",
  "line": 75,
  "name": "AppStateIOS",
  "docblock": "/**\\n * \`AppStateIOS\` can tell you if the app is in the foreground or background,\\n * and notify you when the state changes.\\n *\\n * AppStateIOS is frequently used to determine the intent and proper behavior when\\n * handling push notifications.\\n *\\n * ### iOS App States\\n *\\n *  - \`active\` - The app is running in the foreground\\n *  - \`background\` - The app is running in the background. The user is either\\n *     in another app or on the home screen\\n *  - \`inactive\` - This is a transition state that currently never happens for\\n *     typical React Native apps.\\n *\\n * For more information, see\\n * [Apple's documentation](https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/TheAppLifeCycle/TheAppLifeCycle.html)\\n *\\n * ### Basic Usage\\n *\\n * To see the current state, you can check \`AppStateIOS.currentState\`, which\\n * will be kept up-to-date. However, \`currentState\` will be null at launch\\n * while \`AppStateIOS\` retrieves it over the bridge.\\n *\\n * \`\`\`\\n * getInitialState: function() \{\\n *   return \{\\n *     currentAppState: AppStateIOS.currentState,\\n *   };\\n * },\\n * componentDidMount: function() \{\\n *   AppStateIOS.addEventListener('change', this._handleAppStateChange);\\n * },\\n * componentWillUnmount: function() \{\\n *   AppStateIOS.removeEventListener('change', this._handleAppStateChange);\\n * },\\n * _handleAppStateChange: function(currentAppState) \{\\n *   this.setState(\{ currentAppState, });\\n * },\\n * render: function() \{\\n *   return (\\n *     <Text>Current state is: \{this.state.currentAppState}</Text>\\n *   );\\n * },\\n * \`\`\`\\n *\\n * This example will only ever appear to say \\"Current state is: active\\" because\\n * the app is only visible to the user when in the \`active\` state, and the null\\n * state will happen only momentarily.\\n */\\n",
  "requires": [
    \{
      "name": "NativeModules"
    },
    \{
      "name": "RCTDeviceEventEmitter"
    },
    \{
      "name": "logError"
    }
  ],
  "filepath": "Libraries/AppStateIOS/AppStateIOS.ios.js",
  "componentName": "AppStateIOS",
  "example": \{
    "path": "Examples/UIExplorer/AppStateIOSExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @providesModule AppStateIOSExample\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  AppStateIOS,\\n  Text,\\n  View\\n} = React;\\n\\nvar AppStateSubscription = React.createClass(\{\\n  getInitialState() \{\\n    return \{\\n      appState: AppStateIOS.currentState,\\n      previousAppStates: [],\\n    };\\n  },\\n  componentDidMount: function() \{\\n    AppStateIOS.addEventListener('change', this._handleAppStateChange);\\n  },\\n  componentWillUnmount: function() \{\\n    AppStateIOS.removeEventListener('change', this._handleAppStateChange);\\n  },\\n  _handleAppStateChange: function(appState) \{\\n    var previousAppStates = this.state.previousAppStates.slice();\\n    previousAppStates.push(this.state.appState);\\n    this.setState(\{\\n      appState,\\n      previousAppStates,\\n    });\\n  },\\n  render() \{\\n    if (this.props.showCurrentOnly) \{\\n      return (\\n        <View>\\n          <Text>\{this.state.appState}</Text>\\n        </View>\\n      );\\n    }\\n    return (\\n      <View>\\n        <Text>\{JSON.stringify(this.state.previousAppStates)}</Text>\\n      </View>\\n    );\\n  }\\n});\\n\\nexports.title = 'AppStateIOS';\\nexports.description = 'iOS app background status';\\nexports.examples = [\\n  \{\\n    title: 'AppStateIOS.currentState',\\n    description: 'Can be null on app initialization',\\n    render() \{ return <Text>\{AppStateIOS.currentState}</Text>; }\\n  },\\n  \{\\n    title: 'Subscribed AppStateIOS:',\\n    description: 'This changes according to the current state, so you can only ever see it rendered as \\"active\\"',\\n    render(): ReactElement \{ return <AppStateSubscription showCurrentOnly=\{true} />; }\\n  },\\n  \{\\n    title: 'Previous states:',\\n    render(): ReactElement \{ return <AppStateSubscription showCurrentOnly=\{false} />; }\\n  },\\n];\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"appstateios","title":"AppStateIOS","layout":"autodocs","category":"apis","permalink":"docs/appstateios.html","next":"asyncstorage"}}, content);
  }
});
Post.content = content;
module.exports = Post;
