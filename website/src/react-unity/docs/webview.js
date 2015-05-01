/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "",
  "props": \{
    "url": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "html": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "renderError": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "renderLoading": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "bounces": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "scrollEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "automaticallyAdjustContentInsets": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "shouldInjectAJAXHandler": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "contentInset": \{
      "type": \{
        "name": "custom",
        "raw": "EdgeInsetsPropType"
      },
      "required": false,
      "description": ""
    },
    "onNavigationStateChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "startInLoadingState": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "style": \{
      "type": \{
        "name": "custom",
        "raw": "View.propTypes.style"
      },
      "required": false,
      "description": ""
    },
    "javaScriptEnabledAndroid": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Used for android only, JS is enabled by default for WebView on iOS"
    }
  },
  "type": "component",
  "filepath": "Libraries/Components/WebView/WebView.ios.js",
  "componentName": "WebView",
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
    "path": "Examples/UIExplorer/WebViewExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar StyleSheet = require\('StyleSheet');\\nvar \{\\n  StyleSheet,\\n  Text,\\n  TextInput,\\n  TouchableOpacity,\\n  View,\\n  WebView\\n} = React;\\n\\nvar HEADER = '#3b5998';\\nvar BGWASH = 'rgba(255,255,255,0.8)';\\nvar DISABLED_WASH = 'rgba(255,255,255,0.25)';\\n\\nvar TEXT_INPUT_REF = 'urlInput';\\nvar WEBVIEW_REF = 'webview';\\nvar DEFAULT_URL = 'https://m.facebook.com';\\n\\nvar WebViewExample = React.createClass(\{\\n\\n  getInitialState: function() \{\\n    return \{\\n      url: DEFAULT_URL,\\n      status: 'No Page Loaded',\\n      backButtonEnabled: false,\\n      forwardButtonEnabled: false,\\n      loading: true,\\n    };\\n  },\\n\\n  inputText: '',\\n\\n  handleTextInputChange: function(event) \{\\n    this.inputText = event.nativeEvent.text;\\n  },\\n\\n  render: function() \{\\n    this.inputText = this.state.url;\\n\\n    return (\\n      <View style=\{[styles.container]}>\\n        <View style=\{[styles.addressBarRow]}>\\n          <TouchableOpacity onPress=\{this.goBack}>\\n            <View style=\{this.state.backButtonEnabled ? styles.navButton : styles.disabledButton}>\\n              <Text>\\n                 \{'<'}\\n              </Text>\\n            </View>\\n          </TouchableOpacity>\\n          <TouchableOpacity onPress=\{this.goForward}>\\n            <View style=\{this.state.forwardButtonEnabled ? styles.navButton : styles.disabledButton}>\\n              <Text>\\n                \{'>'}\\n              </Text>\\n            </View>\\n          </TouchableOpacity>\\n          <TextInput\\n            ref=\{TEXT_INPUT_REF}\\n            autoCapitalize=\\"none\\"\\n            value=\{this.state.url}\\n            onSubmitEditing=\{this.onSubmitEditing}\\n            onChange=\{this.handleTextInputChange}\\n            clearButtonMode=\\"while-editing\\"\\n            style=\{styles.addressBarTextInput}\\n          />\\n          <TouchableOpacity onPress=\{this.pressGoButton}>\\n            <View style=\{styles.goButton}>\\n              <Text>\\n                 Go!\\n              </Text>\\n            </View>\\n          </TouchableOpacity>\\n        </View>\\n        <WebView\\n          ref=\{WEBVIEW_REF}\\n          automaticallyAdjustContentInsets=\{false}\\n          style=\{styles.webView}\\n          url=\{this.state.url}\\n          javaScriptEnabledAndroid=\{true}\\n          onNavigationStateChange=\{this.onNavigationStateChange}\\n          startInLoadingState=\{true}\\n        />\\n        <View style=\{styles.statusBar}>\\n          <Text style=\{styles.statusBarText}>\{this.state.status}</Text>\\n        </View>\\n      </View>\\n    );\\n  },\\n\\n  goBack: function() \{\\n    this.refs[WEBVIEW_REF].goBack();\\n  },\\n\\n  goForward: function() \{\\n    this.refs[WEBVIEW_REF].goForward();\\n  },\\n\\n  reload: function() \{\\n    this.refs[WEBVIEW_REF].reload();\\n  },\\n\\n  onNavigationStateChange: function(navState) \{\\n    this.setState(\{\\n      backButtonEnabled: navState.canGoBack,\\n      forwardButtonEnabled: navState.canGoForward,\\n      url: navState.url,\\n      status: navState.title,\\n      loading: navState.loading,\\n    });\\n  },\\n\\n  onSubmitEditing: function(event) \{\\n    this.pressGoButton();\\n  },\\n\\n  pressGoButton: function() \{\\n    var url = this.inputText.toLowerCase();\\n    if (url === this.state.url) \{\\n      this.reload();\\n    } else \{\\n      this.setState(\{\\n        url: url,\\n      });\\n    }\\n    // dismiss keyoard\\n    this.refs[TEXT_INPUT_REF].blur();\\n  },\\n\\n});\\n\\nvar styles = StyleSheet.create(\{\\n  container: \{\\n    flex: 1,\\n    backgroundColor: HEADER,\\n  },\\n  addressBarRow: \{\\n    flexDirection: 'row',\\n    padding: 8,\\n  },\\n  webView: \{\\n    backgroundColor: BGWASH,\\n    height: 350,\\n  },\\n  addressBarTextInput: \{\\n    backgroundColor: BGWASH,\\n    borderColor: 'transparent',\\n    borderRadius: 3,\\n    borderWidth: 1,\\n    height: 24,\\n    paddingLeft: 10,\\n    paddingTop: 3,\\n    paddingBottom: 3,\\n    flex: 1,\\n    fontSize: 14,\\n  },\\n  navButton: \{\\n    width: 20,\\n    padding: 3,\\n    marginRight: 3,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n    backgroundColor: BGWASH,\\n    borderColor: 'transparent',\\n    borderRadius: 3,\\n  },\\n  disabledButton: \{\\n    width: 20,\\n    padding: 3,\\n    marginRight: 3,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n    backgroundColor: DISABLED_WASH,\\n    borderColor: 'transparent',\\n    borderRadius: 3,\\n  },\\n  goButton: \{\\n    height: 24,\\n    padding: 3,\\n    marginLeft: 8,\\n    alignItems: 'center',\\n    backgroundColor: BGWASH,\\n    borderColor: 'transparent',\\n    borderRadius: 3,\\n    alignSelf: 'stretch',\\n  },\\n  statusBar: \{\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    paddingLeft: 5,\\n    height: 22,\\n  },\\n  statusBarText: \{\\n    color: 'white',\\n    fontSize: 13,\\n  },\\n  spinner: \{\\n    width: 20,\\n    marginRight: 6,\\n  },\\n});\\n\\nexports.title = '<WebView>';\\nexports.description = 'Base component to display web content';\\nexports.examples = [\\n  \{\\n    title: 'WebView',\\n    render(): ReactElement \{ return <WebViewExample />; }\\n  }\\n];\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"webview","title":"WebView","layout":"autodocs","category":"components","permalink":"docs/webview.html","next":"alertios"}}, content);
  }
});
Post.content = content;
module.exports = Post;
