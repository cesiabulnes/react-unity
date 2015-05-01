/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "Use \`SwitchIOS\` to render a boolean input on iOS.  This is\\na controlled component, so you must hook in to the \`onValueChange\` callback\\nand update the \`value\` prop in order for the component to update, otherwise\\nthe user's change will be reverted immediately to reflect \`props.value\` as the\\nsource of truth.",
  "props": \{
    "value": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "The value of the switch, if true the switch will be turned on.\\nDefault value is false.",
      "defaultValue": \{
        "value": "false",
        "computed": false
      }
    },
    "disabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If true the user won't be able to toggle the switch.\\nDefault value is false.",
      "defaultValue": \{
        "value": "false",
        "computed": false
      }
    },
    "onValueChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the user toggles the switch."
    },
    "onTintColor": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Background color when the switch is turned on."
    },
    "thumbTintColor": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Background color for the switch round button."
    },
    "tintColor": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Background color when the switch is turned off."
    }
  },
  "type": "component",
  "filepath": "Libraries/Components/SwitchIOS/SwitchIOS.ios.js",
  "componentName": "SwitchIOS",
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
    "path": "Examples/UIExplorer/SwitchIOSExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  SwitchIOS,\\n  Text,\\n  View\\n} = React;\\n\\nvar BasicSwitchExample = React.createClass(\{\\n  getInitialState() \{\\n    return \{\\n      trueSwitchIsOn: true,\\n      falseSwitchIsOn: false,\\n    };\\n  },\\n  render() \{\\n    return (\\n      <View>\\n        <SwitchIOS\\n          onValueChange=\{(value) => this.setState(\{falseSwitchIsOn: value})}\\n          style=\{\{marginBottom: 10}}\\n          value=\{this.state.falseSwitchIsOn} />\\n        <SwitchIOS\\n          onValueChange=\{(value) => this.setState(\{trueSwitchIsOn: value})}\\n          value=\{this.state.trueSwitchIsOn} />\\n      </View>\\n    );\\n  }\\n});\\n\\nvar DisabledSwitchExample = React.createClass(\{\\n  render() \{\\n    return (\\n      <View>\\n        <SwitchIOS\\n          disabled=\{true}\\n          style=\{\{marginBottom: 10}}\\n          value=\{true} />\\n        <SwitchIOS\\n          disabled=\{true}\\n          value=\{false} />\\n      </View>\\n    );\\n  },\\n});\\n\\nvar ColorSwitchExample = React.createClass(\{\\n  getInitialState() \{\\n    return \{\\n      colorTrueSwitchIsOn: true,\\n      colorFalseSwitchIsOn: false,\\n    };\\n  },\\n  render() \{\\n    return (\\n      <View>\\n        <SwitchIOS\\n          onValueChange=\{(value) => this.setState(\{colorFalseSwitchIsOn: value})}\\n          onTintColor=\\"#00ff00\\"\\n          style=\{\{marginBottom: 10}}\\n          thumbTintColor=\\"#0000ff\\"\\n          tintColor=\\"#ff0000\\"\\n          value=\{this.state.colorFalseSwitchIsOn} />\\n        <SwitchIOS\\n          onValueChange=\{(value) => this.setState(\{colorTrueSwitchIsOn: value})}\\n          onTintColor=\\"#00ff00\\"\\n          thumbTintColor=\\"#0000ff\\"\\n          tintColor=\\"#ff0000\\"\\n          value=\{this.state.colorTrueSwitchIsOn} />\\n      </View>\\n    );\\n  },\\n});\\n\\nvar EventSwitchExample = React.createClass(\{\\n  getInitialState() \{\\n    return \{\\n      eventSwitchIsOn: false,\\n      eventSwitchRegressionIsOn: true,\\n    };\\n  },\\n  render() \{\\n    return (\\n      <View style=\{\{ flexDirection: 'row', justifyContent: 'space-around' }}>\\n        <View>\\n          <SwitchIOS\\n            onValueChange=\{(value) => this.setState(\{eventSwitchIsOn: value})}\\n            style=\{\{marginBottom: 10}}\\n            value=\{this.state.eventSwitchIsOn} />\\n          <SwitchIOS\\n            onValueChange=\{(value) => this.setState(\{eventSwitchIsOn: value})}\\n            style=\{\{marginBottom: 10}}\\n            value=\{this.state.eventSwitchIsOn} />\\n            <Text>\{this.state.eventSwitchIsOn ? \\"On\\" : \\"Off\\"}</Text>\\n        </View>\\n        <View>\\n          <SwitchIOS\\n            onValueChange=\{(value) => this.setState(\{eventSwitchRegressionIsOn: value})}\\n            style=\{\{marginBottom: 10}}\\n            value=\{this.state.eventSwitchRegressionIsOn} />\\n          <SwitchIOS\\n            onValueChange=\{(value) => this.setState(\{eventSwitchRegressionIsOn: value})}\\n            style=\{\{marginBottom: 10}}\\n            value=\{this.state.eventSwitchRegressionIsOn} />\\n          <Text>\{this.state.eventSwitchRegressionIsOn ? \\"On\\" : \\"Off\\"}</Text>\\n        </View>\\n      </View>\\n    );\\n  }\\n});\\n\\nexports.title = '<SwitchIOS>';\\nexports.displayName = 'SwitchExample';\\nexports.description = 'Native boolean input';\\nexports.examples = [\\n  \{\\n    title: 'Switches can be set to true or false',\\n    render(): ReactElement \{ return <BasicSwitchExample />; }\\n  },\\n  \{\\n    title: 'Switches can be disabled',\\n    render(): ReactElement \{ return <DisabledSwitchExample />; }\\n  },\\n  \{\\n    title: 'Custom colors can be provided',\\n    render(): ReactElement \{ return <ColorSwitchExample />; }\\n  },\\n  \{\\n    title: 'Change events can be detected',\\n    render(): ReactElement \{ return <EventSwitchExample />; }\\n  },\\n  \{\\n    title: 'Switches are controlled components',\\n    render(): ReactElement \{ return <SwitchIOS />; }\\n  }\\n];\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"switchios","title":"SwitchIOS","layout":"autodocs","category":"components","permalink":"docs/switchios.html","next":"tabbarios"}}, content);
  }
});
Post.content = content;
module.exports = Post;
