/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "A React component for displaying different types of images,\\nincluding network images, static resources, temporary local images, and\\nimages from local disk, such as the camera roll.\\n\\nExample usage:\\n\\n\`\`\`\\nrenderImages: function() \{\\n  return (\\n    <View>\\n      <Image\\n        style=\{styles.icon}\\n        source=\{require\('image!myIcon')}\\n      />\\n      <Image\\n        style=\{styles.logo}\\n        source=\{\{uri: 'http://facebook.github.io/react/img/logo_og.png'}}\\n      />\\n    </View>\\n  );\\n},\\n\`\`\`",
  "props": \{
    "source": \{
      "type": \{
        "name": "shape",
        "value": \{
          "uri": \{
            "name": "string"
          }
        }
      },
      "required": false,
      "description": "\`uri\` is a string representing the resource identifier for the image, which\\ncould be an http address, a local file path, or the name of a static image\\nresource (which should be wrapped in the \`required('image!name')\` function)."
    },
    "defaultSource": \{
      "type": \{
        "name": "shape",
        "value": \{
          "uri": \{
            "name": "string"
          }
        }
      },
      "required": false,
      "description": "A static image to display while downloading the final image off the\\nnetwork."
    },
    "accessible": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "Whether this element should be revealed as an accessible element."
    },
    "accessibilityLabel": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "Custom string to display for accessibility."
    },
    "capInsets": \{
      "type": \{
        "name": "custom",
        "raw": "EdgeInsetsPropType"
      },
      "required": false,
      "description": "When the image is resized, the corners of the size specified\\nby capInsets will stay a fixed size, but the center content and borders\\nof the image will be stretched.  This is useful for creating resizable\\nrounded buttons, shadows, and other resizable assets.  More info on\\n[Apple documentation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class/index.html#//apple_ref/occ/instm/UIImage/resizableImageWithCapInsets)"
    },
    "resizeMode": \{
      "type": \{
        "name": "enum",
        "value": [
          \{
            "value": "'cover'",
            "computed": false
          },
          \{
            "value": "'contain'",
            "computed": false
          },
          \{
            "value": "'stretch'",
            "computed": false
          }
        ]
      },
      "required": false,
      "description": "Determines how to resize the image when the frame doesn't match the raw\\nimage dimensions."
    },
    "style": \{
      "type": \{
        "name": "stylesheet",
        "value": "ImageStylePropTypes"
      },
      "required": false,
      "description": ""
    },
    "testID": \{
      "type": \{
        "name": "string"
      },
      "required": false,
      "description": "A unique identifier for this element to be used in UI Automation\\ntesting scripts."
    }
  },
  "fullDescription": "Displaying images is a fascinating subject; React Native uses some cool tricks to make it a better experience.\\n\\n## No Automatic Sizing\\n\\nIf you don't give a size to an image, the browser is going to render a 0x0 element, download the image, and then render the image based with the correct size. The big issue with this behavior is that your UI is going to jump all around as images load, this makes for a very bad user experience.\\n\\nIn React Native, this behavior is intentionally not implemented. It is more work for the developer to know the dimensions (or just aspect ratio) of the image in advance, but we believe that it leads to a better user experience.\\n\\n## Background Image via Nesting\\n\\nA common feature request from developers familiar with the web is \`background-image\`. To handle this use case, simply create a normal \`<Image>\` component and add whatever children to it you would like to layer on top of it.\\n\\n\`\`\`javascript\\nreturn (\\n  <Image source=\{...}>\\n    <Text>Inside</Text>\\n  </Image>\\n);\\n\`\`\`\\n\\n## Off-thread Decoding\\n\\nImage decoding can take more than a frame-worth of time. This is one of the major source of frame drops on the web because decoding is done in the main thread. In React Native, image decoding is done in a different thread. In practice, you already need to handle the case when the image is not downloaded yet, so displaying the placeholder for a few more frames while it is decoding does not require any code change.\\n\\n## Static Assets\\n\\nIn the course of a project, it is not uncommon to add and remove many images and accidentally end up shipping images you are no longer using in the app. In order to fight this, we need to find a way to know statically which images are being used in the app. To do that, we introduced a marker on require. The only allowed way to refer to an image in the bundle is to literally write \`require\('image!name-of-the-asset')\` in the source.\\n\\n\`\`\`javascript\\n// GOOD\\n<Image source=\{require\('image!my-icon')} />\\n\\n// BAD\\nvar icon = this.props.active ? 'my-icon-active' : 'my-icon-inactive';\\n<Image source=\{require\('image!' + icon)} />\\n\\n// GOOD\\nvar icon = this.props.active ? require\('image!my-icon-active') : require\('image!my-icon-inactive');\\n<Image source=\{icon} />\\n\`\`\`\\n\\nWhen your entire codebase respects this convention, you're able to do interesting things like automatically packaging the assets that are being used in your app. Note that in the current form, nothing is enforced, but it will be in the future.\\n\\n## Best Camera Roll Image\\n\\niOS saves multiple sizes for the same image in your Camera Roll, it is very important to pick the one that's as close as possible for performance reasons. You wouldn't want to use the full quality 3264x2448 image as source when displaying a 200x200 thumbnail. If there's an exact match, React Native will pick it, otherwise it's going to use the first one that's at least 50% bigger in order to avoid blur when resizing from a close size. All of this is done by default so you don't have to worry about writing the tedious (and error prone) code to do it yourself.\\n\\n## Source being an object\\n\\nIn React Native, one interesting decision is that the \`src\` attribute is named \`source\` and doesn't take a string but an object with an \`uri\` attribute.\\n\\n\`\`\`javascript\\n<Image source=\{\{uri: 'something.jpg'}} />\\n\`\`\`\\n\\nOn the infrastructure side, the reason is that it allows to attach metadata to this object. For example if you are using \`require\('image!icon')\`, then we add an \`isStatic\` attribute to flag it as a local file (don't rely on this fact, it's likely to change in the future!). This is also future proofing, for example we may want to support sprites at some point, instead of outputting \`\{uri: ...}\`, we can output \`\{uri: ..., crop: \{left: 10, top: 50, width: 20, height: 40}}\` and transparently support spriting on all the existing call sites.\\n\\nOn the user side, this lets you annotate the object with useful attributes such as the dimension of the image in order to compute the size it's going to be displayed in. Feel free to use it as your data structure to store more information about your image.\\n",
  "type": "component",
  "filepath": "Libraries/Image/Image.ios.js",
  "componentName": "Image",
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
    "path": "Examples/UIExplorer/ImageExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar \{\\n  Image,\\n  StyleSheet,\\n  Text,\\n  View,\\n} = React;\\n\\nvar ImageCapInsetsExample = require\('./ImageCapInsetsExample');\\n\\nexports.framework = 'React';\\nexports.title = '<Image>';\\nexports.description = 'Base component for displaying different types of images.';\\n\\nexports.examples = [\\n  \{\\n    title: 'Plain Network Image',\\n    description: 'If the \`source\` prop \`uri\` property is prefixed with ' +\\n    '\\"http\\", then it will be downloaded from the network.',\\n    render: function() \{\\n      return (\\n        <Image\\n          source=\{\{uri: 'http://facebook.github.io/react/img/logo_og.png'}}\\n          style=\{styles.base}\\n        />\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Plain Static Image',\\n    description: 'Static assets should be required by prefixing with \`image!\` ' +\\n      'and are located in the app bundle.',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image source=\{require\('image!uie_thumb_normal')} style=\{styles.icon} />\\n          <Image source=\{require\('image!uie_thumb_selected')} style=\{styles.icon} />\\n          <Image source=\{require\('image!uie_comment_normal')} style=\{styles.icon} />\\n          <Image source=\{require\('image!uie_comment_highlighted')} style=\{styles.icon} />\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Border Color',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image\\n            source=\{smallImage}\\n            style=\{[\\n              styles.base,\\n              styles.background,\\n              \{borderWidth: 3, borderColor: '#f099f0'}\\n            ]}\\n          />\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Border Width',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image\\n            source=\{smallImage}\\n            style=\{[\\n              styles.base,\\n              styles.background,\\n              \{borderWidth: 5, borderColor: '#f099f0'}\\n            ]}\\n          />\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Border Radius',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image\\n            style=\{[styles.base, styles.background, \{borderRadius: 5}]}\\n            source=\{smallImage}\\n          />\\n          <Image\\n            style=\{[\\n              styles.base,\\n              styles.background,\\n              styles.leftMargin,\\n              \{borderRadius: 19}\\n            ]}\\n            source=\{smallImage}\\n          />\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Background Color',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image source=\{smallImage} style=\{styles.base} />\\n          <Image\\n            style=\{[\\n              styles.base,\\n              styles.leftMargin,\\n              \{backgroundColor: 'rgba(0, 0, 100, 0.25)'}\\n            ]}\\n            source=\{smallImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{backgroundColor: 'red'}]}\\n            source=\{smallImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{backgroundColor: 'black'}]}\\n            source=\{smallImage}\\n          />\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Opacity',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image\\n            style=\{[styles.base, \{opacity: 1}]}\\n            source=\{fullImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{opacity: 0.8}]}\\n            source=\{fullImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{opacity: 0.6}]}\\n            source=\{fullImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{opacity: 0.4}]}\\n            source=\{fullImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{opacity: 0.2}]}\\n            source=\{fullImage}\\n          />\\n          <Image\\n            style=\{[styles.base, styles.leftMargin, \{opacity: 0}]}\\n            source=\{fullImage}\\n          />\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Nesting',\\n    render: function() \{\\n      return (\\n        <Image\\n          style=\{\{width: 60, height: 60, backgroundColor: 'transparent'}}\\n          source=\{fullImage}>\\n          <Text style=\{styles.nestedText}>\\n            React\\n          </Text>\\n        </Image>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Tint Color',\\n    description: 'The \`tintColor\` style prop changes all the non-alpha ' +\\n      'pixels to the tint color.',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <Image\\n            source=\{require\('image!uie_thumb_normal')}\\n            style=\{[styles.icon, \{tintColor: 'blue' }]}\\n          />\\n          <Image\\n            source=\{require\('image!uie_thumb_normal')}\\n            style=\{[styles.icon, styles.leftMargin, \{tintColor: 'green' }]}\\n          />\\n          <Image\\n            source=\{require\('image!uie_thumb_normal')}\\n            style=\{[styles.icon, styles.leftMargin, \{tintColor: 'red' }]}\\n          />\\n          <Image\\n            source=\{require\('image!uie_thumb_normal')}\\n            style=\{[styles.icon, styles.leftMargin, \{tintColor: 'black' }]}\\n          />\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Resize Mode',\\n    description: 'The \`resizeMode\` style prop controls how the image is ' +\\n      'rendered within the frame.',\\n    render: function() \{\\n      return (\\n        <View style=\{styles.horizontal}>\\n          <View>\\n            <Text style=\{[styles.resizeModeText]}>\\n              Contain\\n            </Text>\\n            <Image\\n              style=\{styles.resizeMode}\\n              resizeMode=\{Image.resizeMode.contain}\\n              source=\{fullImage}\\n            />\\n          </View>\\n          <View style=\{styles.leftMargin}>\\n            <Text style=\{[styles.resizeModeText]}>\\n              Cover\\n            </Text>\\n            <Image\\n              style=\{styles.resizeMode}\\n              resizeMode=\{Image.resizeMode.cover}\\n              source=\{fullImage}\\n            />\\n          </View>\\n          <View style=\{styles.leftMargin}>\\n            <Text style=\{[styles.resizeModeText]}>\\n              Stretch\\n            </Text>\\n            <Image\\n              style=\{styles.resizeMode}\\n              resizeMode=\{Image.resizeMode.stretch}\\n              source=\{fullImage}\\n            />\\n          </View>\\n        </View>\\n      );\\n    },\\n  },\\n  \{\\n    title: 'Cap Insets',\\n    description:\\n      'When the image is resized, the corners of the size specified ' +\\n      'by capInsets will stay a fixed size, but the center content and ' +\\n      'borders of the image will be stretched. This is useful for creating ' +\\n      'resizable rounded buttons, shadows, and other resizable assets.',\\n    render: function() \{\\n      return <ImageCapInsetsExample />;\\n    },\\n  },\\n];\\n\\nvar fullImage = \{uri: 'http://facebook.github.io/react/img/logo_og.png'};\\nvar smallImage = \{uri: 'http://facebook.github.io/react/img/logo_small.png'};\\n\\nvar styles = StyleSheet.create(\{\\n  base: \{\\n    width: 38,\\n    height: 38,\\n  },\\n  leftMargin: \{\\n    marginLeft: 10,\\n  },\\n  background: \{\\n    backgroundColor: '#222222'\\n  },\\n  nestedText: \{\\n    marginLeft: 12,\\n    marginTop: 20,\\n    backgroundColor: 'transparent',\\n    color: 'white'\\n  },\\n  resizeMode: \{\\n    width: 90,\\n    height: 60,\\n    borderWidth: 0.5,\\n    borderColor: 'black'\\n  },\\n  resizeModeText: \{\\n    fontSize: 11,\\n    marginBottom: 3,\\n  },\\n  icon: \{\\n    width: 15,\\n    height: 15,\\n  },\\n  horizontal: \{\\n    flexDirection: 'row',\\n  }\\n});\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"image","title":"Image","layout":"autodocs","category":"components","permalink":"docs/image.html","next":"listview"}}, content);
  }
});
Post.content = content;
module.exports = Post;
