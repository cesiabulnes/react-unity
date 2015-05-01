/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "",
  "props": \{
    "animating": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Whether to show the indicator (true, the default) or hide it (false).",
      "defaultValue": \{
        "value": "true",
        "computed": false
      }
    },
    "color": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "The foreground color of the spinner (default is gray).",
      "defaultValue": \{
        "value": "'#999999'",
        "computed": false
      }
    },
    "hidesWhenStopped": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Whether the indicator should hide when not animating (true by default).",
      "defaultValue": \{
        "value": "true",
        "computed": false
      }
    },
    "size": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'small'",
            "computed": false
          },
          \{
            "value": "'large'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Size of the indicator. Small has a height of 20, large has a height of 36.",
      "defaultValue": \{
        "value": "'small'",
        "computed": false
      }
    }
  },
  "type": "component",
  "filepath": "Libraries/Components/ActivityIndicatorIOS/ActivityIndicatorIOS.ios.js",
  "componentName": "ActivityIndicatorIOS",
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
    "path": "Examples/UIExplorer/ActivityIndicatorIOSExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  ActivityIndicatorIOS,\\n  StyleSheet,\\n  View,\\n} = React;\\nvar TimerMixin = require\('react-timer-mixin');\\n\\nvar ToggleAnimatingActivityIndicator = React.createClass(\{\\n  mixins: [TimerMixin],\\n\\n  getInitialState: function() \{\\n    return \{\\n      animating: true,\\n    };\\n  },\\n\\n  setToggleTimeout: function() \{\\n    this.setTimeout(\\n      () => \{\\n        this.setState(\{animating: !this.state.animating});\\n        this.setToggleTimeout();\\n      },\\n      1200\\n    );\\n  },\\n\\n  componentDidMount: function() \{\\n    this.setToggleTimeout();\\n  },\\n\\n  render: function() \{\\n    return (\\n      <ActivityIndicatorIOS\\n        animating=\{this.state.animating}\\n        style=\{[styles.centering, \{height: 80}]}\\n        size=\\"large\\"\\n      />\\n    );\\n  }\\n});\\n\\nexports.displayName = (undefined: ?string);\\nexports.framework = 'React';\\nexports.title = '<ActivityIndicatorIOS>';\\nexports.description = 'Animated loading indicators.';\\n\\nexports.examples = [\\n  \{\\n    title: 'Default (small, white)',\\n    render: function() \{\\n      return (\\n        <ActivityIndicatorIOS\\n          style=\{[styles.centering, styles.gray, \{height: 40}]}\\n          color=\\"white\\"\\n          />\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Gray',\\n    render: function() \{\\n      return (\\n        <View>\\n          <ActivityIndicatorIOS\\n            style=\{[styles.centering, \{height: 40}]}\\n          />\\n          <ActivityIndicatorIOS\\n            style=\{[styles.centering, \{backgroundColor: '#eeeeee', height: 40}]}\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Custom colors',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <ActivityIndicatorIOS color=\\"#0000ff\\" />\\n          <ActivityIndicatorIOS color=\\"#aa00aa\\" />\\n          <ActivityIndicatorIOS color=\\"#aa3300\\" />\\n          <ActivityIndicatorIOS color=\\"#00aa00\\" />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Large',\\n    render: function() \{\\n      return (\\n        <ActivityIndicatorIOS\\n          style=\{[styles.centering, styles.gray, \{height: 80}]}\\n          color=\\"white\\"\\n          size=\\"large\\"\\n        />\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Large, custom colors',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <ActivityIndicatorIOS\\n            size=\\"large\\"\\n            color=\\"#0000ff\\"\\n          />\\n          <ActivityIndicatorIOS\\n            size=\\"large\\"\\n            color=\\"#aa00aa\\"\\n          />\\n          <ActivityIndicatorIOS\\n            size=\\"large\\"\\n            color=\\"#aa3300\\"\\n          />\\n          <ActivityIndicatorIOS\\n            size=\\"large\\"\\n            color=\\"#00aa00\\"\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Start/stop',\\n    render: function(): ReactElement \{\\n      return <ToggleAnimatingActivityIndicator />;\\n    }\\n  },\\n];\\n\\nvar styles = StyleSheet.create(\{\\n  centering: \{\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  gray: \{\\n    backgroundColor: '#cccccc',\\n  },\\n  horizontal: \{\\n    flexDirection: 'row',\\n    justifyContent: 'space-around',\\n  },\\n});\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"activityindicatorios","title":"ActivityIndicatorIOS","layout":"autodocs","category":"components","permalink":"docs/activityindicatorios.html","next":"datepickerios"}}, content);
  }
});
Post.content = content;
module.exports = Post;
