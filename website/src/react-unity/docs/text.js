/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "A React component for displaying text which supports nesting,\\nstyling, and touch handling.  In the following example, the nested title and\\nbody text will inherit the \`fontFamily\` from \`styles.baseText\`, but the title\\nprovides its own additional styles.  The title and body will stack on top of\\neach other on account of the literal newlines:\\n\\n\`\`\`\\nrenderText: function() \{\\n  return (\\n    <Text style=\{styles.baseText}>\\n      <Text style=\{styles.titleText} onPress=\{this.onPressTitle}>\\n        \{this.state.titleText + '\\\\n\\\\n'}\\n      </Text>\\n      <Text numberOfLines=\{5}>\\n        \{this.state.bodyText}\\n      </Text>\\n    </Text>\\n  );\\n},\\n...\\nvar styles = StyleSheet.create(\{\\n  baseText: \{\\n    fontFamily: 'Cochin',\\n  },\\n  titleText: \{\\n    fontSize: 20,\\n    fontWeight: 'bold',\\n  },\\n};\\n\`\`\`",
  "props": \{
    "numberOfLines": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Used to truncate the text with an elipsis after computing the text\\nlayout, including line wrapping, such that the total number of lines does\\nnot exceed this number."
    },
    "onPress": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "This function is called on press.  Text intrinsically supports press\\nhandling with a default highlight state (which can be disabled with\\n\`suppressHighlighting\`)."
    },
    "suppressHighlighting": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When true, no visual change is made when text is pressed down.  By\\ndefault, a gray oval highlights the text on press down."
    },
    "style": \{
      "type": \{
        "name": "stylesheet",
        "value": "TextStylePropTypes"
      },
      "required": false,
      "description": ""
    },
    "testID": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Used to locate this view in end-to-end tests."
    }
  },
  "fullDescription": "\\n\\n## Nested Text\\n\\nIn iOS, the way to display formatted text is by using \`NSAttributedString\`: you give the text that you want to display and annotate ranges with some specific formatting. In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect.\\n\\n\`\`\`javascript\\n<Text style=\{\{fontWeight: 'bold'}}>\\n  I am bold\\n  <Text style=\{\{color: 'red'}}>\\n    and red\\n  </Text>\\n</Text>\\n\`\`\`\\n\\nBehind the scenes, this is going to be converted to a flat \`NSAttributedString\` that contains the following information\\n\\n\`\`\`javascript\\n\\"I am bold and red\\"\\n0-9: bold\\n9-17: bold, red\\n\`\`\`\\n\\n## Containers\\n\\nThe \`<Text>\` element is special relative to layout: everything inside is no longer using the flexbox layout but using text layout. This means that elements inside of a \`<Text>\` are no longer rectangles, but wrap when they see the end of the line. \\n\\n\`\`\`javascript\\n<Text>\\n  <Text>First part and </Text>\\n  <Text>second part</Text>\\n</Text>\\n// Text container: all the text flows as if it was one\\n// |First part |\\n// |and second |\\n// |part       |\\n\\n<View>\\n  <Text>First part and </Text>\\n  <Text>second part</Text>\\n</View>\\n// View container: each text is its own block\\n// |First part |\\n// |and        |\\n// |second part|\\n\`\`\`\\n\\n## Limited Style Inheritance\\n\\nOn the web, the usual way to set a font family and size for the entire document is to write:\\n\\n\`\`\`css\\n/* CSS, *not* React Native */\\nhtml \{\\n  font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;\\n  font-size: 11px;\\n  color: #141823;\\n}\\n\`\`\`\\n\\nWhen the browser is trying to render a text node, it's going to go all the way up to the root element of the tree and find an element with a \`font-size\` attribute. An unexpected property of this system is that **any** node can have \`font-size\` attribute, including a \`<div>\`. This was designed for convenience, even though not really semantically correct.\\n\\nIn React Native, we are more strict about it: **you must wrap all the text nodes inside of a \`<Text>\` component**; you cannot have a text node directly under a \`<View>\`.\\n\\n\`\`\`javascript\\n// BAD: will fatal, can't have a text node as child of a <View>\\n<View>\\n  Some text\\n</View>\\n\\n// GOOD\\n<View>\\n  <Text>\\n    Some text\\n  </Text>\\n</View>\\n\`\`\`\\n\\nYou also lose the ability to set up a default font for an entire subtree. The recommended way to use consistent fonts and sizes across your application is to create a component \`MyAppText\` that includes them and use this component across your app. You can also use this component to make more specific components like \`MyAppHeaderText\` for other kinds of text.\\n\\n\`\`\`javascript\\n<View>\\n  <MyAppText>Text styled with the default font for the entire application</MyAppText>\\n  <MyAppHeaderText>Text styled as a header</MyAppHeaderText>\\n</View>\\n\`\`\`\\n\\nReact Native still has the concept of style inheritance, but limited to text subtrees. In this case, the second part will be both bold and red.\\n\\n\`\`\`javascript\\n<Text style=\{\{fontWeight: 'bold'}}>\\n  I am bold\\n  <Text style=\{\{color: 'red'}}>\\n    and red\\n  </Text>\\n</Text>\\n\`\`\`\\n\\nWe believe that this more constrained way to style text will yield better apps:\\n\\n- (Developer) React components are designed with strong isolation in mind: You should be able to drop a component anywhere in your application, trusting that as long as the props are the same, it will look and behave the same way. Text properties that could inherit from outside of the props would break this isolation.\\n\\n- (Implementor) The implementation of React Native is also simplified. We do not need to have a \`fontFamily\` field on every single element, and we do not need to potentially traverse the tree up to the root every time we display a text node. The style inheritance is only encoded inside of the native Text component and doesn't leak to other components or the system itself.\\n",
  "type": "component",
  "filepath": "Libraries/Text/Text.js",
  "componentName": "Text",
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
    "path": "Examples/UIExplorer/TextExample.ios.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  StyleSheet,\\n  Text,\\n  View,\\n} = React;\\n\\nvar Entity = React.createClass(\{\\n  render: function() \{\\n    return (\\n      <Text style=\{styles.entity}>\\n        \{this.props.children}\\n      </Text>\\n    );\\n  }\\n});\\n\\nvar AttributeToggler = React.createClass(\{\\n  getInitialState: function() \{\\n    return \{fontWeight: '500', fontSize: 15};\\n  },\\n  increaseSize: function() \{\\n    this.setState(\{\\n      fontSize: this.state.fontSize + 1\\n    });\\n  },\\n  render: function() \{\\n    var curStyle = \{fontSize: this.state.fontSize};\\n    return (\\n      <Text>\\n        <Text style=\{curStyle}>\\n          Tap the controls below to change attributes.\\n        </Text>\\n        <Text>\\n          See how it will even work on\{' '}\\n          <Text style=\{curStyle}>\\n            this nested text\\n          </Text>\\n          <Text onPress=\{this.increaseSize}>\\n            \{'>> Increase Size <<'}\\n          </Text>\\n        </Text>\\n      </Text>\\n    );\\n  }\\n});\\n\\nexports.title = '<Text>';\\nexports.description = 'Base component for rendering styled text.';\\nexports.displayName = 'TextExample';\\nexports.examples = [\\n\{\\n  title: 'Wrap',\\n  render: function() \{\\n    return (\\n      <Text>\\n        The text should wrap if it goes on multiple lines. See, this is going to\\n        the next line.\\n      </Text>\\n    );\\n  },\\n}, \{\\n  title: 'Padding',\\n  render: function() \{\\n    return (\\n      <Text style=\{\{padding: 10}}>\\n        This text is indented by 10px padding on all sides.\\n      </Text>\\n    );\\n  },\\n}, \{\\n  title: 'Font Family',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{fontFamily: 'Cochin'}}>\\n          Cochin\\n        </Text>\\n        <Text style=\{\{fontFamily: 'Cochin', fontWeight: 'bold'}}>\\n          Cochin bold\\n        </Text>\\n        <Text style=\{\{fontFamily: 'Helvetica'}}>\\n          Helvetica\\n        </Text>\\n        <Text style=\{\{fontFamily: 'Helvetica', fontWeight: 'bold'}}>\\n          Helvetica bold\\n        </Text>\\n        <Text style=\{\{fontFamily: 'Verdana'}}>\\n          Verdana\\n        </Text>\\n        <Text style=\{\{fontFamily: 'Verdana', fontWeight: 'bold'}}>\\n          Verdana bold\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Font Size',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{fontSize: 23}}>\\n          Size 23\\n        </Text>\\n        <Text style=\{\{fontSize: 8}}>\\n          Size 8\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Color',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{color: 'red'}}>\\n          Red color\\n        </Text>\\n        <Text style=\{\{color: 'blue'}}>\\n          Blue color\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Font Weight',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{fontWeight: '100'}}>\\n          Move fast and be ultralight\\n        </Text>\\n        <Text style=\{\{fontWeight: '200'}}>\\n          Move fast and be light\\n        </Text>\\n        <Text style=\{\{fontWeight: 'normal'}}>\\n          Move fast and be normal\\n        </Text>\\n        <Text style=\{\{fontWeight: 'bold'}}>\\n          Move fast and be bold\\n        </Text>\\n        <Text style=\{\{fontWeight: '900'}}>\\n          Move fast and be ultrabold\\n        </Text>\\n      </View>\\n    );\\n  },\\n},  \{\\n  title: 'Font Style',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{fontStyle: 'normal'}}>\\n          Normal text\\n        </Text>\\n        <Text style=\{\{fontStyle: 'italic'}}>\\n          Italic text\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Nested',\\n  description: 'Nested text components will inherit the styles of their ' +\\n    'parents (only backgroundColor is inherited from non-Text parents).  ' +\\n    '<Text> only supports other <Text> and raw text (strings) as children.',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text>\\n          (Normal text,\\n          <Text style=\{\{fontWeight: 'bold'}}>\\n            (and bold\\n            <Text style=\{\{fontSize: 11, color: '#527fe4'}}>\\n              (and tiny inherited bold blue)\\n            </Text>\\n            )\\n          </Text>\\n          )\\n        </Text>\\n        <Text style=\{\{fontSize: 12}}>\\n          <Entity>Entity Name</Entity>\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Text Align',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text style=\{\{textAlign: 'left'}}>\\n          left left left left left left left left left left left left left left left\\n        </Text>\\n        <Text style=\{\{textAlign: 'center'}}>\\n          center center center center center center center center center center center\\n        </Text>\\n        <Text style=\{\{textAlign: 'right'}}>\\n          right right right right right right right right right right right right right\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'Spaces',\\n  render: function() \{\\n    return (\\n      <Text>\\n        A \{'generated'} \{' '} \{'string'} and    some &nbsp;&nbsp;&nbsp; spaces\\n      </Text>\\n    );\\n  },\\n}, \{\\n  title: 'Line Height',\\n  render: function() \{\\n    return (\\n      <Text>\\n        <Text style=\{\{lineHeight: 35}}>\\n          A lot of space between the lines of this long passage that should\\n          wrap once.\\n        </Text>\\n      </Text>\\n    );\\n  },\\n}, \{\\n  title: 'Empty Text',\\n  description: 'It\\\\'s ok to have Text with zero or null children.',\\n  render: function() \{\\n    return (\\n      <Text />\\n    );\\n  },\\n}, \{\\n  title: 'Toggling Attributes',\\n  render: function(): ReactElement \{\\n    return <AttributeToggler />;\\n  },\\n}, \{\\n  title: 'backgroundColor attribute',\\n  description: 'backgroundColor is inherited from all types of views.',\\n  render: function() \{\\n    return (\\n      <View style=\{\{backgroundColor: 'yellow'}}>\\n        <Text>\\n          Yellow background inherited from View parent,\\n          <Text style=\{\{backgroundColor: '#ffaaaa'}}>\\n            \{' '}red background,\\n            <Text style=\{\{backgroundColor: '#aaaaff'}}>\\n              \{' '}blue background,\\n              <Text>\\n                \{' '}inherited blue background,\\n                <Text style=\{\{backgroundColor: '#aaffaa'}}>\\n                  \{' '}nested green background.\\n                </Text>\\n              </Text>\\n            </Text>\\n          </Text>\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'containerBackgroundColor attribute',\\n  render: function() \{\\n    return (\\n      <View>\\n        <View style=\{\{flexDirection: 'row', height: 85}}>\\n          <View style=\{\{backgroundColor: '#ffaaaa', width: 150}} />\\n          <View style=\{\{backgroundColor: '#aaaaff', width: 150}} />\\n        </View>\\n        <Text style=\{[styles.backgroundColorText, \{top: -80}]}>\\n          Default containerBackgroundColor (inherited) + backgroundColor wash\\n        </Text>\\n        <Text style=\{[\\n          styles.backgroundColorText,\\n          \{top: -70, containerBackgroundColor: 'transparent'}]}>\\n          \{\\"containerBackgroundColor: 'transparent' + backgroundColor wash\\"}\\n        </Text>\\n      </View>\\n    );\\n  },\\n}, \{\\n  title: 'numberOfLines attribute',\\n  render: function() \{\\n    return (\\n      <View>\\n        <Text numberOfLines=\{1}>\\n          Maximum of one line no matter now much I write here. If I keep writing it\{\\"'\\"}ll just truncate after one line\\n        </Text>\\n        <Text numberOfLines=\{2} style=\{\{marginTop: 20}}>\\n          Maximum of two lines no matter now much I write here. If I keep writing it\{\\"'\\"}ll just truncate after two lines\\n        </Text>\\n        <Text style=\{\{marginTop: 20}}>\\n          No maximum lines specified no matter now much I write here. If I keep writing it\{\\"'\\"}ll just keep going and going\\n        </Text>\\n      </View>\\n    );\\n  },\\n}];\\n\\nvar styles = StyleSheet.create(\{\\n  backgroundColorText: \{\\n    left: 5,\\n    backgroundColor: 'rgba(100, 100, 100, 0.3)'\\n  },\\n  entity: \{\\n    fontWeight: '500',\\n    color: '#527fe4',\\n  },\\n});\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"text","title":"Text","layout":"autodocs","category":"components","permalink":"docs/text.html","next":"textinput"}}, content);
  }
});
Post.content = content;
module.exports = Post;
