/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "Component that wraps platform ScrollView while providing\\nintegration with touch locking \\"responder\\" system.\\n\\nDoesn't yet support other contained responders from blocking this scroll\\nview from becoming the responder.",
  "props": \{
    "automaticallyAdjustContentInsets": \{
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
    "contentOffset": \{
      "type": \{
        "name": "custom",
        "raw": "PointPropType"
      },
      "required": false,
      "description": ""
    },
    "onScroll": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onScrollAnimationEnd": \{
      "type": \{
        "name": "func"
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
    "scrollIndicatorInsets": \{
      "type": \{
        "name": "custom",
        "raw": "EdgeInsetsPropType"
      },
      "required": false,
      "description": ""
    },
    "showsHorizontalScrollIndicator": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "showsVerticalScrollIndicator": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "style": \{
      "type": \{
        "name": "stylesheet",
        "value": "ViewStylePropTypes"
      },
      "required": false,
      "description": ""
    },
    "scrollEventThrottle": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "bounces": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When true, the scroll view bounces when it reaches the end of the\\ncontent if the content is larger then the scroll view along the axis of\\nthe scroll direction. When false, it disables all bouncing even if\\nthe \`alwaysBounce*\` props are true. The default value is true."
    },
    "bouncesZoom": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When true, gestures can drive zoom past min/max and the zoom will animate\\nto the min/max value at gesture end, otherwise the zoom will not exceed\\nthe limits."
    },
    "alwaysBounceHorizontal": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When true, the scroll view bounces horizontally when it reaches the end\\neven if the content is smaller than the scroll view itself. The default\\nvalue is true when \`horizontal=\{true}\` and false otherwise."
    },
    "alwaysBounceVertical": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When true, the scroll view bounces vertically when it reaches the end\\neven if the content is smaller than the scroll view itself. The default\\nvalue is false when \`horizontal=\{true}\` and true otherwise."
    },
    "centerContent": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When true, the scroll view automatically centers the content when the\\ncontent is smaller than the scroll view bounds; when the content is\\nlarger than the scroll view, this property has no effect. The default\\nvalue is false."
    },
    "contentContainerStyle": \{
      "type": \{
        "name": "custom",
        "raw": "StyleSheetPropType(ViewStylePropTypes)"
      },
      "required": false,
      "description": "These styles will be applied to the scroll view content container which\\nwraps all of the child views. Example:\\n\\n  return (\\n    <ScrollView contentContainerStyle=\{styles.contentContainer}>\\n    </ScrollView>\\n  );\\n  ...\\n  var styles = StyleSheet.create(\{\\n    contentContainer: \{\\n      paddingVertical: 20\\n    }\\n  });"
    },
    "decelerationRate": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "A floating-point number that determines how quickly the scroll view\\ndecelerates after the user lifts their finger. Reasonable choices include\\n  - Normal: 0.998 (the default)\\n  - Fast: 0.9"
    },
    "horizontal": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When true, the scroll view's children are arranged horizontally in a row\\ninstead of vertically in a column. The default value is false."
    },
    "directionalLockEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When true, the ScrollView will try to lock to only vertical or horizontal\\nscrolling while dragging.  The default value is false."
    },
    "canCancelContentTouches": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When false, once tracking starts, won't try to drag if the touch moves.\\nThe default value is true."
    },
    "keyboardDismissMode": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "\\"none\\"",
            "computed": false
          },
          \{
            "value": "'interactive'",
            "computed": false
          },
          \{
            "value": "'onDrag'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Determines whether the keyboard gets dismissed in response to a drag.\\n  - 'none' (the default), drags do not dismiss the keyboard.\\n  - 'onDrag', the keyboard is dismissed when a drag begins.\\n  - 'interactive', the keyboard is dismissed interactively with the drag\\n    and moves in synchrony with the touch; dragging upwards cancels the\\n    dismissal."
    },
    "keyboardShouldPersistTaps": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When false, tapping outside of the focused text input when the keyboard\\nis up dismisses the keyboard. When true, the scroll view will not catch\\ntaps, and the keyboard will not dismiss automatically. The default value\\nis false."
    },
    "maximumZoomScale": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "The maximum allowed zoom scale. The default value is 1.0."
    },
    "minimumZoomScale": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "The minimum allowed zoom scale. The default value is 1.0."
    },
    "pagingEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When true, the scroll view stops on multiples of the scroll view's size\\nwhen scrolling. This can be used for horizontal pagination. The default\\nvalue is false."
    },
    "scrollsToTop": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When true, the scroll view scrolls to top when the status bar is tapped.\\nThe default value is true."
    },
    "stickyHeaderIndices": \{
      "type": \{
        "name": "arrayOf",
        "value": \{
          "name": "number"
        }
      },
      "required": false,
      "description": "An array of child indices determining which children get docked to the\\ntop of the screen when scrolling. For example, passing\\n\`stickyHeaderIndices=\{[0]}\` will cause the first child to be fixed to the\\ntop of the scroll view. This property is not supported in conjunction\\nwith \`horizontal=\{true}\`."
    },
    "removeClippedSubviews": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Experimental: When true, offscreen child views (whose \`overflow\` value is\\n\`hidden\`) are removed from their native backing superview when offscreen.\\nThis canimprove scrolling performance on long lists. The default value is\\nfalse."
    },
    "zoomScale": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "The current scale of the scroll view content. The default value is 1.0."
    }
  },
  "type": "component",
  "filepath": "Libraries/Components/ScrollView/ScrollView.js",
  "componentName": "ScrollView",
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
    "path": "Examples/UIExplorer/ScrollViewExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  ScrollView,\\n  StyleSheet,\\n  View,\\n  Image\\n} = React;\\n\\nexports.title = '<ScrollView>';\\nexports.description = 'Component that enables scrolling through child components';\\nexports.examples = [\\n\{\\n  title: '<ScrollView>',\\n  description: 'To make content scrollable, wrap it within a <ScrollView> component',\\n  render: function() \{\\n    return (\\n      <ScrollView\\n        onScroll=\{() => \{ console.log('onScroll!'); }}\\n        scrollEventThrottle=\{200}\\n        contentInset=\{\{top: -50}}\\n        style=\{styles.scrollView}>\\n        \{THUMBS.map(createThumbRow)}\\n      </ScrollView>\\n    );\\n  }\\n}, \{\\n  title: '<ScrollView> (horizontal = true)',\\n  description: 'You can display <ScrollView>\\\\'s child components horizontally rather than vertically',\\n  render: function() \{\\n    return (\\n      <ScrollView\\n        horizontal=\{true}\\n        contentInset=\{\{top: -50}}\\n        style=\{[styles.scrollView, styles.horizontalScrollView]}>\\n        \{THUMBS.map(createThumbRow)}\\n      </ScrollView>\\n    );\\n  }\\n}];\\n\\nvar Thumb = React.createClass(\{\\n  shouldComponentUpdate: function(nextProps, nextState) \{\\n    return false;\\n  },\\n  render: function() \{\\n    return (\\n      <View style=\{styles.button}>\\n        <Image style=\{styles.img} source=\{\{uri:this.props.uri}} />\\n      </View>\\n    );\\n  }\\n});\\n\\nvar THUMBS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];\\nTHUMBS = THUMBS.concat(THUMBS); // double length of THUMBS\\nvar createThumbRow = (uri, i) => <Thumb key=\{i} uri=\{uri} />;\\n\\nvar styles = StyleSheet.create(\{\\n  scrollView: \{\\n    backgroundColor: '#6A85B1',\\n    height: 300,\\n  },\\n  horizontalScrollView: \{\\n    height: 120,\\n  },\\n  containerPage: \{\\n    height: 50,\\n    width: 50,\\n    backgroundColor: '#527FE4',\\n    padding: 5,\\n  },\\n  text: \{\\n    fontSize: 20,\\n    color: '#888888',\\n    left: 80,\\n    top: 20,\\n    height: 40,\\n  },\\n  button: \{\\n    margin: 7,\\n    padding: 5,\\n    alignItems: 'center',\\n    backgroundColor: '#eaeaea',\\n    borderRadius: 3,\\n  },\\n  buttonContents: \{\\n    flexDirection: 'row',\\n    width: 64,\\n    height: 64,\\n  },\\n  img: \{\\n    width: 64,\\n    height: 64,\\n  }\\n});\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"scrollview","title":"ScrollView","layout":"autodocs","category":"components","permalink":"docs/scrollview.html","next":"sliderios"}}, content);
  }
});
Post.content = content;
module.exports = Post;
