/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "",
  "props": \{
    "badge": \{
      "type": \{
        "name": "union",
        "value": [
          \{
            "name": "string"
          },
          \{
            "name": "number"
          }
        ]
      },
      "required": false,
      "description": "Little red bubble that sits at the top right of the icon."
    },
    "systemIcon": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'bookmarks'",
            "computed": false
          },
          \{
            "value": "'contacts'",
            "computed": false
          },
          \{
            "value": "'downloads'",
            "computed": false
          },
          \{
            "value": "'favorites'",
            "computed": false
          },
          \{
            "value": "'featured'",
            "computed": false
          },
          \{
            "value": "'history'",
            "computed": false
          },
          \{
            "value": "'more'",
            "computed": false
          },
          \{
            "value": "'most-recent'",
            "computed": false
          },
          \{
            "value": "'most-viewed'",
            "computed": false
          },
          \{
            "value": "'recents'",
            "computed": false
          },
          \{
            "value": "'search'",
            "computed": false
          },
          \{
            "value": "'top-rated'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Items comes with a few predefined system icons. Note that if you are\\nusing them, the title and selectedIcon will be overriden with the\\nsystem ones."
    },
    "icon": \{
      "type": \{
        "name": "custom",
        "raw": "Image.propTypes.source"
      },
      "required": false,
      "description": "A custom icon for the tab. It is ignored when a system icon is defined."
    },
    "selectedIcon": \{
      "type": \{
        "name": "custom",
        "raw": "Image.propTypes.source"
      },
      "required": false,
      "description": "A custom icon when the tab is selected. It is ignored when a system\\nicon is defined. If left empty, the icon will be tinted in blue."
    },
    "onPress": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback when this tab is being selected, you should change the state of your\\ncomponent to set selected=\{true}."
    },
    "selected": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "It specifies whether the children are visible or not. If you see a\\nblank content, you probably forgot to add a selected one."
    },
    "style": \{
      "type": \{
        "name": "custom",
        "raw": "View.propTypes.style"
      },
      "required": false,
      "description": "React style object."
    },
    "title": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Text that appears under the icon. It is ignored when a system icon\\nis defined."
    }
  },
  "type": "component",
  "filepath": "Libraries/Components/TabBarIOS/TabBarItemIOS.ios.js",
  "componentName": "TabBarIOS.Item",
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
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"tabbarios-item","title":"TabBarIOS.Item","layout":"autodocs","category":"components","permalink":"docs/tabbarios-item.html","next":"text"}}, content);
  }
});
Post.content = content;
module.exports = Post;
