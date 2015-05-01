/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "Use \`DatePickerIOS\` to render a date/time picker (selector) on iOS.  This is\\na controlled component, so you must hook in to the \`onDateChange\` callback\\nand update the \`date\` prop in order for the component to update, otherwise\\nthe user's change will be reverted immediately to reflect \`props.date\` as the\\nsource of truth.",
  "props": \{
    "date": \{
      "type": \{
        "name": "instanceOf",
        "value": "Date"
      },
      "required": true,
      "description": "The currently selected date."
    },
    "onDateChange": \{
      "type": \{
        "name": "func"
      },
      "required": true,
      "description": "Date change handler.\\n\\nThis is called when the user changes the date or time in the UI.\\nThe first and only argument is a Date object representing the new\\ndate and time."
    },
    "maximumDate": \{
      "type": \{
        "name": "instanceOf",
        "value": "Date"
      },
      "required": false,
      "description": "Maximum date.\\n\\nRestricts the range of possible date/time values."
    },
    "minimumDate": \{
      "type": \{
        "name": "instanceOf",
        "value": "Date"
      },
      "required": false,
      "description": "Minimum date.\\n\\nRestricts the range of possible date/time values."
    },
    "mode": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'date'",
            "computed": false
          },
          \{
            "value": "'time'",
            "computed": false
          },
          \{
            "value": "'datetime'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "The date picker mode.",
      "defaultValue": \{
        "value": "'datetime'",
        "computed": false
      }
    },
    "minuteInterval": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "1",
            "computed": false
          },
          \{
            "value": "2",
            "computed": false
          },
          \{
            "value": "3",
            "computed": false
          },
          \{
            "value": "4",
            "computed": false
          },
          \{
            "value": "5",
            "computed": false
          },
          \{
            "value": "6",
            "computed": false
          },
          \{
            "value": "10",
            "computed": false
          },
          \{
            "value": "12",
            "computed": false
          },
          \{
            "value": "15",
            "computed": false
          },
          \{
            "value": "20",
            "computed": false
          },
          \{
            "value": "30",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "The interval at which minutes can be selected."
    },
    "timeZoneOffsetInMinutes": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Timezone offset in minutes.\\n\\nBy default, the date picker will use the device's timezone. With this\\nparameter, it is possible to force a certain timezone offset. For\\ninstance, to show times in Pacific Standard Time, pass -7 * 60."
    }
  },
  "type": "component",
  "filepath": "Libraries/Components/DatePicker/DatePickerIOS.ios.js",
  "componentName": "DatePickerIOS",
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
    "path": "Examples/UIExplorer/DatePickerIOSExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  DatePickerIOS,\\n  StyleSheet,\\n  Text,\\n  TextInput,\\n  View,\\n} = React;\\n\\nvar DatePickerExample = React.createClass(\{\\n  getDefaultProps: function () \{\\n    return \{\\n      date: new Date(),\\n      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,\\n    };\\n  },\\n\\n  getInitialState: function() \{\\n    return \{\\n      date: this.props.date,\\n      timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,\\n    };\\n  },\\n\\n  onDateChange: function(date) \{\\n    this.setState(\{date: date});\\n  },\\n\\n  onTimezoneChange: function(event) \{\\n    var offset = parseInt(event.nativeEvent.text, 10);\\n    if (isNaN(offset)) \{\\n      return;\\n    }\\n    this.setState(\{timeZoneOffsetInHours: offset});\\n  },\\n\\n  render: function() \{\\n    // Ideally, the timezone input would be a picker rather than a\\n    // text input, but we don't have any pickers yet :(\\n    return (\\n      <View>\\n        <WithLabel label=\\"Value:\\">\\n          <Text>\{\\n            this.state.date.toLocaleDateString() +\\n            ' ' +\\n            this.state.date.toLocaleTimeString()\\n          }</Text>\\n        </WithLabel>\\n        <WithLabel label=\\"Timezone:\\">\\n          <TextInput\\n            onChange=\{this.onTimezoneChange}\\n            style=\{styles.textinput}\\n            value=\{this.state.timeZoneOffsetInHours.toString()}\\n          />\\n          <Text> hours from UTC</Text>\\n        </WithLabel>\\n        <Heading label=\\"Date + time picker\\" />\\n        <DatePickerIOS\\n          date=\{this.state.date}\\n          mode=\\"datetime\\"\\n          timeZoneOffsetInMinutes=\{this.state.timeZoneOffsetInHours * 60}\\n          onDateChange=\{this.onDateChange}\\n        />\\n        <Heading label=\\"Date picker\\" />\\n        <DatePickerIOS\\n          date=\{this.state.date}\\n          mode=\\"date\\"\\n          timeZoneOffsetInMinutes=\{this.state.timeZoneOffsetInHours * 60}\\n          onDateChange=\{this.onDateChange}\\n        />\\n        <Heading label=\\"Time picker, 10-minute interval\\" />\\n        <DatePickerIOS\\n          date=\{this.state.date}\\n          mode=\\"time\\"\\n          timeZoneOffsetInMinutes=\{this.state.timeZoneOffsetInHours * 60}\\n          onDateChange=\{this.onDateChange}\\n          minuteInterval=\{10}\\n        />\\n      </View>\\n    );\\n  },\\n});\\n\\nvar WithLabel = React.createClass(\{\\n  render: function() \{\\n    return (\\n      <View style=\{styles.labelContainer}>\\n        <View style=\{styles.labelView}>\\n          <Text style=\{styles.label}>\\n            \{this.props.label}\\n          </Text>\\n        </View>\\n        \{this.props.children}\\n      </View>\\n    );\\n  }\\n});\\n\\nvar Heading = React.createClass(\{\\n  render: function() \{\\n    return (\\n      <View style=\{styles.headingContainer}>\\n        <Text style=\{styles.heading}>\\n          \{this.props.label}\\n        </Text>\\n      </View>\\n    );\\n  }\\n});\\n\\nexports.title = '<DatePickerIOS>';\\nexports.description = 'Select dates and times using the native UIDatePicker.';\\nexports.examples = [\\n\{\\n  title: '<DatePickerIOS>',\\n  render: function(): ReactElement \{\\n    return <DatePickerExample />;\\n  },\\n}];\\n\\nvar styles = StyleSheet.create(\{\\n  textinput: \{\\n    height: 26,\\n    width: 50,\\n    borderWidth: 0.5,\\n    borderColor: '#0f0f0f',\\n    padding: 4,\\n    fontSize: 13,\\n  },\\n  labelContainer: \{\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    marginVertical: 2,\\n  },\\n  labelView: \{\\n    marginRight: 10,\\n    paddingVertical: 2,\\n  },\\n  label: \{\\n    fontWeight: '500',\\n  },\\n  headingContainer: \{\\n    padding: 4,\\n    backgroundColor: '#f6f7f8',\\n  },\\n  heading: \{\\n    fontWeight: '500',\\n    fontSize: 14,\\n  },\\n});\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"datepickerios","title":"DatePickerIOS","layout":"autodocs","category":"components","permalink":"docs/datepickerios.html","next":"image"}}, content);
  }
});
Post.content = content;
module.exports = Post;
