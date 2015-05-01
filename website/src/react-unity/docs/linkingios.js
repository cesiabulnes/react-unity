/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 93,
      "source": "static addEventListener(type: string, handler: Function) \{\\n    invariant(\\n      type === 'url',\\n      'LinkingIOS only supports \`url\` events'\\n    );\\n    _notifHandlers[handler] = RCTDeviceEventEmitter.addListener(\\n      DEVICE_NOTIF_EVENT,\\n      handler\\n    );\\n  }",
      "docblock": "/**\\n   * Add a handler to LinkingIOS changes by listening to the \`url\` event type\\n   * and providing the handler\\n   */\\n",
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
      "line": 107,
      "source": "static removeEventListener(type: string, handler: Function ) \{\\n    invariant(\\n      type === 'url',\\n      'LinkingIOS only supports \`url\` events'\\n    );\\n    if (!_notifHandlers[handler]) \{\\n      return;\\n    }\\n    _notifHandlers[handler].remove();\\n    _notifHandlers[handler] = null;\\n  }",
      "docblock": "/**\\n   * Remove a handler by passing the \`url\` event type and the handler\\n   */\\n",
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
      "line": 122,
      "source": "static openURL(url: string) \{\\n    invariant(\\n      typeof url === 'string',\\n      'Invalid url: should be a string'\\n    );\\n    RCTLinkingManager.openURL(url);\\n  }",
      "docblock": "/**\\n   * Try to open the given \`url\` with any of the installed apps.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "url"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "openURL"
    },
    \{
      "line": 134,
      "source": "static canOpenURL(url: string, callback: Function) \{\\n    invariant(\\n      typeof url === 'string',\\n      'Invalid url: should be a string'\\n    );\\n    invariant(\\n      typeof callback === 'function',\\n      'A valid callback function is required'\\n    );\\n    RCTLinkingManager.canOpenURL(url, callback);\\n  }",
      "docblock": "/**\\n   * Determine wether or not the an installed app can handle a given \`url\`\\n   * The callback function will be called with \`bool supported\` as the only argument\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "url"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "canOpenURL"
    },
    \{
      "line": 150,
      "source": "static popInitialURL(): ?string \{\\n    var initialURL = _initialURL;\\n    _initialURL = null;\\n    return initialURL;\\n  }",
      "docblock": "/**\\n   * If the app launch was triggered by an app link, it will pop the link url,\\n   * otherwise it will return \`null\`\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":2,\\"nullable\\":true}",
      "name": "popInitialURL"
    }
  ],
  "type": "api",
  "line": 88,
  "name": "LinkingIOS",
  "docblock": "/**\\n * \`LinkingIOS\` gives you a general interface to interact with both, incoming\\n * and outgoing app links.\\n *\\n * ### Basic Usage\\n *\\n * #### Handling deep links\\n *\\n * If your app was launched from a external url registered to your app you can\\n * access and handle it from any component you want with\\n *\\n * \`\`\`\\n * componentDidMount() \{\\n *  var url = LinkingIOS.popInitialURL();\\n * }\\n * \`\`\`\\n *\\n * In case you also want to listen to incoming app links during your app's\\n * execution you'll need to add the following lines to you \`*AppDelegate.m\`:\\n *\\n * \`\`\`\\n * - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation \{\\n *   return [RCTLinkingManager application:application openURL:url sourceApplication:sourceApplication annotation:annotation];\\n * }\\n * \`\`\`\\n *\\n * And then on your React component you'll be able to listen to the events on\\n * \`LinkingIOS\` as follows\\n *\\n * \`\`\`\\n * componentDidMount() \{\\n *   LinkingIOS.addEventListener('url', this._handleOpenURL);\\n * },\\n * componentWillUnmount() \{\\n *   LinkingIOS.removeEventListener('url', this._handleOpenURL);\\n * },\\n * _handleOpenURL(event) \{\\n *   console.log(event.url);\\n * }\\n * \`\`\`\\n *\\n * #### Triggering App links\\n *\\n * To trigger an app link (browser, email or custom schemas) you call\\n *\\n * \`\`\`\\n * LinkingIOS.openURL(url)\\n * \`\`\`\\n *\\n * If you want to check if any installed app can handle a given url beforehand you can call\\n * \`\`\`\\n * LinkingIOS.canOpenURL(url, (supported) => \{\\n *   if (!supported) \{\\n *     AlertIOS.alert('Can\\\\'t handle url: ' + url);\\n *   } else \{\\n *     LinkingIOS.openURL(url);\\n *   }\\n * });\\n * \`\`\`\\n *\\n * _The iOS simulator does not support the \`mailto:\` and \`tel:\` schemas\\n * because the Mail and Phone apps are not installed - you will need to test\\n * them on a device._\\n */\\n",
  "requires": [
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
  "filepath": "Libraries/LinkingIOS/LinkingIOS.js",
  "componentName": "LinkingIOS"
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"linkingios","title":"LinkingIOS","layout":"autodocs","category":"apis","permalink":"docs/linkingios.html","next":"netinfo"}}, content);
  }
});
Post.content = content;
module.exports = Post;
