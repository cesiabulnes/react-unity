/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "",
  "props": \{
    "style": \{
      "type": \{
        "name": "custom",
        "raw": "View.propTypes.style"
      },
      "required": false,
      "description": "Used to style and layout the \`Slider\`.  See \`StyleSheet.js\` and\\n\`ViewStylePropTypes.js\` for more info."
    },
    "value": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Initial value of the slider. The value should be between minimumValue\\nand maximumValue, which default to 0 and 1 respectively.\\nDefault value is 0.\\n\\n*This is not a controlled component*, e.g. if you don't update\\nthe value, the component won't be reset to its inital value."
    },
    "minimumValue": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Initial minimum value of the slider. Default value is 0."
    },
    "maximumValue": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Initial maximum value of the slider. Default value is 1."
    },
    "minimumTrackTintColor": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "The color used for the track to the left of the button. Overrides the\\ndefault blue gradient image."
    },
    "maximumTrackTintColor": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "The color used for the track to the right of the button. Overrides the\\ndefault blue gradient image."
    },
    "onValueChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback continuously called while the user is dragging the slider."
    },
    "onSlidingComplete": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback called when the user finishes changing the value (e.g. when\\nthe slider is released)."
    }
  },
  "type": "component",
  "filepath": "Libraries/Components/SliderIOS/SliderIOS.js",
  "componentName": "SliderIOS",
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
    "path": "Examples/UIExplorer/SliderIOSExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  SliderIOS,\\n  Text,\\n  StyleSheet,\\n  View,\\n} = React;\\n\\nvar SliderExample = React.createClass(\{\\n  getInitialState() \{\\n    return \{\\n      value: 0,\\n    };\\n  },\\n\\n  render() \{\\n    return (\\n      <View>\\n        <Text style=\{styles.text} >\\n          \{this.state.value}\\n        </Text>\\n        <SliderIOS\\n          style=\{styles.slider}\\n          onValueChange=\{(value) => this.setState(\{value: value})} />\\n      </View>\\n    );\\n  }\\n});\\n\\nvar styles = StyleSheet.create(\{\\n  slider: \{\\n    height: 10,\\n    margin: 10,\\n  },\\n  text: \{\\n    fontSize: 14,\\n    textAlign: 'center',\\n    fontWeight: '500',\\n    margin: 10,\\n  },\\n});\\n\\nexports.title = '<SliderIOS>';\\nexports.displayName = 'SliderExample';\\nexports.description = 'Slider input for numeric values';\\nexports.examples = [\\n  \{\\n    title: 'SliderIOS',\\n    render(): ReactElement \{ return <SliderExample />; }\\n  }\\n];\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"sliderios","title":"SliderIOS","layout":"autodocs","category":"components","permalink":"docs/sliderios.html","next":"switchios"}}, content);
  }
});
Post.content = content;
module.exports = Post;
