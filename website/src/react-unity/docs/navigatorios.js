/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "NavigatorIOS wraps UIKit navigation and allows you to add back-swipe\\nfunctionality across your app.\\n\\n#### Routes\\nA route is an object used to describe each page in the navigator. The first\\nroute is provided to NavigatorIOS as \`initialRoute\`:\\n\\n\`\`\`\\nrender: function() \{\\n  return (\\n    <NavigatorIOS\\n      initialRoute=\{\{\\n        component: MyView,\\n        title: 'My View Title',\\n        passProps: \{ myProp: 'foo' },\\n      }}\\n    />\\n  );\\n},\\n\`\`\`\\n\\nNow MyView will be rendered by the navigator. It will recieve the route\\nobject in the \`route\` prop, a navigator, and all of the props specified in\\n\`passProps\`.\\n\\nSee the initialRoute propType for a complete definition of a route.\\n\\n#### Navigator\\n\\nA \`navigator\` is an object of navigation functions that a view can call. It\\nis passed as a prop to any component rendered by NavigatorIOS.\\n\\n\`\`\`\\nvar MyView = React.createClass(\{\\n  _handleBackButtonPress: function() \{\\n    this.props.navigator.pop();\\n  },\\n  _handleNextButtonPress: function() \{\\n    this.props.navigator.push(nextRoute);\\n  },\\n  ...\\n});\\n\`\`\`\\n\\nA navigation object contains the following functions:\\n\\n - \`push(route)\` - Navigate forward to a new route\\n - \`pop()\` - Go back one page\\n - \`popN(n)\` - Go back N pages at once. When N=1, behavior matches \`pop()\`\\n - \`replace(route)\` - Replace the route for the current page and immediately\\n   load the view for the new route\\n - \`replacePrevious(route)\` - Replace the route/view for the previous page\\n - \`replacePreviousAndPop(route)\` - Replaces the previous route/view and\\n   transitions back to it\\n - \`resetTo(route)\` - Replaces the top item and popToTop\\n - \`popToRoute(route)\` - Go back to the item for a particular route object\\n - \`popToTop()\` - Go back to the top item\\n\\nNavigator functions are also available on the NavigatorIOS component:\\n\\n\`\`\`\\nvar MyView = React.createClass(\{\\n  _handleNavigationRequest: function() \{\\n    this.refs.nav.push(otherRoute);\\n  },\\n  render: () => (\\n    <NavigatorIOS\\n      ref=\\"nav\\"\\n      initialRoute=\{...}\\n    />\\n  ),\\n});\\n\`\`\`",
  "props": \{
    "initialRoute": \{
      "type": \{
        "name": "shape",
        "value": \{
          "component": \{
            "name": "func"
          },
          "title": \{
            "name": "string"
          },
          "passProps": \{
            "name": "object"
          },
          "backButtonTitle": \{
            "name": "string"
          },
          "rightButtonTitle": \{
            "name": "string"
          },
          "onRightButtonPress": \{
            "name": "func"
          },
          "wrapperStyle": \{
            "name": "custom",
            "raw": "View.propTypes.style"
          }
        }
      },
      "required": true,
      "description": "NavigatorIOS uses \\"route\\" objects to identify child views, their props,\\nand navigation bar configuration. \\"push\\" and all the other navigation\\noperations expect routes to be like this:"
    },
    "navigationBarHidden": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "A Boolean value that indicates whether the navigation bar is hidden"
    },
    "itemWrapperStyle": \{
      "type": \{
        "name": "custom",
        "raw": "View.propTypes.style"
      },
      "required": false,
      "description": "The default wrapper style for components in the navigator.\\nA common use case is to set the backgroundColor for every page"
    },
    "tintColor": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "The color used for buttons in the navigation bar"
    },
    "barTintColor": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "The background color of the navigation bar"
    },
    "titleTextColor": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "The text color of the navigation bar title"
    }
  },
  "type": "component",
  "filepath": "Libraries/Components/Navigation/NavigatorIOS.ios.js",
  "componentName": "NavigatorIOS",
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
    "path": "Examples/UIExplorer/NavigatorIOSExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar ViewExample = require\('./ViewExample');\\nvar createExamplePage = require\('./createExamplePage');\\nvar \{\\n  PixelRatio,\\n  ScrollView,\\n  StyleSheet,\\n  Text,\\n  TouchableHighlight,\\n  View,\\n} = React;\\n\\nvar EmptyPage = React.createClass(\{\\n\\n  render: function() \{\\n    return (\\n      <View style=\{styles.emptyPage}>\\n        <Text style=\{styles.emptyPageText}>\\n          \{this.props.text}\\n        </Text>\\n      </View>\\n    );\\n  },\\n\\n});\\n\\nvar NavigatorIOSExample = React.createClass(\{\\n\\n  statics: \{\\n    title: '<NavigatorIOS>',\\n    description: 'iOS navigation capabilities',\\n  },\\n\\n  render: function() \{\\n    var recurseTitle = 'Recurse Navigation';\\n    if (!this.props.topExampleRoute) \{\\n      recurseTitle += ' - more examples here';\\n    }\\n    return (\\n      <ScrollView style=\{styles.list}>\\n        <View style=\{styles.line}/>\\n        <View style=\{styles.group}>\\n          <View style=\{styles.row}>\\n            <Text style=\{styles.rowNote}>\\n              See &lt;UIExplorerApp&gt; for top-level usage.\\n            </Text>\\n          </View>\\n        </View>\\n        <View style=\{styles.line}/>\\n        <View style=\{styles.groupSpace}/>\\n        <View style=\{styles.line}/>\\n        <View style=\{styles.group}>\\n          \{this._renderRow(recurseTitle, () => \{\\n            this.props.navigator.push(\{\\n              title: NavigatorIOSExample.title,\\n              component: NavigatorIOSExample,\\n              backButtonTitle: 'Custom Back',\\n              passProps: \{topExampleRoute: this.props.topExampleRoute || this.props.route},\\n            });\\n          })}\\n          \{this._renderRow('Push View Example', () => \{\\n            this.props.navigator.push(\{\\n              title: 'Very Long Custom View Example Title',\\n              component: createExamplePage(null, ViewExample),\\n            });\\n          })}\\n          \{this._renderRow('Custom Right Button', () => \{\\n            this.props.navigator.push(\{\\n              title: NavigatorIOSExample.title,\\n              component: EmptyPage,\\n              rightButtonTitle: 'Cancel',\\n              onRightButtonPress: () => this.props.navigator.pop(),\\n              passProps: \{\\n                text: 'This page has a right button in the nav bar',\\n              }\\n            });\\n          })}\\n          \{this._renderRow('Pop', () => \{\\n            this.props.navigator.pop();\\n          })}\\n          \{this._renderRow('Pop to top', () => \{\\n            this.props.navigator.popToTop();\\n          })}\\n          \{this._renderRow('Replace here', () => \{\\n            var prevRoute = this.props.route;\\n            this.props.navigator.replace(\{\\n              title: 'New Navigation',\\n              component: EmptyPage,\\n              rightButtonTitle: 'Undo',\\n              onRightButtonPress: () => this.props.navigator.replace(prevRoute),\\n              passProps: \{\\n                text: 'The component is replaced, but there is currently no ' +\\n                  'way to change the right button or title of the current route',\\n              }\\n            });\\n          })}\\n          \{this._renderReplacePrevious()}\\n          \{this._renderReplacePreviousAndPop()}\\n          \{this._renderPopToTopNavExample()}\\n        </View>\\n        <View style=\{styles.line}/>\\n      </ScrollView>\\n    );\\n  },\\n\\n  _renderPopToTopNavExample: function() \{\\n    if (!this.props.topExampleRoute) \{\\n      return null;\\n    }\\n    return this._renderRow('Pop to top NavigatorIOSExample', () => \{\\n      this.props.navigator.popToRoute(this.props.topExampleRoute);\\n    });\\n  },\\n\\n  _renderReplacePrevious: function() \{\\n    if (!this.props.topExampleRoute) \{\\n      // this is to avoid replacing the UIExplorerList at the top of the stack\\n      return null;\\n    }\\n    return this._renderRow('Replace previous', () => \{\\n      this.props.navigator.replacePrevious(\{\\n        title: 'Replaced',\\n        component: EmptyPage,\\n        passProps: \{\\n          text: 'This is a replaced \\"previous\\" page',\\n        },\\n        wrapperStyle: styles.customWrapperStyle,\\n      });\\n    });\\n  },\\n\\n  _renderReplacePreviousAndPop: function() \{\\n    if (!this.props.topExampleRoute) \{\\n      // this is to avoid replacing the UIExplorerList at the top of the stack\\n      return null;\\n    }\\n    return this._renderRow('Replace previous and pop', () => \{\\n      this.props.navigator.replacePreviousAndPop(\{\\n        title: 'Replaced and Popped',\\n        component: EmptyPage,\\n        passProps: \{\\n          text: 'This is a replaced \\"previous\\" page',\\n        },\\n        wrapperStyle: styles.customWrapperStyle,\\n      });\\n    });\\n  },\\n\\n  _renderRow: function(title: string, onPress: Function) \{\\n    return (\\n      <View>\\n        <TouchableHighlight onPress=\{onPress}>\\n          <View style=\{styles.row}>\\n            <Text style=\{styles.rowText}>\\n              \{title}\\n            </Text>\\n          </View>\\n        </TouchableHighlight>\\n        <View style=\{styles.separator} />\\n      </View>\\n    );\\n  },\\n});\\n\\nvar styles = StyleSheet.create(\{\\n  customWrapperStyle: \{\\n    backgroundColor: '#bbdddd',\\n  },\\n  emptyPage: \{\\n    flex: 1,\\n    paddingTop: 64,\\n  },\\n  emptyPageText: \{\\n    margin: 10,\\n  },\\n  list: \{\\n    backgroundColor: '#eeeeee',\\n    marginTop: 10,\\n  },\\n  group: \{\\n    backgroundColor: 'white',\\n  },\\n  groupSpace: \{\\n    height: 15,\\n  },\\n  line: \{\\n    backgroundColor: '#bbbbbb',\\n    height: 1 / PixelRatio.get(),\\n  },\\n  row: \{\\n    backgroundColor: 'white',\\n    justifyContent: 'center',\\n    paddingHorizontal: 15,\\n    paddingVertical: 15,\\n  },\\n  separator: \{\\n    height: 1 / PixelRatio.get(),\\n    backgroundColor: '#bbbbbb',\\n    marginLeft: 15,\\n  },\\n  rowNote: \{\\n    fontSize: 17,\\n  },\\n  rowText: \{\\n    fontSize: 17,\\n    fontWeight: '500',\\n  },\\n});\\n\\nmodule.exports = NavigatorIOSExample;\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"navigatorios","title":"NavigatorIOS","layout":"autodocs","category":"components","permalink":"docs/navigatorios.html","next":"pickerios"}}, content);
  }
});
Post.content = content;
module.exports = Post;
