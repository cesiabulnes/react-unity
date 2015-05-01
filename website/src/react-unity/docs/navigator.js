/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "Use \`Navigator\` to transition between different scenes in your app. To\\naccomplish this, provide route objects to the navigator to identify each\\nscene, and also a \`renderScene\` function that the navigator can use to\\nrender the scene for a given route.\\n\\nTo change the animation or gesture properties of the scene, provide a\\n\`configureScene\` prop to get the config object for a given route. See\\n\`Navigator.SceneConfigs\` for default animations and more info on\\nscene config options.\\n\\n### Basic Usage\\n\\n\`\`\`\\n  <Navigator\\n    initialRoute=\{\{name: 'My First Scene', index: 0}}\\n    renderScene=\{(route, navigator) =>\\n      <MySceneComponent\\n        name=\{route.name}\\n        onForward=\{() => \{\\n          var nextIndex = route.index + 1;\\n          navigator.push(\{\\n            name: 'Scene ' + nextIndex,\\n            index: nextIndex,\\n          });\\n        }}\\n        onBack=\{() => \{\\n          if (route.index > 0) \{\\n            navigator.pop();\\n          }\\n        }}\\n      />\\n    }\\n  />\\n\`\`\`\\n\\n### Navigator Methods\\n\\nIf you have a ref to the Navigator element, you can invoke several methods\\non it to trigger navigation:\\n\\n - \`getCurrentRoutes()\` - returns the current list of routes\\n - \`jumpBack()\` - Jump backward without unmounting the current scene\\n - \`jumpForward()\` - Jump forward to the next scene in the route stack\\n - \`jumpTo(route)\` - Transition to an existing scene without unmounting\\n - \`push(route)\` - Navigate forward to a new scene, squashing any scenes\\n    that you could \`jumpForward\` to\\n - \`pop()\` - Transition back and unmount the current scene\\n - \`replace(route)\` - Replace the current scene with a new route\\n - \`replaceAtIndex(route, index)\` - Replace a scene as specified by an index\\n - \`replacePrevious(route)\` - Replace the previous scene\\n - \`immediatelyResetRouteStack(routeStack)\` - Reset every scene with an\\n    array of routes\\n - \`popToRoute(route)\` - Pop to a particular scene, as specified by it's\\n    route. All scenes after it will be unmounted\\n - \`popToTop()\` - Pop to the first scene in the stack, unmounting every\\n    other scene\\n\\n### Navigation Context\\n\\nThe navigator context object is made available to scenes through the\\n\`renderScene\` function. Alternatively, any scene or component inside a\\nNavigator can get the navigation context by calling\\n\`Navigator.getContext(this)\`.\\n\\nUnlike the Navigator methods, the functions in navigation context do not\\ndirectly control a specific navigator. Instead, the navigator context allows\\na scene to request navigation from its parents. Navigation requests will\\ntravel up through the hierarchy of Navigators, and will be resolved by the\\ndeepest active navigator.\\n\\nNavigation context objects contain the following:\\n\\n - \`getCurrentRoutes()\` - returns the routes for the closest navigator\\n - \`jumpBack()\` - Jump backward without unmounting the current scene\\n - \`jumpForward()\` - Jump forward to the next scene in the route stack\\n - \`jumpTo(route)\` - Transition to an existing scene without unmounting\\n - \`parentNavigator\` - a refrence to the parent navigation context\\n - \`push(route)\` - Navigate forward to a new scene, squashing any scenes\\n    that you could \`jumpForward\` to\\n - \`pop()\` - Transition back and unmount the current scene\\n - \`replace(route)\` - Replace the current scene with a new route\\n - \`replaceAtIndex(route, index)\` - Replace a scene as specified by an index\\n - \`replacePrevious(route)\` - Replace the previous scene\\n - \`route\` - The route that was used to render the scene with this context\\n - \`immediatelyResetRouteStack(routeStack)\` - Reset every scene with an\\n    array of routes\\n - \`popToRoute(route)\` - Pop to a particular scene, as specified by it's\\n    route. All scenes after it will be unmounted\\n - \`popToTop()\` - Pop to the first scene in the stack, unmounting every\\n    other scene",
  "props": \{
    "configureScene": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Optional function that allows configuration about scene animations and\\ngestures. Will be invoked with the route and should return a scene\\nconfiguration object\\n\\n\`\`\`\\n(route) => Navigator.SceneConfigs.FloatFromRight\\n\`\`\`",
      "defaultValue": \{
        "value": "() => NavigatorSceneConfigs.PushFromRight",
        "computed": false
      }
    },
    "renderScene": \{
      "type": \{
        "name": "func"
      },
      "required": true,
      "description": "Required function which renders the scene for a given route. Will be\\ninvoked with the route and the navigator object\\n\\n\`\`\`\\n(route, navigator) =>\\n  <MySceneComponent title=\{route.title} />\\n\`\`\`"
    },
    "initialRoute": \{
      "type": \{
        "name": "object"
      },
      "required": false,
      "description": "Provide a single \\"route\\" to start on. A route is an arbitrary object\\nthat the navigator will use to identify each scene before rendering.\\nEither initialRoute or initialRouteStack is required."
    },
    "initialRouteStack": \{
      "type": \{
        "name": "arrayOf",
        "value": \{
          "name": "object"
        }
      },
      "required": false,
      "description": "Provide a set of routes to initially mount the scenes for. Required if no\\ninitialRoute is provided"
    },
    "onWillFocus": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Will emit the target route upon mounting and before each nav transition,\\noverriding the handler in this.props.navigator. This overrides the onDidFocus\\nhandler that would be found in this.props.navigator"
    },
    "onDidFocus": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Will be called with the new route of each scene after the transition is\\ncomplete or after the initial mounting. This overrides the onDidFocus\\nhandler that would be found in this.props.navigator"
    },
    "onItemRef": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Will be called with (ref, indexInStack) when the scene ref changes"
    },
    "navigationBar": \{
      "type": \{
        "name": "node"
      },
      "required": false,
      "description": "Optionally provide a navigation bar that persists across scene\\ntransitions"
    },
    "navigator": \{
      "type": \{
        "name": "object"
      },
      "required": false,
      "description": "Optionally provide the navigator object from a parent Navigator"
    },
    "sceneStyle": \{
      "type": \{
        "name": "custom",
        "raw": "View.propTypes.style"
      },
      "required": false,
      "description": "Styles to apply to the container of each scene",
      "defaultValue": \{
        "value": "styles.defaultSceneStyle",
        "computed": true
      }
    }
  },
  "type": "component",
  "filepath": "Libraries/CustomComponents/Navigator/Navigator.js",
  "componentName": "Navigator",
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
    return layout({metadata: {"id":"navigator","title":"Navigator","layout":"autodocs","category":"components","permalink":"docs/navigator.html","next":"navigatorios"}}, content);
  }
});
Post.content = content;
module.exports = Post;
