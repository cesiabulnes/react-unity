/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [],
  "properties": [],
  "superClass": null,
  "type": "api",
  "line": 84,
  "name": "NetInfo",
  "docblock": "/**\\n * NetInfo exposes info about online/offline status\\n *\\n * ### reachabilityIOS\\n *\\n * Asynchronously determine if the device is online and on a cellular network.\\n *\\n * - \`none\` - device is offline\\n * - \`wifi\` - device is online and connected via wifi, or is the iOS simulator\\n * - \`cell\` - device is connected via Edge, 3G, WiMax, or LTE\\n * - \`unknown\` - error case and the network status is unknown\\n *\\n * \`\`\`\\n * NetInfo.reachabilityIOS.fetch().done((reach) => \{\\n *   console.log('Initial: ' + reach);\\n * });\\n * function handleFirstReachabilityChange(reach) \{\\n *   console.log('First change: ' + reach);\\n *   NetInfo.reachabilityIOS.removeEventListener(\\n *     'change',\\n *     handleFirstReachabilityChange\\n *   );\\n * }\\n * NetInfo.reachabilityIOS.addEventListener(\\n *   'change',\\n *   handleFirstReachabilityChange\\n * );\\n * \`\`\`\\n *\\n * ### isConnected\\n *\\n * Available on all platforms. Asynchronously fetch a boolean to determine\\n * internet connectivity.\\n *\\n * \`\`\`\\n * NetInfo.isConnected.fetch().done((isConnected) => \{\\n *   console.log('First, is ' + (isConnected ? 'online' : 'offline'));\\n * });\\n * function handleFirstConnectivityChange(isConnected) \{\\n *   console.log('Then, is ' + (isConnected ? 'online' : 'offline'));\\n *   NetInfo.isConnected.removeEventListener(\\n *     'change',\\n *     handleFirstConnectivityChange\\n *   );\\n * }\\n * NetInfo.isConnected.addEventListener(\\n *   'change',\\n *   handleFirstConnectivityChange\\n * );\\n * \`\`\`\\n */\\n",
  "requires": [
    \{
      "name": "NativeModules"
    },
    \{
      "name": "RCTDeviceEventEmitter"
    }
  ],
  "filepath": "Libraries/Network/NetInfo.js",
  "componentName": "NetInfo",
  "example": \{
    "path": "Examples/UIExplorer/NetInfoExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  NetInfo,\\n  Text,\\n  View\\n} = React;\\n\\nvar ReachabilitySubscription = React.createClass(\{\\n  getInitialState() \{\\n    return \{\\n      reachabilityHistory: [],\\n    };\\n  },\\n  componentDidMount: function() \{\\n    NetInfo.reachabilityIOS.addEventListener(\\n      'change',\\n      this._handleReachabilityChange\\n    );\\n  },\\n  componentWillUnmount: function() \{\\n    NetInfo.reachabilityIOS.removeEventListener(\\n      'change',\\n      this._handleReachabilityChange\\n    );\\n  },\\n  _handleReachabilityChange: function(reachability) \{\\n    var reachabilityHistory = this.state.reachabilityHistory.slice();\\n    reachabilityHistory.push(reachability);\\n    this.setState(\{\\n      reachabilityHistory,\\n    });\\n  },\\n  render() \{\\n    return (\\n      <View>\\n        <Text>\{JSON.stringify(this.state.reachabilityHistory)}</Text>\\n      </View>\\n    );\\n  }\\n});\\n\\nvar ReachabilityCurrent = React.createClass(\{\\n  getInitialState() \{\\n    return \{\\n      reachability: null,\\n    };\\n  },\\n  componentDidMount: function() \{\\n    NetInfo.reachabilityIOS.addEventListener(\\n      'change',\\n      this._handleReachabilityChange\\n    );\\n    NetInfo.reachabilityIOS.fetch().done(\\n      (reachability) => \{ this.setState(\{reachability}); }\\n    );\\n  },\\n  componentWillUnmount: function() \{\\n    NetInfo.reachabilityIOS.removeEventListener(\\n      'change',\\n      this._handleReachabilityChange\\n    );\\n  },\\n  _handleReachabilityChange: function(reachability) \{\\n    this.setState(\{\\n      reachability,\\n    });\\n  },\\n  render() \{\\n    return (\\n      <View>\\n        <Text>\{this.state.reachability}</Text>\\n      </View>\\n    );\\n  }\\n});\\n\\nvar IsConnected = React.createClass(\{\\n  getInitialState() \{\\n    return \{\\n      isConnected: null,\\n    };\\n  },\\n  componentDidMount: function() \{\\n    NetInfo.isConnected.addEventListener(\\n      'change',\\n      this._handleConnectivityChange\\n    );\\n    NetInfo.isConnected.fetch().done(\\n      (isConnected) => \{ this.setState(\{isConnected}); }\\n    );\\n  },\\n  componentWillUnmount: function() \{\\n    NetInfo.isConnected.removeEventListener(\\n      'change',\\n      this._handleConnectivityChange\\n    );\\n  },\\n  _handleConnectivityChange: function(isConnected) \{\\n    this.setState(\{\\n      isConnected,\\n    });\\n  },\\n  render() \{\\n    return (\\n      <View>\\n        <Text>\{this.state.isConnected ? 'Online' : 'Offline'}</Text>\\n      </View>\\n    );\\n  }\\n});\\n\\nexports.title = 'NetInfo';\\nexports.description = 'Monitor network status';\\nexports.examples = [\\n  \{\\n    title: 'NetInfo.isConnected',\\n    description: 'Asynchronously load and observe connectivity',\\n    render(): ReactElement \{ return <IsConnected />; }\\n  },\\n  \{\\n    title: 'NetInfo.reachabilityIOS',\\n    description: 'Asynchronously load and observe iOS reachability',\\n    render(): ReactElement \{ return <ReachabilityCurrent />; }\\n  },\\n  \{\\n    title: 'NetInfo.reachabilityIOS',\\n    description: 'Observed updates to iOS reachability',\\n    render(): ReactElement \{ return <ReachabilitySubscription />; }\\n  },\\n];\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"netinfo","title":"NetInfo","layout":"autodocs","category":"apis","permalink":"docs/netinfo.html","next":"panresponder"}}, content);
  }
});
Post.content = content;
module.exports = Post;
