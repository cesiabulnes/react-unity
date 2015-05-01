/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "description": "",
  "props": \{
    "style": \{
      "type": \{
        "name": "custom",
        "raw": "View.propTypes.style"
      },
      "required": false,
      "description": "Used to style and layout the \`MapView\`.  See \`StyleSheet.js\` and\\n\`ViewStylePropTypes.js\` for more info."
    },
    "showsUserLocation": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`true\` the app will ask for the user's location and focus on it.\\nDefault value is \`false\`.\\n\\n**NOTE**: You need to add NSLocationWhenInUseUsageDescription key in\\nInfo.plist to enable geolocation, otherwise it is going\\nto *fail silently*!"
    },
    "zoomEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`false\` the user won't be able to pinch/zoom the map.\\nDefault \`value\` is true."
    },
    "rotateEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When this property is set to \`true\` and a valid camera is associated with\\nthe map, the camera’s heading angle is used to rotate the plane of the\\nmap around its center point. When this property is set to \`false\`, the\\ncamera’s heading angle is ignored and the map is always oriented so\\nthat true north is situated at the top of the map view"
    },
    "pitchEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "When this property is set to \`true\` and a valid camera is associated\\nwith the map, the camera’s pitch angle is used to tilt the plane\\nof the map. When this property is set to \`false\`, the camera’s pitch\\nangle is ignored and the map is always displayed as if the user\\nis looking straight down onto it."
    },
    "scrollEnabled": \{
      "type": \{
        "name": "bool"
      },
      "required": false,
      "description": "If \`false\` the user won't be able to change the map region being displayed.\\nDefault value is \`true\`."
    },
    "region": \{
      "type": \{
        "name": "shape",
        "value": \{
          "latitude": \{
            "name": "number"
          },
          "longitude": \{
            "name": "number"
          },
          "latitudeDelta": \{
            "name": "number"
          },
          "longitudeDelta": \{
            "name": "number"
          }
        }
      },
      "required": false,
      "description": "The region to be displayed by the map.\\n\\nThe region is defined by the center coordinates and the span of\\ncoordinates to display."
    },
    "annotations": \{
      "type": \{
        "name": "arrayOf",
        "value": \{
          "name": "shape",
          "value": \{
            "latitude": \{
              "name": "number"
            },
            "longitude": \{
              "name": "number"
            },
            "title": \{
              "name": "string"
            },
            "subtitle": \{
              "name": "string"
            }
          }
        }
      },
      "required": false,
      "description": "Map annotations with title/subtitle."
    },
    "maxDelta": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Maximum size of area that can be displayed."
    },
    "minDelta": \{
      "type": \{
        "name": "number"
      },
      "required": false,
      "description": "Minimum size of area that can be displayed."
    },
    "legalLabelInsets": \{
      "type": \{
        "name": "custom",
        "raw": "EdgeInsetsPropType"
      },
      "required": false,
      "description": "Insets for the map's legal label, originally at bottom left of the map.\\nSee \`EdgeInsetsPropType.js\` for more information."
    },
    "onRegionChange": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called continuously when the user is dragging the map."
    },
    "onRegionChangeComplete": \{
      "type": \{
        "name": "func"
      },
      "required": false,
      "description": "Callback that is called once, when the user is done moving the map."
    }
  },
  "type": "component",
  "filepath": "Libraries/Components/MapView/MapView.js",
  "componentName": "MapView",
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
    "path": "Examples/UIExplorer/MapViewExample.js",
    "content": "/**\\n * The examples provided by Facebook are for non-commercial testing and\\n * evaluation purposes only.\\n *\\n * Facebook reserves all rights not expressly granted.\\n *\\n * THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\\n * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL\\n * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN\\n * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\n * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n *\\n * @flow\\n */\\n'use strict';\\n\\nvar React = require\('react-native');\\nvar StyleSheet = require\('StyleSheet');\\nvar \{\\n  MapView,\\n  Text,\\n  TextInput,\\n  View,\\n} = React;\\n\\nvar regionText = \{\\n  latitude: '0',\\n  longitude: '0',\\n  latitudeDelta: '0',\\n  longitudeDelta: '0',\\n}\\n\\nvar MapRegionInput = React.createClass(\{\\n\\n  propTypes: \{\\n    region: React.PropTypes.shape(\{\\n      latitude: React.PropTypes.number.isRequired,\\n      longitude: React.PropTypes.number.isRequired,\\n      latitudeDelta: React.PropTypes.number.isRequired,\\n      longitudeDelta: React.PropTypes.number.isRequired,\\n    }),\\n    onChange: React.PropTypes.func.isRequired,\\n  },\\n\\n  getInitialState: function() \{\\n    return \{\\n      region: \{\\n        latitude: 0,\\n        longitude: 0,\\n        latitudeDelta: 0,\\n        longitudeDelta: 0,\\n      }\\n    };\\n  },\\n\\n  componentWillReceiveProps: function(nextProps) \{\\n    this.setState(\{\\n      region: nextProps.region || this.getInitialState().region\\n    });\\n  },\\n\\n  render: function() \{\\n    var region = this.state.region || this.getInitialState().region;\\n    return (\\n      <View>\\n        <View style=\{styles.row}>\\n          <Text>\\n            \{'Latitude'}\\n          </Text>\\n          <TextInput\\n            value=\{'' + region.latitude}\\n            style=\{styles.textInput}\\n            onChange=\{this._onChangeLatitude}\\n            selectTextOnFocus=\{true}\\n          />\\n        </View>\\n        <View style=\{styles.row}>\\n          <Text>\\n            \{'Longitude'}\\n          </Text>\\n          <TextInput\\n            value=\{'' + region.longitude}\\n            style=\{styles.textInput}\\n            onChange=\{this._onChangeLongitude}\\n            selectTextOnFocus=\{true}\\n          />\\n        </View>\\n        <View style=\{styles.row}>\\n          <Text>\\n            \{'Latitude delta'}\\n          </Text>\\n          <TextInput\\n            value=\{'' + region.latitudeDelta}\\n            style=\{styles.textInput}\\n            onChange=\{this._onChangeLatitudeDelta}\\n            selectTextOnFocus=\{true}\\n          />\\n        </View>\\n        <View style=\{styles.row}>\\n          <Text>\\n            \{'Longitude delta'}\\n          </Text>\\n          <TextInput\\n            value=\{'' + region.longitudeDelta}\\n            style=\{styles.textInput}\\n            onChange=\{this._onChangeLongitudeDelta}\\n            selectTextOnFocus=\{true}\\n          />\\n        </View>\\n        <View style=\{styles.changeButton}>\\n          <Text onPress=\{this._change}>\\n            \{'Change'}\\n          </Text>\\n        </View>\\n      </View>\\n    );\\n  },\\n\\n  _onChangeLatitude: function(e) \{\\n    regionText.latitude = e.nativeEvent.text;\\n  },\\n\\n  _onChangeLongitude: function(e) \{\\n    regionText.longitude = e.nativeEvent.text;\\n  },\\n\\n  _onChangeLatitudeDelta: function(e) \{\\n    regionText.latitudeDelta = e.nativeEvent.text;\\n  },\\n\\n  _onChangeLongitudeDelta: function(e) \{\\n    regionText.longitudeDelta = e.nativeEvent.text;\\n  },\\n\\n  _change: function() \{\\n    this.setState(\{\\n      latitude: parseFloat(regionText.latitude),\\n      longitude: parseFloat(regionText.longitude),\\n      latitudeDelta: parseFloat(regionText.latitudeDelta),\\n      longitudeDelta: parseFloat(regionText.longitudeDelta),\\n    });\\n    this.props.onChange(this.state.region);\\n  },\\n\\n});\\n\\nvar MapViewExample = React.createClass(\{\\n\\n  getInitialState() \{\\n    return \{\\n      mapRegion: null,\\n      mapRegionInput: null,\\n      annotations: null,\\n      isFirstLoad: true,\\n    };\\n  },\\n\\n  render() \{\\n    return (\\n      <View>\\n        <MapView\\n          style=\{styles.map}\\n          onRegionChange=\{this._onRegionChange}\\n          onRegionChangeComplete=\{this._onRegionChangeComplete}\\n          region=\{this.state.mapRegion}\\n          annotations=\{this.state.annotations}\\n        />\\n        <MapRegionInput\\n          onChange=\{this._onRegionInputChanged}\\n          region=\{this.state.mapRegionInput}\\n        />\\n      </View>\\n    );\\n  },\\n\\n  _getAnnotations(region) \{\\n    return [\{\\n      longitude: region.longitude,\\n      latitude: region.latitude,\\n      title: 'You Are Here',\\n    }];\\n  },\\n\\n  _onRegionChange(region) \{\\n    this.setState(\{\\n      mapRegionInput: region,\\n    });\\n  },\\n\\n  _onRegionChangeComplete(region) \{\\n    if (this.state.isFirstLoad) \{\\n      this.setState(\{\\n        mapRegionInput: region,\\n        annotations: this._getAnnotations(region),\\n        isFirstLoad: false,\\n      });\\n    }\\n  },\\n\\n  _onRegionInputChanged(region) \{\\n    this.setState(\{\\n      mapRegion: region,\\n      mapRegionInput: region,\\n      annotations: this._getAnnotations(region),\\n    });\\n  },\\n\\n});\\n\\nvar styles = StyleSheet.create(\{\\n  map: \{\\n    height: 150,\\n    margin: 10,\\n    borderWidth: 1,\\n    borderColor: '#000000',\\n  },\\n  row: \{\\n    flexDirection: 'row',\\n    justifyContent: 'space-between',\\n  },\\n  textInput: \{\\n    width: 150,\\n    height: 20,\\n    borderWidth: 0.5,\\n    borderColor: '#aaaaaa',\\n    fontSize: 13,\\n    padding: 4,\\n  },\\n  changeButton: \{\\n    alignSelf: 'center',\\n    marginTop: 5,\\n    padding: 3,\\n    borderWidth: 0.5,\\n    borderColor: '#777777',\\n  },\\n});\\n\\nexports.title = '<MapView>';\\nexports.description = 'Base component to display maps';\\nexports.examples = [\\n  \{\\n    title: 'Map',\\n    render(): ReactElement \{ return <MapViewExample />; }\\n  },\\n  \{\\n    title: 'Map shows user location',\\n    render() \{\\n      return  <MapView style=\{styles.map} showsUserLocation=\{true} />;\\n    }\\n  }\\n];\\n"
  }
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"mapview","title":"MapView","layout":"autodocs","category":"components","permalink":"docs/mapview.html","next":"navigator"}}, content);
  }
});
Post.content = content;
module.exports = Post;
