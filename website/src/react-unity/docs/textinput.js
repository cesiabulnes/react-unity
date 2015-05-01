/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "A foundational component for inputting text into the app via a\\nkeyboard.  Props provide configurability for several features, such as auto-\\ncorrection, auto-capitalization, placeholder text, and different keyboard\\ntypes, such as a numeric keypad.\\n\\nThe simplest use case is to plop down a \`TextInput\` and subscribe to the\\n\`onChangeText\` events to read the user input.  There are also other events, such\\nas \`onSubmitEditing\` and \`onFocus\` that can be subscribed to.  A simple\\nexample:\\n\\n\`\`\`\\n<View>\\n  <TextInput\\n    style=\{\{height: 40, borderColor: 'gray', borderWidth: 1}}\\n    onChangeText=\{(text) => this.setState(\{input: text})}\\n  />\\n  <Text>\{'user input: ' + this.state.input}</Text>\\n</View>\\n\`\`\`\\n\\nThe \`value\` prop can be used to set the value of the input in order to make\\nthe state of the component clear, but <TextInput> does not behave as a true\\ncontrolled component by default because all operations are asynchronous.\\nSetting \`value\` once is like setting the default value, but you can change it\\ncontinuously based on \`onChangeText\` events as well.  If you really want to\\nforce the component to always revert to the value you are setting, you can\\nset \`controlled=\{true}\`.\\n\\nThe \`multiline\` prop is not supported in all releases, and some props are\\nmultiline only.",
  "props": \{
    "autoCapitalize": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'none'",
            "computed": false
          },
          \{
            "value": "'sentences'",
            "computed": false
          },
          \{
            "value": "'words'",
            "computed": false
          },
          \{
            "value": "'characters'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Can tell TextInput to automatically capitalize certain characters.\\n\\n- characters: all characters,\\n- words: first letter of each word\\n- sentences: first letter of each sentence (default)\\n- none: don't auto capitalize anything"
    },
    "autoCorrect": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If false, disables auto-correct. Default value is true."
    },
    "autoFocus": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If true, focuses the input on componentDidMount. Default value is false."
    },
    "editable": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If false, text is not editable. Default value is true."
    },
    "keyboardType": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'default'",
            "computed": false
          },
          \{
            "value": "\\"ascii-capable\\"",
            "computed": false
          },
          \{
            "value": "'numbers-and-punctuation'",
            "computed": false
          },
          \{
            "value": "'url'",
            "computed": false
          },
          \{
            "value": "'number-pad'",
            "computed": false
          },
          \{
            "value": "'phone-pad'",
            "computed": false
          },
          \{
            "value": "'name-phone-pad'",
            "computed": false
          },
          \{
            "value": "'email-address'",
            "computed": false
          },
          \{
            "value": "'decimal-pad'",
            "computed": false
          },
          \{
            "value": "'twitter'",
            "computed": false
          },
          \{
            "value": "'web-search'",
            "computed": false
          },
          \{
            "value": "\\"numeric\\"",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Determines which keyboard to open, e.g.\`numeric\`."
    },
    "returnKeyType": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'default'",
            "computed": false
          },
          \{
            "value": "'go'",
            "computed": false
          },
          \{
            "value": "'google'",
            "computed": false
          },
          \{
            "value": "'join'",
            "computed": false
          },
          \{
            "value": "'next'",
            "computed": false
          },
          \{
            "value": "'route'",
            "computed": false
          },
          \{
            "value": "'search'",
            "computed": false
          },
          \{
            "value": "'send'",
            "computed": false
          },
          \{
            "value": "'yahoo'",
            "computed": false
          },
          \{
            "value": "'done'",
            "computed": false
          },
          \{
            "value": "'emergency-call'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Determines how the return key should look."
    },
    "enablesReturnKeyAutomatically": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If true, the keyboard disables the return key when there is no text and\\nautomatically enables it when there is text. Default value is false."
    },
    "multiline": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If true, the text input can be multiple lines. Default value is false."
    },
    "onBlur": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the text input is blurred"
    },
    "onFocus": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the text input is focused"
    },
    "onChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the text input's text changes."
    },
    "onChangeText": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onEndEditing": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when text input ends."
    },
    "onSubmitEditing": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called when the text input's submit button is pressed."
    },
    "password": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If true, the text input obscures the text entered so that sensitive text\\nlike passwords stay secure. Default value is false."
    },
    "placeholder": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "The string that will be rendered before text input has been entered"
    },
    "placeholderTextColor": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "The text color of the placeholder string"
    },
    "selectionState": \{
      "type": \{
        "name": "instanceOf",
        "value": "DocumentSelectionState"
      },
      "required": false,
      "description": "See DocumentSelectionState.js, some state that is responsible for\\nmaintaining selection information for a document"
    },
    "value": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "The default value for the text input"
    },
    "bufferDelay": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "This helps avoid drops characters due to race conditions between JS and\\nthe native text input.  The default should be fine, but if you're\\npotentially doing very slow operations on every keystroke then you may\\nwant to try increasing this.",
      "defaultValue": \{
        "value": "100",
        "computed": false
      }
    },
    "controlled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If you really want this to behave as a controlled component, you can set\\nthis true, but you will probably see flickering, dropped keystrokes,\\nand/or laggy typing, depending on how you process onChange events."
    },
    "clearButtonMode": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'never'",
            "computed": false
          },
          \{
            "value": "'while-editing'",
            "computed": false
          },
          \{
            "value": "'unless-editing'",
            "computed": false
          },
          \{
            "value": "'always'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "When the clear button should appear on the right side of the text view"
    },
    "clearTextOnFocus": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If true, clears the text field automatically when editing begins"
    },
    "selectTextOnFocus": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If true, selected the text automatically when editing begins"
    },
    "style": \{
      "type": \{
        "name": "custom",
        "raw": "Text.propTypes.style"
      },
      "required": false,
      "description": "Styles"
    },
    "testID": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Used to locate this view in end-to-end tests."
    }
  },
  "type": "component",
  "filepath": "Libraries/Components/TextInput/TextInput.js",
  "componentName": "TextInput",
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
    "path": "Examples/UIExplorer/TextInputExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  Text,\\n  TextInput,\\n  View,\\n  StyleSheet,\\n} = React;\\n\\nvar WithLabel = React.createClass(\{\\n  render: function() \{\\n    return (\\n      <View style=\{styles.labelContainer}>\\n        <View style=\{styles.label}>\\n          <Text>\{this.props.label}</Text>\\n        </View>\\n        \{this.props.children}\\n      </View>\\n    );\\n  }\\n});\\n\\nvar TextEventsExample = React.createClass(\{\\n  getInitialState: function() \{\\n    return \{\\n      curText: '<No Event>',\\n      prevText: '<No Event>',\\n    };\\n  },\\n\\n  updateText: function(text) \{\\n    this.setState(\{\\n      curText: text,\\n      prevText: this.state.curText,\\n    });\\n  },\\n\\n  render: function() \{\\n    return (\\n      <View>\\n        <TextInput\\n          autoCapitalize=\\"none\\"\\n          placeholder=\\"Enter text to see events\\"\\n          autoCorrect=\{false}\\n          onFocus=\{() => this.updateText('onFocus')}\\n          onBlur=\{() => this.updateText('onBlur')}\\n          onChange=\{(event) => this.updateText(\\n            'onChange text: ' + event.nativeEvent.text\\n          )}\\n          onEndEditing=\{(event) => this.updateText(\\n            'onEndEditing text: ' + event.nativeEvent.text\\n          )}\\n          onSubmitEditing=\{(event) => this.updateText(\\n            'onSubmitEditing text: ' + event.nativeEvent.text\\n          )}\\n          style=\{styles.default}\\n        />\\n        <Text style=\{styles.eventLabel}>\\n          \{this.state.curText}\{'\\\\n'}\\n          (prev: \{this.state.prevText})\\n        </Text>\\n      </View>\\n    );\\n  }\\n});\\n\\nvar styles = StyleSheet.create(\{\\n  page: \{\\n    paddingBottom: 300,\\n  },\\n  default: \{\\n    height: 26,\\n    borderWidth: 0.5,\\n    borderColor: '#0f0f0f',\\n    flex: 1,\\n    fontSize: 13,\\n    padding: 4,\\n  },\\n  multiline: \{\\n    borderWidth: 0.5,\\n    borderColor: '#0f0f0f',\\n    flex: 1,\\n    fontSize: 13,\\n    height: 50,\\n    padding: 4,\\n    marginBottom: 4,\\n  },\\n  multilineWithFontStyles: \{\\n    color: 'blue',\\n    fontWeight: 'bold',\\n    fontSize: 18,\\n    fontFamily: 'Cochin',\\n    height: 60,\\n  },\\n  multilineChild: \{\\n    width: 50,\\n    height: 40,\\n    position: 'absolute',\\n    right: 5,\\n    backgroundColor: 'red',\\n  },\\n  eventLabel: \{\\n    margin: 3,\\n    fontSize: 12,\\n  },\\n  labelContainer: \{\\n    flexDirection: 'row',\\n    marginVertical: 2,\\n    flex: 1,\\n  },\\n  label: \{\\n    width: 120,\\n    justifyContent: 'flex-end',\\n    flexDirection: 'row',\\n    marginRight: 10,\\n    paddingTop: 2,\\n  },\\n});\\n\\nexports.title = '<TextInput>';\\nexports.description = 'Single and multi-line text inputs.';\\nexports.examples = [\\n  \{\\n    title: 'Auto-focus',\\n    render: function() \{\\n      return <TextInput autoFocus=\{true} style=\{styles.default} />;\\n    }\\n  },\\n  \{\\n    title: 'Auto-capitalize',\\n    render: function() \{\\n      return (\\n        <View>\\n          <WithLabel label=\\"none\\">\\n            <TextInput\\n              autoCapitalize=\\"none\\"\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"sentences\\">\\n            <TextInput\\n              autoCapitalize=\\"sentences\\"\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"words\\">\\n            <TextInput\\n              autoCapitalize=\\"words\\"\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"characters\\">\\n            <TextInput\\n              autoCapitalize=\\"characters\\"\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Auto-correct',\\n    render: function() \{\\n      return (\\n        <View>\\n          <WithLabel label=\\"true\\">\\n            <TextInput autoCorrect=\{true} style=\{styles.default} />\\n          </WithLabel>\\n          <WithLabel label=\\"false\\">\\n            <TextInput autoCorrect=\{false} style=\{styles.default} />\\n          </WithLabel>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Keyboard types',\\n    render: function() \{\\n      var keyboardTypes = [\\n        'default',\\n        'ascii-capable',\\n        'numbers-and-punctuation',\\n        'url',\\n        'number-pad',\\n        'phone-pad',\\n        'name-phone-pad',\\n        'email-address',\\n        'decimal-pad',\\n        'twitter',\\n        'web-search',\\n        'numeric',\\n      ];\\n      var examples = keyboardTypes.map((type) => \{\\n        return (\\n          <WithLabel key=\{type} label=\{type}>\\n            <TextInput\\n              keyboardType=\{type}\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n        );\\n      });\\n      return <View>\{examples}</View>;\\n    }\\n  },\\n  \{\\n    title: 'Return key types',\\n    render: function() \{\\n      var returnKeyTypes = [\\n        'default',\\n        'go',\\n        'google',\\n        'join',\\n        'next',\\n        'route',\\n        'search',\\n        'send',\\n        'yahoo',\\n        'done',\\n        'emergency-call',\\n      ];\\n      var examples = returnKeyTypes.map((type) => \{\\n        return (\\n          <WithLabel key=\{type} label=\{type}>\\n            <TextInput\\n              returnKeyType=\{type}\\n              style=\{styles.default}\\n            />\\n          </WithLabel>\\n        );\\n      });\\n      return <View>\{examples}</View>;\\n    }\\n  },\\n  \{\\n    title: 'Enable return key automatically',\\n    render: function() \{\\n      return (\\n        <View>\\n          <WithLabel label=\\"true\\">\\n            <TextInput enablesReturnKeyAutomatically=\{true} style=\{styles.default} />\\n          </WithLabel>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Secure text entry',\\n    render: function() \{\\n      return (\\n        <View>\\n          <WithLabel label=\\"true\\">\\n            <TextInput password=\{true} style=\{styles.default} value=\\"abc\\" />\\n          </WithLabel>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Event handling',\\n    render: function(): ReactElement \{ return <TextEventsExample /> },\\n  },\\n  \{\\n    title: 'Colored input text',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput\\n            style=\{[styles.default, \{color: 'blue'}]}\\n            value=\\"Blue\\"\\n          />\\n          <TextInput\\n            style=\{[styles.default, \{color: 'green'}]}\\n            value=\\"Green\\"\\n          />\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Clear button mode',\\n    render: function () \{\\n      return (\\n        <View>\\n          <WithLabel label=\\"never\\">\\n            <TextInput\\n              style=\{styles.default}\\n              clearButtonMode=\\"never\\"\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"while editing\\">\\n            <TextInput\\n              style=\{styles.default}\\n              clearButtonMode=\\"while-editing\\"\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"unless editing\\">\\n            <TextInput\\n              style=\{styles.default}\\n              clearButtonMode=\\"unless-editing\\"\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"always\\">\\n            <TextInput\\n              style=\{styles.default}\\n              clearButtonMode=\\"always\\"\\n            />\\n          </WithLabel>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Clear and select',\\n    render: function() \{\\n      return (\\n        <View>\\n          <WithLabel label=\\"clearTextOnFocus\\">\\n            <TextInput\\n              placeholder=\\"text is cleared on focus\\"\\n              value=\\"text is cleared on focus\\"\\n              style=\{styles.default}\\n              clearTextOnFocus=\{true}\\n            />\\n          </WithLabel>\\n          <WithLabel label=\\"selectTextOnFocus\\">\\n            <TextInput\\n              placeholder=\\"text is selected on focus\\"\\n              value=\\"text is selected on focus\\"\\n              style=\{styles.default}\\n              selectTextOnFocus=\{true}\\n            />\\n          </WithLabel>\\n        </View>\\n      );\\n    }\\n  },\\n  \{\\n    title: 'Multiline',\\n    render: function() \{\\n      return (\\n        <View>\\n          <TextInput\\n            placeholder=\\"multiline text input\\"\\n            multiline=\{true}\\n            style=\{styles.multiline}\\n          />\\n          <TextInput\\n            placeholder=\\"mutliline text input with font styles and placeholder\\"\\n            multiline=\{true}\\n            clearTextOnFocus=\{true}\\n            autoCorrect=\{true}\\n            autoCapitalize=\\"words\\"\\n            placeholderTextColor=\\"red\\"\\n            keyboardType=\\"url\\"\\n            style=\{[styles.multiline, styles.multilineWithFontStyles]}\\n          />\\n          <TextInput\\n            placeholder=\\"uneditable mutliline text input\\"\\n            editable=\{false}\\n            multiline=\{true}\\n            style=\{styles.multiline}\\n          />\\n          <TextInput\\n            placeholder=\\"multiline with children\\"\\n            multiline=\{true}\\n            enablesReturnKeyAutomatically=\{true}\\n            returnKeyType=\\"go\\"\\n            style=\{styles.multiline}>\\n            <View style=\{styles.multilineChild}/>\\n          </TextInput>\\n        </View>\\n      )\\n    }\\n  }\\n];\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"textinput","title":"TextInput","layout":"autodocs","category":"components","permalink":"docs/textinput.html","next":"touchablehighlight"}}, content);
  }
});
Post.content = content;
module.exports = Post;
