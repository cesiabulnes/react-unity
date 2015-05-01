/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 45,
      "source": "getCurrentPosition: function(\\n    geo_success: Function,\\n    geo_error?: Function,\\n    geo_options?: GeoOptions\\n  ) \{\\n    invariant(\\n      typeof geo_success === 'function',\\n      'Must provide a valid geo_success callback.'\\n    );\\n    RCTLocationObserver.getCurrentPosition(\\n      geo_options || \{},\\n      geo_success,\\n      geo_error || logError\\n    );\\n  }",
      "docblock": "/*\\n   * Invokes the success callback once with the latest location info.  Supported\\n   * options: timeout (ms), maximumAge (ms), enableHighAccuracy (bool)\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "geo_success"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "geo_error?"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"GeoOptions\\",\\"length\\":1}",
          "name": "geo_options?"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "getCurrentPosition"
    },
    \{
      "line": 65,
      "source": "watchPosition: function(success: Function, error?: Function, options?: GeoOptions): number \{\\n    if (!updatesEnabled) \{\\n      RCTLocationObserver.startObserving(options || \{});\\n      updatesEnabled = true;\\n    }\\n    var watchID = subscriptions.length;\\n    subscriptions.push([\\n      RCTDeviceEventEmitter.addListener(\\n        'geolocationDidChange',\\n        success\\n      ),\\n      error ? RCTDeviceEventEmitter.addListener(\\n        'geolocationError',\\n        error\\n      ) : null,\\n    ]);\\n    return watchID;\\n  }",
      "docblock": "/*\\n   * Invokes the success callback whenever the location changes.  Supported\\n   * options: timeout (ms), maximumAge (ms), enableHighAccuracy (bool)\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "success"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "error?"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"GeoOptions\\",\\"length\\":1}",
          "name": "options?"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
      "name": "watchPosition"
    },
    \{
      "line": 84,
      "source": "clearWatch: function(watchID: number) \{\\n    var sub = subscriptions[watchID];\\n    if (!sub) \{\\n      // Silently exit when the watchID is invalid or already cleared\\n      // This is consistent with timers\\n      return;\\n    }\\n\\n    sub[0].remove();\\n    // array element refinements not yet enabled in Flow\\n    var sub1 = sub[1]; sub1 && sub1.remove();\\n    subscriptions[watchID] = undefined;\\n    var noWatchers = true;\\n    for (var ii = 0; ii < subscriptions.length; ii++) \{\\n      if (subscriptions[ii]) \{\\n        noWatchers = false; // still valid subscriptions\\n      }\\n    }\\n    if (noWatchers) \{\\n      Geolocation.stopObserving();\\n    }\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "watchID"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "clearWatch"
    },
    \{
      "line": 107,
      "source": "stopObserving: function() \{\\n    if (updatesEnabled) \{\\n      RCTLocationObserver.stopObserving();\\n      updatesEnabled = false;\\n      for (var ii = 0; ii < subscriptions.length; ii++) \{\\n        var sub = subscriptions[ii];\\n        if (sub) \{\\n          warning('Called stopObserving with existing subscriptions.');\\n          sub[0].remove();\\n          // array element refinements not yet enabled in Flow\\n          var sub1 = sub[1]; sub1 && sub1.remove();\\n        }\\n      }\\n      subscriptions = [];\\n    }\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": null,
      "name": "stopObserving"
    }
  ],
  "properties": [],
  "superClass": null,
  "type": "Polyfill",
  "line": 39,
  "name": "Geolocation",
  "docblock": "/**\\n * You need to include the \`NSLocationWhenInUseUsageDescription\` key\\n * in Info.plist to enable geolocation. Geolocation is enabled by default\\n * when you create a project with \`react-native init\`.\\n *\\n * Geolocation follows the MDN specification:\\n * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation\\n */\\n",
  "requires": [
    \{
      "name": "RCTDeviceEventEmitter"
    },
    \{
      "name": "NativeModules"
    },
    \{
      "name": "invariant"
    },
    \{
      "name": "logError"
    },
    \{
      "name": "warning"
    }
  ],
  "filepath": "Libraries/GeoLocation/Geolocation.js",
  "componentName": "Geolocation",
  "example": \{
    "path": "Examples/UIExplorer/GeolocationExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n/* eslint no-console: 0 */\\n'use strict';\\n\\n\\nvar React = require\('react-native');\\nvar \{\\n  StyleSheet,\\n  Text,\\n  View,\\n} = React;\\n\\nexports.framework = 'React';\\nexports.title = 'Geolocation';\\nexports.description = 'Examples of using the Geolocation API.';\\n\\nexports.examples = [\\n  \{\\n    title: 'navigator.geolocation',\\n    render: function(): ReactElement \{\\n      return <GeolocationExample />;\\n    },\\n  }\\n];\\n\\nvar GeolocationExample = React.createClass(\{\\n  watchID: (null: ?number),\\n\\n  getInitialState: function() \{\\n    return \{\\n      initialPosition: 'unknown',\\n      lastPosition: 'unknown',\\n    };\\n  },\\n\\n  componentDidMount: function() \{\\n    navigator.geolocation.getCurrentPosition(\\n      (initialPosition) => this.setState(\{initialPosition}),\\n      (error) => console.error(error),\\n      \{enableHighAccuracy: true, timeout: 100, maximumAge: 1000}\\n    );\\n    this.watchID = navigator.geolocation.watchPosition((lastPosition) => \{\\n      this.setState(\{lastPosition});\\n    });\\n  },\\n\\n  componentWillUnmount: function() \{\\n    navigator.geolocation.clearWatch(this.watchID);\\n  },\\n\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text>\\n          <Text style=\{styles.title}>Initial position: </Text>\\n          \{JSON.stringify(this.state.initialPosition)}\\n        </Text>\\n        <Text>\\n          <Text style=\{styles.title}>Current position: </Text>\\n          \{JSON.stringify(this.state.lastPosition)}\\n        </Text>\\n      </View>\\n    );\\n  }\\n});\\n\\nvar styles = StyleSheet.create(\{\\n  title: \{\\n    fontWeight: '500',\\n  },\\n});\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"geolocation","title":"Geolocation","layout":"autodocs","category":"Polyfills","permalink":"docs/geolocation.html","next":"network"}}, content);
  }
});
Post.content = content;
module.exports = Post;
