/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 103,
      "source": "static saveImageWithTag(tag, successCallback, errorCallback) \{\\n    invariant(\\n      typeof tag === 'string',\\n      'CameraRoll.saveImageWithTag tag must be a valid string.'\\n    );\\n    RCTCameraRollManager.saveImageWithTag(\\n      tag,\\n      (imageTag) => \{\\n        successCallback && successCallback(imageTag);\\n      },\\n      (errorMessage) => \{\\n        errorCallback && errorCallback(errorMessage);\\n      });\\n  }",
      "docblock": "/**\\n   * Saves the image with tag \`tag\` to the camera roll.\\n   *\\n   * @param \{string} tag - Can be any of the three kinds of tags we accept:\\n   *                       1. URL\\n   *                       2. assets-library tag\\n   *                       3. tag returned from storing an image in memory\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "tag"
        },
        \{
          "typehint": null,
          "name": "successCallback"
        },
        \{
          "typehint": null,
          "name": "errorCallback"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "saveImageWithTag"
    },
    \{
      "line": 127,
      "source": "static getPhotos(params, callback, errorCallback) \{\\n    var metaCallback = callback;\\n    if (__DEV__) \{\\n      getPhotosParamChecker(\{params}, 'params', 'CameraRoll.getPhotos');\\n      invariant(\\n        typeof callback === 'function',\\n        'CameraRoll.getPhotos callback must be a valid function.'\\n      );\\n      invariant(\\n        typeof errorCallback === 'function',\\n        'CameraRoll.getPhotos errorCallback must be a valid function.'\\n      );\\n    }\\n    if (__DEV__) \{\\n      metaCallback = (response) => \{\\n        getPhotosReturnChecker(\\n          \{response},\\n          'response',\\n          'CameraRoll.getPhotos callback'\\n        );\\n        callback(response);\\n      };\\n    }\\n    RCTCameraRollManager.getPhotos(params, metaCallback, errorCallback);\\n  }",
      "docblock": "/**\\n   *  Invokes \`callback\` with photo identifier objects from the local camera\\n   *  roll of the device matching shape defined by \`getPhotosReturnChecker\`.\\n   *\\n   *  @param \{object} params - See \`getPhotosParamChecker\`.\\n   *  @param \{function} callback - Invoked with arg of shape defined by\\n   *    \`getPhotosReturnChecker\` on success.\\n   *  @param \{function} errorCallback - Invoked with error message on error.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"object\\",\\"length\\":1}",
          "name": "params"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"function\\",\\"length\\":1}",
          "name": "callback"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"function\\",\\"length\\":1}",
          "name": "errorCallback"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "getPhotos"
    }
  ],
  "type": "api",
  "line": 94,
  "name": "CameraRoll",
  "docblock": "/**\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * @flow\\n */\\n",
  "requires": [
    \{
      "name": "ReactPropTypes"
    },
    \{
      "name": "NativeModules"
    },
    \{
      "name": "createStrictShapeTypeChecker"
    },
    \{
      "name": "deepFreezeAndThrowOnMutationInDev"
    },
    \{
      "name": "invariant"
    }
  ],
  "filepath": "Libraries/CameraRoll/CameraRoll.js",
  "componentName": "CameraRoll",
  "example": \{
    "path": "Examples/UIExplorer/CameraRollExample.ios.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  CameraRoll,\\n  Image,\\n  SliderIOS,\\n  StyleSheet,\\n  SwitchIOS,\\n  Text,\\n  View,\\n} = React;\\n\\nvar CameraRollView = require\('./CameraRollView.ios');\\n\\nvar CAMERA_ROLL_VIEW = 'camera_roll_view';\\n\\nvar CameraRollExample = React.createClass(\{\\n\\n  getInitialState() \{\\n    return \{\\n      groupTypes: 'SavedPhotos',\\n      sliderValue: 1,\\n      bigImages: true,\\n    };\\n  },\\n\\n  render() \{\\n    return (\\n      <View>\\n        <SwitchIOS\\n          onValueChange=\{this._onSwitchChange}\\n          value=\{this.state.bigImages} />\\n        <Text>\{(this.state.bigImages ? 'Big' : 'Small') + ' Images'}</Text>\\n        <SliderIOS\\n          value=\{this.state.sliderValue}\\n          onValueChange=\{this._onSliderChange}\\n        />\\n        <Text>\{'Group Type: ' + this.state.groupTypes}</Text>\\n        <CameraRollView\\n          ref=\{CAMERA_ROLL_VIEW}\\n          batchSize=\{5}\\n          groupTypes=\{this.state.groupTypes}\\n          renderImage=\{this._renderImage}\\n        />\\n      </View>\\n    );\\n  },\\n\\n  _renderImage(asset) \{\\n    var imageSize = this.state.bigImages ? 150 : 75;\\n    var imageStyle = [styles.image, \{width: imageSize, height: imageSize}];\\n    var location = asset.node.location.longitude ?\\n      JSON.stringify(asset.node.location) : 'Unknown location';\\n    return (\\n      <View key=\{asset} style=\{styles.row}>\\n        <Image\\n          source=\{asset.node.image}\\n          style=\{imageStyle}\\n        />\\n        <View style=\{styles.info}>\\n          <Text style=\{styles.url}>\{asset.node.image.uri}</Text>\\n          <Text>\{location}</Text>\\n          <Text>\{asset.node.group_name}</Text>\\n          <Text>\{new Date(asset.node.timestamp).toString()}</Text>\\n        </View>\\n      </View>\\n    );\\n  },\\n\\n  _onSliderChange(value) \{\\n    var options = CameraRoll.GroupTypesOptions;\\n    var index = Math.floor(value * options.length * 0.99);\\n    var groupTypes = options[index];\\n    if (groupTypes !== this.state.groupTypes) \{\\n      this.setState(\{groupTypes: groupTypes});\\n    }\\n  },\\n\\n  _onSwitchChange(value) \{\\n    this.refs[CAMERA_ROLL_VIEW].rendererChanged();\\n    this.setState(\{ bigImages: value });\\n  }\\n});\\n\\nvar styles = StyleSheet.create(\{\\n  row: \{\\n    flexDirection: 'row',\\n    flex: 1,\\n  },\\n  url: \{\\n    fontSize: 9,\\n    marginBottom: 14,\\n  },\\n  image: \{\\n    margin: 4,\\n  },\\n  info: \{\\n    flex: 1,\\n  },\\n});\\n\\nexports.title = '<CameraRollView>';\\nexports.description = 'Example component that uses CameraRoll to list user\\\\'s photos';\\nexports.examples = [\\n  \{\\n    title: 'Photos',\\n    render(): ReactElement \{ return <CameraRollExample />; }\\n  }\\n];\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"cameraroll","title":"CameraRoll","layout":"autodocs","category":"apis","permalink":"docs/cameraroll.html","next":"interactionmanager"}}, content);
  }
});
Post.content = content;
module.exports = Post;
