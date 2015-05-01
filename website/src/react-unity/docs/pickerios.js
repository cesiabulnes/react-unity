/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "",
  "props": \{
    "onValueChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "selectedValue": \{
      "type": \{
        "name": "any"
      },
      "required": false,
      "description": ""
    }
  },
  "type": "component",
  "filepath": "Libraries/Picker/PickerIOS.ios.js",
  "componentName": "PickerIOS",
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
    "path": "Examples/UIExplorer/PickerIOSExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  PickerIOS,\\n  Text,\\n  View,\\n} = React;\\n\\nvar PickerItemIOS = PickerIOS.Item;\\n\\nvar CAR_MAKES_AND_MODELS = \{\\n  amc: \{\\n    name: 'AMC',\\n    models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],\\n  },\\n  alfa: \{\\n    name: 'Alfa-Romeo',\\n    models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],\\n  },\\n  aston: \{\\n    name: 'Aston Martin',\\n    models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],\\n  },\\n  audi: \{\\n    name: 'Audi',\\n    models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],\\n  },\\n  austin: \{\\n    name: 'Austin',\\n    models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],\\n  },\\n  borgward: \{\\n    name: 'Borgward',\\n    models: ['Hansa', 'Isabella', 'P100'],\\n  },\\n  buick: \{\\n    name: 'Buick',\\n    models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',\\n             'Roadmaster', 'Skylark'],\\n  },\\n  cadillac: \{\\n    name: 'Cadillac',\\n    models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],\\n  },\\n  chevrolet: \{\\n    name: 'Chevrolet',\\n    models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',\\n             'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],\\n  },\\n};\\n\\nvar PickerExample = React.createClass(\{\\n  getInitialState: function() \{\\n    return \{\\n      carMake: 'cadillac',\\n      modelIndex: 3,\\n    };\\n  },\\n\\n  render: function() \{\\n    var make = CAR_MAKES_AND_MODELS[this.state.carMake];\\n    var selectionString = make.name + ' ' + make.models[this.state.modelIndex];\\n    return (\\n      <View>\\n        <Text>Please choose a make for your car:</Text>\\n        <PickerIOS\\n          selectedValue=\{this.state.carMake}\\n          onValueChange=\{(carMake) => this.setState(\{carMake, modelIndex: 0})}>\\n          \{Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (\\n            <PickerItemIOS\\n              key=\{carMake}\\n              value=\{carMake}\\n              label=\{CAR_MAKES_AND_MODELS[carMake].name}\\n              />\\n            )\\n          )}\\n        </PickerIOS>\\n        <Text>Please choose a model of \{make.name}:</Text>\\n        <PickerIOS\\n          selectedValue=\{this.state.modelIndex}\\n          key=\{this.state.carMake}\\n          onValueChange=\{(modelIndex) => this.setState(\{modelIndex})}>\\n          \{CAR_MAKES_AND_MODELS[this.state.carMake].models.map(\\n            (modelName, modelIndex) => (\\n              <PickerItemIOS\\n                key=\{this.state.carmake + '_' + modelIndex}\\n                value=\{modelIndex}\\n                label=\{modelName}\\n              />\\n            ))\\n          }\\n        </PickerIOS>\\n        <Text>You selected: \{selectionString}</Text>\\n      </View>\\n    );\\n  },\\n});\\n\\nexports.title = '<PickerIOS>';\\nexports.description = 'Render lists of selectable options with UIPickerView.';\\nexports.examples = [\\n\{\\n  title: '<PickerIOS>',\\n  render: function(): ReactElement \{\\n    return <PickerExample />;\\n  },\\n}];\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"pickerios","title":"PickerIOS","layout":"autodocs","category":"components","permalink":"docs/pickerios.html","next":"scrollview"}}, content);
  }
});
Post.content = content;
module.exports = Post;
