/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 38,
      "source": "getItem: function(\\n    key: string,\\n    callback: (error: ?Error, result: ?string) => void\\n  ): Promise \{\\n    return new Promise((resolve, reject) => \{\\n      RCTAsyncStorage.multiGet([key], function(errors, result) \{\\n        // Unpack result to get value from [[key,value]]\\n        var value = (result && result[0] && result[0][1]) ? result[0][1] : null;\\n        callback && callback((errors && convertError(errors[0])) || null, value);\\n        if (errors) \{\\n          reject(convertError(errors[0]));\\n        } else \{\\n          resolve(value);\\n        }\\n      });\\n    });\\n  }",
      "docblock": "/**\\n   * Fetches \`key\` and passes the result to \`callback\`, along with an \`Error\` if\\n   * there is any. Returns a \`Promise\` object.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "key"
        },
        \{
          "typehint": "(error: ?Error, result: ?string) => void",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1}",
      "name": "getItem"
    },
    \{
      "line": 60,
      "source": "setItem: function(\\n    key: string,\\n    value: string,\\n    callback: ?(error: ?Error) => void\\n  ): Promise \{\\n    return new Promise((resolve, reject) => \{\\n      RCTAsyncStorage.multiSet([[key,value]], function(errors) \{\\n        callback && callback((errors && convertError(errors[0])) || null);\\n        if (errors) \{\\n          reject(convertError(errors[0]));\\n        } else \{\\n          resolve(null);\\n        }\\n      });\\n    });\\n  }",
      "docblock": "/**\\n   * Sets \`value\` for \`key\` and calls \`callback\` on completion, along with an\\n   * \`Error\` if there is any. Returns a \`Promise\` object.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "key"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "value"
        },
        \{
          "typehint": "?(error: ?Error) => void",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1}",
      "name": "setItem"
    },
    \{
      "line": 79,
      "source": "removeItem: function(\\n    key: string,\\n    callback: ?(error: ?Error) => void\\n  ): Promise \{\\n    return new Promise((resolve, reject) => \{\\n      RCTAsyncStorage.multiRemove([key], function(errors) \{\\n        callback && callback((errors && convertError(errors[0])) || null);\\n        if (errors) \{\\n          reject(convertError(errors[0]));\\n        } else \{\\n          resolve(null);\\n        }\\n      });\\n    });\\n  }",
      "docblock": "/**\\n   * Returns a \`Promise\` object.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "key"
        },
        \{
          "typehint": "?(error: ?Error) => void",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1}",
      "name": "removeItem"
    },
    \{
      "line": 100,
      "source": "mergeItem: function(\\n    key: string,\\n    value: string,\\n    callback: ?(error: ?Error) => void\\n  ): Promise \{\\n    return new Promise((resolve, reject) => \{\\n      RCTAsyncStorage.multiMerge([[key,value]], function(errors) \{\\n        callback && callback((errors && convertError(errors[0])) || null);\\n        if (errors) \{\\n          reject(convertError(errors[0]));\\n        } else \{\\n          resolve(null);\\n        }\\n      });\\n    });\\n  }",
      "docblock": "/**\\n   * Merges existing value with input value, assuming they are stringified json. Returns a \`Promise\` object.\\n   *\\n   * Not supported by all native implementations.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "key"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "value"
        },
        \{
          "typehint": "?(error: ?Error) => void",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1}",
      "name": "mergeItem"
    },
    \{
      "line": 122,
      "source": "clear: function(callback: ?(error: ?Error) => void): Promise \{\\n    return new Promise((resolve, reject) => \{\\n      RCTAsyncStorage.clear(function(error) \{\\n        callback && callback(convertError(error));\\n        if (error && convertError(error))\{\\n          reject(convertError(error));\\n        } else \{\\n          resolve(null);\\n        }\\n      });\\n    });\\n  }",
      "docblock": "/**\\n   * Erases *all* AsyncStorage for all clients, libraries, etc.  You probably\\n   * don't want to call this - use removeItem or multiRemove to clear only your\\n   * own keys instead. Returns a \`Promise\` object.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "?(error: ?Error) => void",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1}",
      "name": "clear"
    },
    \{
      "line": 138,
      "source": "getAllKeys: function(callback: (error: ?Error) => void): Promise \{\\n    return new Promise((resolve, reject) => \{\\n      RCTAsyncStorage.getAllKeys(function(error, keys) \{\\n        callback && callback(convertError(error), keys);\\n        if (error) \{\\n          reject(convertError(error));\\n        } else \{\\n          resolve(keys);\\n        }\\n      });\\n    });\\n  }",
      "docblock": "/**\\n   * Gets *all* keys known to the system, for all callers, libraries, etc. Returns a \`Promise\` object.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "(error: ?Error) => void",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1}",
      "name": "getAllKeys"
    },
    \{
      "line": 167,
      "source": "multiGet: function(\\n    keys: Array<string>,\\n    callback: (errors: ?Array<Error>, result: ?Array<Array<string>>) => void\\n  ): Promise \{\\n    return new Promise((resolve, reject) => \{\\n      RCTAsyncStorage.multiGet(keys, function(errors, result) \{\\n        var error = (errors && errors.map((error) => convertError(error))) || null;\\n        callback && callback(error, result);\\n        if (errors) \{\\n          reject(error);\\n        } else \{\\n          resolve(result);\\n        }\\n      });\\n    });\\n  }",
      "docblock": "/**\\n   * multiGet invokes callback with an array of key-value pair arrays that\\n   * matches the input format of multiSet. Returns a \`Promise\` object.\\n   *\\n   *   multiGet(['k1', 'k2'], cb) -> cb([['k1', 'val1'], ['k2', 'val2']])\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Array\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}],\\"length\\":4}",
          "name": "keys"
        },
        \{
          "typehint": "(errors: ?Array<Error>, result: ?Array<Array<string>>) => void",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1}",
      "name": "multiGet"
    },
    \{
      "line": 190,
      "source": "multiSet: function(\\n    keyValuePairs: Array<Array<string>>,\\n    callback: ?(errors: ?Array<Error>) => void\\n  ): Promise \{\\n    return new Promise((resolve, reject) => \{\\n      RCTAsyncStorage.multiSet(keyValuePairs, function(errors) \{\\n        var error = (errors && errors.map((error) => convertError(error))) || null;\\n        callback && callback(error);\\n        if (errors) \{\\n          reject(error);\\n        } else \{\\n          resolve(null);\\n        }\\n      });\\n    });\\n  }",
      "docblock": "/**\\n   * multiSet and multiMerge take arrays of key-value array pairs that match\\n   * the output of multiGet, e.g. Returns a \`Promise\` object.\\n   *\\n   *   multiSet([['k1', 'val1'], ['k2', 'val2']], cb);\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Array\\",\\"length\\":1},\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Array\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}],\\"length\\":4}],\\"length\\":7}",
          "name": "keyValuePairs"
        },
        \{
          "typehint": "?(errors: ?Array<Error>) => void",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1}",
      "name": "multiSet"
    },
    \{
      "line": 210,
      "source": "multiRemove: function(\\n    keys: Array<string>,\\n    callback: ?(errors: ?Array<Error>) => void\\n  ): Promise \{\\n    return new Promise((resolve, reject) => \{\\n      RCTAsyncStorage.multiRemove(keys, function(errors) \{\\n        var error = (errors && errors.map((error) => convertError(error))) || null;\\n        callback && callback(error);\\n        if (errors) \{\\n          reject(error);\\n        } else \{\\n          resolve(null);\\n        }\\n      });\\n    });\\n  }",
      "docblock": "/**\\n   * Delete all the keys in the \`keys\` array. Returns a \`Promise\` object.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Array\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}],\\"length\\":4}",
          "name": "keys"
        },
        \{
          "typehint": "?(errors: ?Array<Error>) => void",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1}",
      "name": "multiRemove"
    },
    \{
      "line": 233,
      "source": "multiMerge: function(\\n    keyValuePairs: Array<Array<string>>,\\n    callback: ?(errors: ?Array<Error>) => void\\n  ): Promise \{\\n    return new Promise((resolve, reject) => \{\\n      RCTAsyncStorage.multiMerge(keyValuePairs, function(errors) \{\\n        var error = (errors && errors.map((error) => convertError(error))) || null;\\n        callback && callback(error);\\n        if (errors) \{\\n          reject(error);\\n        } else \{\\n          resolve(null);\\n        }\\n      });\\n    });\\n  }",
      "docblock": "/**\\n   * Merges existing values with input values, assuming they are stringified\\n   * json. Returns a \`Promise\` object.\\n   *\\n   * Not supported by all native implementations.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Array\\",\\"length\\":1},\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Array\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}],\\"length\\":4}],\\"length\\":7}",
          "name": "keyValuePairs"
        },
        \{
          "typehint": "?(errors: ?Array<Error>) => void",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Promise\\",\\"length\\":1}",
      "name": "multiMerge"
    }
  ],
  "properties": [],
  "superClass": null,
  "type": "api",
  "line": 33,
  "name": "AsyncStorage",
  "docblock": "/**\\n * AsyncStorage is a simple, asynchronous, persistent, global, key-value storage\\n * system.  It should be used instead of LocalStorage.\\n *\\n * It is recommended that you use an abstraction on top of AsyncStorage instead\\n * of AsyncStorage directly for anything more than light usage since it\\n * operates globally.\\n *\\n * This JS code is a simple facad over the native iOS implementation to provide\\n * a clear JS API, real Error objects, and simple non-multi functions. Each\\n * method returns a \`Promise\` object.\\n */\\n",
  "requires": [
    \{
      "name": "NativeModules"
    }
  ],
  "filepath": "Libraries/Storage/AsyncStorage.ios.js",
  "componentName": "AsyncStorage",
  "example": \{
    "path": "Examples/UIExplorer/AsyncStorageExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  AsyncStorage,\\n  PickerIOS,\\n  Text,\\n  View\\n} = React;\\nvar PickerItemIOS = PickerIOS.Item;\\n\\nvar STORAGE_KEY = '@AsyncStorageExample:key';\\nvar COLORS = ['red', 'orange', 'yellow', 'green', 'blue'];\\n\\nvar BasicStorageExample = React.createClass(\{\\n  componentDidMount() \{\\n    AsyncStorage.getItem(STORAGE_KEY)\\n      .then((value) => \{\\n        if (value !== null)\{\\n          this.setState(\{selectedValue: value});\\n          this._appendMessage('Recovered selection from disk: ' + value);\\n        } else \{\\n          this._appendMessage('Initialized with no selection on disk.');\\n        }\\n      })\\n      .catch((error) => this._appendMessage('AsyncStorage error: ' + error.message))\\n      .done();\\n  },\\n  getInitialState() \{\\n    return \{\\n      selectedValue: COLORS[0],\\n      messages: [],\\n    };\\n  },\\n\\n  render() \{\\n    var color = this.state.selectedValue;\\n    return (\\n      <View>\\n        <PickerIOS\\n          selectedValue=\{color}\\n          onValueChange=\{this._onValueChange}>\\n          \{COLORS.map((value) => (\\n            <PickerItemIOS\\n              key=\{value}\\n              value=\{value}\\n              label=\{value}\\n            />\\n          ))}\\n        </PickerIOS>\\n        <Text>\\n          \{'Selected: '}\\n          <Text style=\{\{color}}>\\n            \{this.state.selectedValue}\\n          </Text>\\n        </Text>\\n        <Text>\{' '}</Text>\\n        <Text onPress=\{this._removeStorage}>\\n          Press here to remove from storage.\\n        </Text>\\n        <Text>\{' '}</Text>\\n        <Text>Messages:</Text>\\n        \{this.state.messages.map((m) => <Text>\{m}</Text>)}\\n      </View>\\n    );\\n  },\\n\\n  _onValueChange(selectedValue) \{\\n    this.setState(\{selectedValue});\\n    AsyncStorage.setItem(STORAGE_KEY, selectedValue)\\n      .then(() => this._appendMessage('Saved selection to disk: ' + selectedValue))\\n      .catch((error) => this._appendMessage('AsyncStorage error: ' + error.message))\\n      .done();\\n  },\\n\\n  _removeStorage() \{\\n    AsyncStorage.removeItem(STORAGE_KEY)\\n      .then(() => this._appendMessage('Selection removed from disk.'))\\n      .catch((error) => \{ this._appendMessage('AsyncStorage error: ' + error.message) })\\n      .done();\\n  },\\n\\n  _appendMessage(message) \{\\n    this.setState(\{messages: this.state.messages.concat(message)});\\n  },\\n});\\n\\nexports.title = 'AsyncStorage';\\nexports.description = 'Asynchronous local disk storage.';\\nexports.examples = [\\n  \{\\n    title: 'Basics - getItem, setItem, removeItem',\\n    render(): ReactElement \{ return <BasicStorageExample />; }\\n  },\\n];\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"asyncstorage","title":"AsyncStorage","layout":"autodocs","category":"apis","permalink":"docs/asyncstorage.html","next":"cameraroll"}}, content);
  }
});
Post.content = content;
module.exports = Post;
