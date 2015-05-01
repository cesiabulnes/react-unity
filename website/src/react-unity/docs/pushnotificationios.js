/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 41,
      "source": "static setApplicationIconBadgeNumber(number: number) \{\\n    RCTPushNotificationManager.setApplicationIconBadgeNumber(number);\\n  }",
      "docblock": "/**\\n   * Sets the badge number for the app icon on the home screen\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "number"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "setApplicationIconBadgeNumber"
    },
    \{
      "line": 48,
      "source": "static getApplicationIconBadgeNumber(callback: Function) \{\\n    RCTPushNotificationManager.getApplicationIconBadgeNumber(callback);\\n  }",
      "docblock": "/**\\n   * Gets the current badge number for the app icon on the home screen\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "getApplicationIconBadgeNumber"
    },
    \{
      "line": 58,
      "source": "static addEventListener(type: string, handler: Function) \{\\n    invariant(\\n      type === 'notification',\\n      'PushNotificationIOS only supports \`notification\` events'\\n    );\\n    _notifHandlers[handler] = RCTDeviceEventEmitter.addListener(\\n      DEVICE_NOTIF_EVENT,\\n      (notifData) => \{\\n        handler(new PushNotificationIOS(notifData));\\n      }\\n    );\\n  }",
      "docblock": "/**\\n   * Attaches a listener to remote notifications while the app is running in the\\n   * foreground or the background.\\n   *\\n   * The handler will get be invoked with an instance of \`PushNotificationIOS\`\\n   */\\n",
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
      "line": 75,
      "source": "static requestPermissions() \{\\n    RCTPushNotificationManager.requestPermissions();\\n  }",
      "docblock": "/**\\n   * Requests all notification permissions from iOS, prompting the user's\\n   * dialog box.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "requestPermissions"
    },
    \{
      "line": 87,
      "source": "static checkPermissions(callback: Function) \{\\n    invariant(\\n      typeof callback === 'function',\\n      'Must provide a valid callback'\\n    );\\n    RCTPushNotificationManager.checkPermissions(callback);\\n  }",
      "docblock": "/**\\n   * See what push permissions are currently enabled. \`callback\` will be\\n   * invoked with a \`permissions\` object:\\n   *\\n   *  - \`alert\` :boolean\\n   *  - \`badge\` :boolean\\n   *  - \`sound\` :boolean\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "checkPermissions"
    },
    \{
      "line": 99,
      "source": "static removeEventListener(type: string, handler: Function) \{\\n    invariant(\\n      type === 'notification',\\n      'PushNotificationIOS only supports \`notification\` events'\\n    );\\n    if (!_notifHandlers[handler]) \{\\n      return;\\n    }\\n    _notifHandlers[handler].remove();\\n    _notifHandlers[handler] = null;\\n  }",
      "docblock": "/**\\n   * Removes the event listener. Do this in \`componentWillUnmount\` to prevent\\n   * memory leaks\\n   */\\n",
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
    },
    \{
      "line": 119,
      "source": "static popInitialNotification() \{\\n    var initialNotification = _initialNotification &&\\n      new PushNotificationIOS(_initialNotification);\\n    _initialNotification = null;\\n    return initialNotification;\\n  }",
      "docblock": "/**\\n   * An initial notification will be available if the app was cold-launched\\n   * from a notification.\\n   *\\n   * The first caller of \`popInitialNotification\` will get the initial\\n   * notification object, or \`null\`. Subsequent invocations will return null.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "popInitialNotification"
    },
    \{
      "line": 131,
      "source": "constructor(nativeNotif) \{\\n    this._data = \{};\\n\\n    // Extract data from Apple's \`aps\` dict as defined:\\n\\n    // https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html\\n\\n    Object.keys(nativeNotif).forEach((notifKey) => \{\\n      var notifVal = nativeNotif[notifKey];\\n      if (notifKey === 'aps') \{\\n        this._alert = notifVal.alert;\\n        this._sound = notifVal.sound;\\n        this._badgeCount = notifVal.badge;\\n      } else \{\\n        this._data[notifKey] = notifVal;\\n      }\\n    });\\n  }",
      "docblock": "/**\\n   * You will never need to instansiate \`PushNotificationIOS\` yourself.\\n   * Listening to the \`notification\` event and invoking\\n   * \`popInitialNotification\` is sufficient\\n   */\\n",
      "modifiers": [],
      "params": [
        \{
          "typehint": null,
          "name": "nativeNotif"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "constructor"
    },
    \{
      "line": 153,
      "source": "getMessage(): ?string | ?Object \{\\n    // alias because \\"alert\\" is an ambiguous name\\n    return this._alert;\\n  }",
      "docblock": "/**\\n   * An alias for \`getAlert\` to get the notification's main message string\\n   */\\n",
      "modifiers": [],
      "params": [],
      "tparams": null,
      "returntypehint": "?string | ?Object",
      "name": "getMessage"
    },
    \{
      "line": 161,
      "source": "getSound(): ?string \{\\n    return this._sound;\\n  }",
      "docblock": "/**\\n   * Gets the sound string from the \`aps\` object\\n   */\\n",
      "modifiers": [],
      "params": [],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":2,\\"nullable\\":true}",
      "name": "getSound"
    },
    \{
      "line": 168,
      "source": "getAlert(): ?string | ?Object \{\\n    return this._alert;\\n  }",
      "docblock": "/**\\n   * Gets the notification's main message from the \`aps\` object\\n   */\\n",
      "modifiers": [],
      "params": [],
      "tparams": null,
      "returntypehint": "?string | ?Object",
      "name": "getAlert"
    },
    \{
      "line": 175,
      "source": "getBadgeCount(): ?number \{\\n    return this._badgeCount;\\n  }",
      "docblock": "/**\\n   * Gets the badge count number from the \`aps\` object\\n   */\\n",
      "modifiers": [],
      "params": [],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":2,\\"nullable\\":true}",
      "name": "getBadgeCount"
    },
    \{
      "line": 182,
      "source": "getData(): ?Object \{\\n    return this._data;\\n  }",
      "docblock": "/**\\n   * Gets the data object on the notif\\n   */\\n",
      "modifiers": [],
      "params": [],
      "tparams": null,
      "returntypehint": "?Object",
      "name": "getData"
    }
  ],
  "type": "api",
  "line": 32,
  "name": "PushNotificationIOS",
  "docblock": "/**\\n * Handle push notifications for your app, including permission handling and\\n * icon badge number.\\n *\\n * To get up and running, [configure your notifications with Apple](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringPushNotifications/ConfiguringPushNotifications.html)\\n * and your server-side system. To get an idea, [this is the Parse guide](https://parse.com/tutorials/ios-push-notifications).\\n */\\n",
  "requires": [
    \{
      "name": "NativeModules"
    },
    \{
      "name": "RCTDeviceEventEmitter"
    },
    \{
      "name": "NativeModules"
    },
    \{
      "name": "invariant"
    }
  ],
  "filepath": "Libraries/PushNotificationIOS/PushNotificationIOS.js",
  "componentName": "PushNotificationIOS",
  "example": \{
    "path": "Examples/UIExplorer/PushNotificationIOSExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  AlertIOS,\\n  PushNotificationIOS,\\n  StyleSheet,\\n  Text,\\n  TouchableHighlight,\\n  View,\\n} = React;\\n\\nvar Button = React.createClass(\{\\n  render: function() \{\\n    return (\\n      <TouchableHighlight\\n        underlayColor=\{'white'}\\n        style=\{styles.button}\\n        onPress=\{this.props.onPress}>\\n        <Text style=\{styles.buttonLabel}>\\n          \{this.props.label}\\n        </Text>\\n      </TouchableHighlight>\\n    );\\n  }\\n});\\n\\nclass NotificationExample extends React.Component \{\\n  componentWillMount() \{\\n    PushNotificationIOS.addEventListener('notification', this._onNotification);\\n  }\\n\\n  componentWillUnmount() \{\\n    PushNotificationIOS.removeEventListener('notification', this._onNotification);\\n  }\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Button\\n          onPress=\{this._sendNotification}\\n          label=\\"Send fake notification\\"\\n        />\\n      </View>\\n    );\\n  }\\n\\n  _sendNotification() \{\\n    require\('RCTDeviceEventEmitter').emit('remoteNotificationReceived', \{\\n      aps: \{\\n        alert: 'Sample notification',\\n        badge: '+1',\\n        sound: 'default',\\n        category: 'REACT_NATIVE'\\n      },\\n    });\\n  }\\n\\n  _onNotification(notification) \{\\n    AlertIOS.alert(\\n      'Notification Received',\\n      'Alert message: ' + notification.getMessage(),\\n      [\{\\n        text: 'Dismiss',\\n        onPress: null,\\n      }]\\n    );\\n  }\\n}\\n\\nclass NotificationPermissionExample extends React.Component \{\\n  constructor(props) \{\\n    super(props);\\n    this.state = \{permissions: null};\\n  }\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Button\\n          onPress=\{this._showPermissions.bind(this)}\\n          label=\\"Show enabled permissions\\"\\n        />\\n        <Text>\\n          \{JSON.stringify(this.state.permissions)}\\n        </Text>\\n      </View>\\n    );\\n  }\\n\\n  _showPermissions() \{\\n    PushNotificationIOS.checkPermissions((permissions) => \{\\n      this.setState(\{permissions});\\n    });\\n  }\\n}\\n\\nvar styles = StyleSheet.create(\{\\n  button: \{\\n    padding: 10,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  buttonLabel: \{\\n    color: 'blue',\\n  },\\n});\\n\\nexports.title = 'PushNotificationIOS';\\nexports.description = 'Apple PushNotification and badge value';\\nexports.examples = [\\n\{\\n  title: 'Badge Number',\\n  render(): React.Component \{\\n    PushNotificationIOS.requestPermissions();\\n\\n    return (\\n      <View>\\n        <Button\\n          onPress=\{() => PushNotificationIOS.setApplicationIconBadgeNumber(42)}\\n          label=\\"Set app's icon badge to 42\\"\\n        />\\n        <Button\\n          onPress=\{() => PushNotificationIOS.setApplicationIconBadgeNumber(0)}\\n          label=\\"Clear app's icon badge\\"\\n        />\\n      </View>\\n    );\\n  },\\n},\\n\{\\n  title: 'Push Notifications',\\n  render(): React.Component \{\\n    return <NotificationExample />;\\n  }\\n},\\n\{\\n  title: 'Notifications Permissions',\\n  render(): React.Component \{\\n    return <NotificationPermissionExample />;\\n  }\\n}];\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"pushnotificationios","title":"PushNotificationIOS","layout":"autodocs","category":"apis","permalink":"docs/pushnotificationios.html","next":"statusbarios"}}, content);
  }
});
Post.content = content;
module.exports = Post;
