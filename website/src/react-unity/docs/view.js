/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "The most fundamental component for building UI, \`View\` is a\\ncontainer that supports layout with flexbox, style, some touch handling, and\\naccessibility controls, and is designed to be nested inside other views and\\nto have 0 to many children of any type. \`View\` maps directly to the native\\nview equivalent on whatever platform React is running on, whether that is a\\n\`UIView\`, \`<div>\`, \`android.view\`, etc.  This example creates a \`View\` that\\nwraps two colored boxes and custom component in a row with padding.\\n\\n\`\`\`\\n<View style=\{\{flexDirection: 'row', height: 100, padding: 20}}>\\n  <View style=\{\{backgroundColor: 'blue', flex: 0.3}} />\\n  <View style=\{\{backgroundColor: 'red', flex: 0.5}} />\\n  <MyCustomComponent \{...customProps} />\\n</View>\\n\`\`\`\\n\\n\`View\`s are designed to be used with \`StyleSheet\`s for clarity and\\nperformance, although inline styles are also supported.",
  "props": \{
    "accessible": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When true, indicates that the view is an accessibility element. By default,\\nall the touchable elements are accessible."
    },
    "accessibilityLabel": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Overrides the text that's read by the screen reader when the user interacts\\nwith the element. By default, the label is constructed by traversing all the\\nchildren and accumulating all the Text nodes separated by space."
    },
    "testID": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Used to locate this view in end-to-end tests."
    },
    "onMoveShouldSetResponder": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "For most touch interactions, you'll simply want to wrap your component in\\n\`TouchableHighlight\` or \`TouchableOpacity\`. Check out \`Touchable.js\`,\\n\`ScrollResponder.js\` and \`ResponderEventPlugin.js\` for more discussion."
    },
    "onResponderGrant": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onResponderMove": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onResponderReject": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onResponderRelease": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onResponderTerminate": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onResponderTerminationRequest": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onStartShouldSetResponder": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onStartShouldSetResponderCapture": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "pointerEvents": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'box-none'",
            "computed": false
          },
          \{
            "value": "'none'",
            "computed": false
          },
          \{
            "value": "'box-only'",
            "computed": false
          },
          \{
            "value": "'auto'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "In the absence of \`auto\` property, \`none\` is much like \`CSS\`'s \`none\`\\nvalue. \`box-none\` is as if you had applied the \`CSS\` class:\\n\\n\`\`\`\\n.box-none \{\\n  pointer-events: none;\\n}\\n.box-none * \{\\n  pointer-events: all;\\n}\\n\`\`\`\\n\\n\`box-only\` is the equivalent of\\n\\n\`\`\`\\n.box-only \{\\n  pointer-events: all;\\n}\\n.box-only * \{\\n  pointer-events: none;\\n}\\n\`\`\`\\n\\nBut since \`pointerEvents\` does not affect layout/appearance, and we are\\nalready deviating from the spec by adding additional modes, we opt to not\\ninclude \`pointerEvents\` on \`style\`. On some platforms, we would need to\\nimplement it as a \`className\` anyways. Using \`style\` or not is an\\nimplementation detail of the platform."
    },
    "style": \{
      "type": \{
        "name": "stylesheet",
        "value": "ViewStylePropTypes"
      },
      "required": false,
      "description": ""
    },
    "removeClippedSubviews": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "This is a special performance property exposed by RCTView and is useful\\nfor scrolling content when there are many subviews, most of which are\\noffscreen. For this property to be effective, it must be applied to a\\nview that contains many subviews that extend outside its bound. The\\nsubviews must also have overflow: hidden, as should the containing view\\n(or one of its superviews)."
    },
    "renderToHardwareTextureAndroid": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Whether this view should render itself (and all of its children) into a\\nsingle hardware texture on the GPU.\\n\\nOn Android, this is useful for animations and interactions that only\\nmodify opacity, rotation, translation, and/or scale: in those cases, the\\nview doesn't have to be redrawn and display lists don't need to be\\nre-executed. The texture can just be re-used and re-composited with\\ndifferent parameters. The downside is that this can use up limited video\\nmemory, so this prop should be set back to false at the end of the\\ninteraction/animation."
    }
  },
  "type": "component",
  "filepath": "Libraries/Components/View/View.js",
  "componentName": "View",
  "styles": \{
    "ViewStylePropTypes": \{
      "description": "",
      "props": \{
        "backgroundColor": \{
          "type": \{
            "name": "string"
          },
          "required": false
        },
        "borderColor": \{
          "type": \{
            "name": "string"
          },
          "required": false
        },
        "borderTopColor": \{
          "type": \{
            "name": "string"
          },
          "required": false
        },
        "borderRightColor": \{
          "type": \{
            "name": "string"
          },
          "required": false
        },
        "borderBottomColor": \{
          "type": \{
            "name": "string"
          },
          "required": false
        },
        "borderLeftColor": \{
          "type": \{
            "name": "string"
          },
          "required": false
        },
        "borderRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false
        },
        "opacity": \{
          "type": \{
            "name": "number"
          },
          "required": false
        },
        "overflow": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "'visible'",
                "computed": false
              },
              \{
                "value": "'hidden'",
                "computed": false
              }
            ]
          },
          "required": false
        },
        "shadowColor": \{
          "type": \{
            "name": "string"
          },
          "required": false
        },
        "shadowOffset": \{
          "type": \{
            "name": "shape",
            "value": \{
              "h": \{
                "name": "number"
              },
              "w": \{
                "name": "number"
              }
            }
          },
          "required": false
        },
        "shadowOpacity": \{
          "type": \{
            "name": "number"
          },
          "required": false
        },
        "shadowRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false
        },
        "transform": \{
          "type": \{
            "name": "arrayOf",
            "value": \{
              "name": "object"
            }
          },
          "required": false
        },
        "transformMatrix": \{
          "type": \{
            "name": "arrayOf",
            "value": \{
              "name": "number"
            }
          },
          "required": false
        },
        "rotation": \{
          "type": \{
            "name": "number"
          },
          "required": false
        },
        "scaleX": \{
          "type": \{
            "name": "number"
          },
          "required": false
        },
        "scaleY": \{
          "type": \{
            "name": "number"
          },
          "required": false
        },
        "translateX": \{
          "type": \{
            "name": "number"
          },
          "required": false
        },
        "translateY": \{
          "type": \{
            "name": "number"
          },
          "required": false
        }
      },
      "composes": [
        "LayoutPropTypes"
      ]
    },
    "TextStylePropTypes": \{
      "description": "",
      "props": \{
        "fontFamily": \{
          "type": \{
            "name": "string"
          },
          "required": false
        },
        "fontSize": \{
          "type": \{
            "name": "number"
          },
          "required": false
        },
        "fontWeight": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"normal\\"",
                "computed": false
              },
              \{
                "value": "'bold'",
                "computed": false
              },
              \{
                "value": "'100'",
                "computed": false
              },
              \{
                "value": "'200'",
                "computed": false
              },
              \{
                "value": "'300'",
                "computed": false
              },
              \{
                "value": "'400'",
                "computed": false
              },
              \{
                "value": "'500'",
                "computed": false
              },
              \{
                "value": "'600'",
                "computed": false
              },
              \{
                "value": "'700'",
                "computed": false
              },
              \{
                "value": "'800'",
                "computed": false
              },
              \{
                "value": "'900'",
                "computed": false
              }
            ]
          },
          "required": false
        },
        "fontStyle": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "'normal'",
                "computed": false
              },
              \{
                "value": "'italic'",
                "computed": false
              }
            ]
          },
          "required": false
        },
        "lineHeight": \{
          "type": \{
            "name": "number"
          },
          "required": false
        },
        "color": \{
          "type": \{
            "name": "string"
          },
          "required": false
        },
        "containerBackgroundColor": \{
          "type": \{
            "name": "string"
          },
          "required": false
        },
        "textAlign": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"auto\\"",
                "computed": false
              },
              \{
                "value": "'left'",
                "computed": false
              },
              \{
                "value": "'right'",
                "computed": false
              },
              \{
                "value": "'center'",
                "computed": false
              }
            ]
          },
          "required": false
        },
        "writingDirection": \{
          "type": \{
            "name": "enum",
            "value": [
              \{
                "value": "\\"auto\\"",
                "computed": false
              },
              \{
                "value": "'ltr'",
                "computed": false
              },
              \{
                "value": "'rtl'",
                "computed": false
              }
            ]
          },
          "required": false
        }
      },
      "composes": [
        "ViewStylePropTypes"
      ]
    },
    "ImageStylePropTypes": \{
      "description": "",
      "props": \{
        "resizeMode": \{
          "type": \{
            "name": "enum",
            "computed": true,
            "value": "Object.keys(ImageResizeMode)"
          },
          "required": false
        },
        "backgroundColor": \{
          "type": \{
            "name": "string"
          },
          "required": false
        },
        "borderColor": \{
          "type": \{
            "name": "string"
          },
          "required": false
        },
        "borderWidth": \{
          "type": \{
            "name": "number"
          },
          "required": false
        },
        "borderRadius": \{
          "type": \{
            "name": "number"
          },
          "required": false
        },
        "tintColor": \{
          "type": \{
            "name": "string"
          },
          "required": false
        },
        "opacity": \{
          "type": \{
            "name": "number"
          },
          "required": false
        }
      },
      "composes": [
        "LayoutPropTypes"
      ]
    }
  },
  "example": \{
    "path": "Examples/UIExplorer/ViewExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  StyleSheet,\\n  Text,\\n  View,\\n} = React;\\n\\nvar styles = StyleSheet.create(\{\\n  box: \{\\n    backgroundColor: '#527FE4',\\n    borderColor: '#000033',\\n    borderWidth: 1,\\n  }\\n});\\n\\nexports.title = '<View>';\\nexports.description = 'Basic building block of all UI.';\\nexports.displayName = 'ViewExample';\\nexports.examples = [\\n  \{\\n    title: 'Background Color',\\n    render: function() \{\\n      return (\\n        <View style=\{\{backgroundColor: '#527FE4', padding: 5}}>\\n          <Text style=\{\{fontSize: 11}}>\\n            Blue background\\n          </Text>\\n        </View>\\n      );\\n    },\\n  }, \{\\n    title: 'Border',\\n    render: function() \{\\n      return (\\n        <View style=\{\{borderColor: '#527FE4', borderWidth: 5, padding: 10}}>\\n          <Text style=\{\{fontSize: 11}}>5px blue border</Text>\\n        </View>\\n      );\\n    },\\n  }, \{\\n    title: 'Padding/Margin',\\n    render: function() \{\\n      return (\\n        <View style=\{\{borderColor: '#bb0000', borderWidth: 0.5}}>\\n          <View style=\{[styles.box, \{padding: 5}]}>\\n            <Text style=\{\{fontSize: 11}}>5px padding</Text>\\n          </View>\\n          <View style=\{[styles.box, \{margin: 5}]}>\\n            <Text style=\{\{fontSize: 11}}>5px margin</Text>\\n          </View>\\n          <View style=\{[styles.box, \{margin: 5, padding: 5, alignSelf: 'flex-start'}]}>\\n            <Text style=\{\{fontSize: 11}}>\\n              5px margin and padding,\\n            </Text>\\n            <Text style=\{\{fontSize: 11}}>\\n              widthAutonomous=true\\n            </Text>\\n          </View>\\n        </View>\\n      );\\n    },\\n  }, \{\\n    title: 'Border Radius',\\n    render: function() \{\\n      return (\\n        <View style=\{\{borderWidth: 0.5, borderRadius: 5, padding: 5}}>\\n          <Text style=\{\{fontSize: 11}}>\\n            Too much use of \`borderRadius\` (especially large radii) on\\n            anything which is scrolling may result in dropped frames.\\n            Use sparingly.\\n          </Text>\\n        </View>\\n      );\\n    },\\n  }, \{\\n    title: 'Circle with Border Radius',\\n    render: function() \{\\n      return (\\n        <View style=\{\{borderRadius: 10, borderWidth: 1, width: 20, height: 20}} />\\n      );\\n    },\\n  }, \{\\n    title: 'Overflow',\\n    render: function() \{\\n      return (\\n        <View style=\{\{flexDirection: 'row'}}>\\n          <View\\n            style=\{\{\\n              width: 95,\\n              height: 10,\\n              marginRight: 10,\\n              marginBottom: 5,\\n              overflow: 'hidden',\\n              borderWidth: 0.5,\\n            }}>\\n            <View style=\{\{width: 200, height: 20}}>\\n              <Text>Overflow hidden</Text>\\n            </View>\\n          </View>\\n          <View style=\{\{width: 95, height: 10, marginBottom: 5, borderWidth: 0.5}}>\\n            <View style=\{\{width: 200, height: 20}}>\\n              <Text>Overflow visible</Text>\\n            </View>\\n          </View>\\n        </View>\\n      );\\n    },\\n  }, \{\\n    title: 'Opacity',\\n    render: function() \{\\n      return (\\n        <View>\\n          <View style=\{\{opacity: 0}}><Text>Opacity 0</Text></View>\\n          <View style=\{\{opacity: 0.1}}><Text>Opacity 0.1</Text></View>\\n          <View style=\{\{opacity: 0.3}}><Text>Opacity 0.3</Text></View>\\n          <View style=\{\{opacity: 0.5}}><Text>Opacity 0.5</Text></View>\\n          <View style=\{\{opacity: 0.7}}><Text>Opacity 0.7</Text></View>\\n          <View style=\{\{opacity: 0.9}}><Text>Opacity 0.9</Text></View>\\n          <View style=\{\{opacity: 1}}><Text>Opacity 1</Text></View>\\n        </View>\\n      );\\n    },\\n  },\\n];\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"view","title":"View","layout":"autodocs","category":"components","permalink":"docs/view.html","next":"webview"}}, content);
  }
});
Post.content = content;
module.exports = Post;
