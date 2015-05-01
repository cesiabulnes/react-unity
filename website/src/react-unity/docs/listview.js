/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "ListView - A core component designed for efficient display of vertically\\nscrolling lists of changing data.  The minimal API is to create a\\n\`ListView.DataSource\`, populate it with a simple array of data blobs, and\\ninstantiate a \`ListView\` component with that data source and a \`renderRow\`\\ncallback which takes a blob from the data array and returns a renderable\\ncomponent.\\n\\nMinimal example:\\n\\n\`\`\`\\ngetInitialState: function() \{\\n  var ds = new ListView.DataSource(\{rowHasChanged: (r1, r2) => r1 !== r2});\\n  return \{\\n    dataSource: ds.cloneWithRows(['row 1', 'row 2']),\\n  };\\n},\\n\\nrender: function() \{\\n  return (\\n    <ListView\\n      dataSource=\{this.state.dataSource}\\n      renderRow=\{(rowData) => <Text>\{rowData}</Text>}\\n    />\\n  );\\n},\\n\`\`\`\\n\\nListView also supports more advanced features, including sections with sticky\\nsection headers, header and footer support, callbacks on reaching the end of\\nthe available data (\`onEndReached\`) and on the set of rows that are visible\\nin the device viewport change (\`onChangeVisibleRows\`), and several\\nperformance optimizations.\\n\\nThere are a few performance operations designed to make ListView scroll\\nsmoothly while dynamically loading potentially very large (or conceptually\\ninfinite) data sets:\\n\\n * Only re-render changed rows - the hasRowChanged function provided to the\\n   data source tells the ListView if it needs to re-render a row because the\\n   source data has changed - see ListViewDataSource for more details.\\n\\n * Rate-limited row rendering - By default, only one row is rendered per\\n   event-loop (customizable with the \`pageSize\` prop).  This breaks up the\\n   work into smaller chunks to reduce the chance of dropping frames while\\n   rendering rows.",
  "props": \{
    "dataSource": \{
      "type": \{
        "name": "instanceOf",
        "value": "ListViewDataSource"
      },
      "required": true,
      "description": ""
    },
    "renderRow": \{
      "type": \{
        "name": "func"
      },
      "required": true,
      "description": "(rowData, sectionID, rowID) => renderable\\nTakes a data entry from the data source and its ids and should return\\na renderable component to be rendered as the row.  By default the data\\nis exactly what was put into the data source, but it's also possible to\\nprovide custom extractors."
    },
    "initialListSize": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "How many rows to render on initial component mount.  Use this to make\\nit so that the first screen worth of data apears at one time instead of\\nover the course of multiple frames.",
      "defaultValue": \{
        "value": "10",
        "computed": false
      }
    },
    "onEndReached": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Called when all rows have been rendered and the list has been scrolled\\nto within onEndReachedThreshold of the bottom.  The native scroll\\nevent is provided."
    },
    "onEndReachedThreshold": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Threshold in pixels for onEndReached.",
      "defaultValue": \{
        "value": "1000",
        "computed": false
      }
    },
    "pageSize": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Number of rows to render per event loop.",
      "defaultValue": \{
        "value": "1",
        "computed": false
      }
    },
    "renderFooter": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "() => renderable\\n\\nThe header and footer are always rendered (if these props are provided)\\non every render pass.  If they are expensive to re-render, wrap them\\nin StaticContainer or other mechanism as appropriate.  Footer is always\\nat the bottom of the list, and header at the top, on every render pass."
    },
    "renderHeader": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "renderSectionHeader": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "(sectionData, sectionID) => renderable\\n\\nIf provided, a sticky header is rendered for this section.  The sticky\\nbehavior means that it will scroll with the content at the top of the\\nsection until it reaches the top of the screen, at which point it will\\nstick to the top until it is pushed off the screen by the next section\\nheader."
    },
    "scrollRenderAheadDistance": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "How early to start rendering rows before they come on screen, in\\npixels.",
      "defaultValue": \{
        "value": "1000",
        "computed": false
      }
    },
    "onChangeVisibleRows": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "(visibleRows, changedRows) => void\\n\\nCalled when the set of visible rows changes.  \`visibleRows\` maps\\n\{ sectionID: \{ rowID: true }} for all the visible rows, and\\n\`changedRows\` maps \{ sectionID: \{ rowID: true | false }} for the rows\\nthat have changed their visibility, with true indicating visible, and\\nfalse indicating the view has moved out of view."
    },
    "removeClippedSubviews": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "An experimental performance optimization for improving scroll perf of\\nlarge lists, used in conjunction with overflow: 'hidden' on the row\\ncontainers.  Use at your own risk."
    }
  },
  "composes": [
    "ScrollView"
  ],
  "type": "component",
  "filepath": "Libraries/CustomComponents/ListView/ListView.js",
  "componentName": "ListView",
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
    "path": "Examples/UIExplorer/ListViewExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  Image,\\n  ListView,\\n  TouchableHighlight,\\n  StyleSheet,\\n  Text,\\n  View,\\n} = React;\\n\\nvar UIExplorerPage = require\('./UIExplorerPage');\\n\\nvar ListViewSimpleExample = React.createClass(\{\\n  statics: \{\\n    title: '<ListView> - Simple',\\n    description: 'Performant, scrollable list of data.'\\n  },\\n\\n  getInitialState: function() \{\\n    var ds = new ListView.DataSource(\{rowHasChanged: (r1, r2) => r1 !== r2});\\n    return \{\\n      dataSource: ds.cloneWithRows(this._genRows(\{})),\\n    };\\n  },\\n\\n  _pressData: (\{}: \{[key: number]: boolean}),\\n\\n  componentWillMount: function() \{\\n    this._pressData = \{};\\n  },\\n\\n  render: function() \{\\n    return (\\n      <UIExplorerPage\\n        title=\{this.props.navigator ? null : '<ListView> - Simple'}\\n        noSpacer=\{true}\\n        noScroll=\{true}>\\n        <ListView\\n          dataSource=\{this.state.dataSource}\\n          renderRow=\{this._renderRow}\\n        />\\n      </UIExplorerPage>\\n    );\\n  },\\n\\n  _renderRow: function(rowData: string, sectionID: number, rowID: number) \{\\n    var rowHash = Math.abs(hashCode(rowData));\\n    var imgSource = \{\\n      uri: THUMB_URLS[rowHash % THUMB_URLS.length],\\n    };\\n    return (\\n      <TouchableHighlight onPress=\{() => this._pressRow(rowID)}>\\n        <View>\\n          <View style=\{styles.row}>\\n            <Image style=\{styles.thumb} source=\{imgSource} />\\n            <Text style=\{styles.text}>\\n              \{rowData + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}\\n            </Text>\\n          </View>\\n          <View style=\{styles.separator} />\\n        </View>\\n      </TouchableHighlight>\\n    );\\n  },\\n\\n  _genRows: function(pressData: \{[key: number]: boolean}): Array<string> \{\\n    var dataBlob = [];\\n    for (var ii = 0; ii < 100; ii++) \{\\n      var pressedText = pressData[ii] ? ' (pressed)' : '';\\n      dataBlob.push('Row ' + ii + pressedText);\\n    }\\n    return dataBlob;\\n  },\\n\\n  _pressRow: function(rowID: number) \{\\n    this._pressData[rowID] = !this._pressData[rowID];\\n    this.setState(\{dataSource: this.state.dataSource.cloneWithRows(\\n      this._genRows(this._pressData)\\n    )});\\n  },\\n});\\n\\nvar THUMB_URLS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];\\nvar LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';\\n\\n/* eslint no-bitwise: 0 */\\nvar hashCode = function(str) \{\\n  var hash = 15;\\n  for (var ii = str.length - 1; ii >= 0; ii--) \{\\n    hash = ((hash << 5) - hash) + str.charCodeAt(ii);\\n  }\\n  return hash;\\n};\\n\\nvar styles = StyleSheet.create(\{\\n  row: \{\\n    flexDirection: 'row',\\n    justifyContent: 'center',\\n    padding: 10,\\n    backgroundColor: '#F6F6F6',\\n  },\\n  separator: \{\\n    height: 1,\\n    backgroundColor: '#CCCCCC',\\n  },\\n  thumb: \{\\n    width: 64,\\n    height: 64,\\n  },\\n  text: \{\\n    flex: 1,\\n  },\\n});\\n\\nmodule.exports = ListViewSimpleExample;\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"listview","title":"ListView","layout":"autodocs","category":"components","permalink":"docs/listview.html","next":"mapview"}}, content);
  }
});
Post.content = content;
module.exports = Post;
