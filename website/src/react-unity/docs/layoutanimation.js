/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 71,
      "source": "function configureNext(config: Config, onAnimationDidEnd?: Function, onError?: Function) \{\\n  configChecker(\{config}, 'config', 'LayoutAnimation.configureNext');\\n  RCTUIManager.configureNextLayoutAnimation(config, onAnimationDidEnd, onError);\\n}",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Config\\",\\"length\\":1}",
          "name": "config"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "onAnimationDidEnd?"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "onError?"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "configureNext"
    },
    \{
      "line": 76,
      "source": "function create(duration: number, type, creationProp): Config \{\\n  return \{\\n    duration,\\n    create: \{\\n      type,\\n      property: creationProp,\\n    },\\n    update: \{\\n      type,\\n    },\\n  };\\n}",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "duration"
        },
        \{
          "typehint": null,
          "name": "type"
        },
        \{
          "typehint": null,
          "name": "creationProp"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Config\\",\\"length\\":1}",
      "name": "create"
    }
  ],
  "properties": [
    [
      [
        "static"
      ],
      "",
      "Types",
      "keyMirror(TypesEnum)",
      "",
      92
    ],
    [
      [
        "static"
      ],
      "",
      "Properties",
      "keyMirror(PropertiesEnum)",
      "",
      93
    ],
    [
      [
        "static"
      ],
      "",
      "configChecker",
      "createStrictShapeTypeChecker(\{\\n  duration: PropTypes.number.isRequired,\\n  create: animChecker,\\n  update: animChecker,\\n  delete: animChecker,\\n})",
      "",
      94
    ],
    [
      [
        "static"
      ],
      "",
      "Presets",
      "\{\\n    easeInEaseOut: create(\\n      300, Types.easeInEaseOut, Properties.opacity\\n    ),\\n    linear: create(\\n      500, Types.linear, Properties.opacity\\n    ),\\n    spring: \{\\n      duration: 700,\\n      create: \{\\n        type: Types.linear,\\n        property: Properties.opacity,\\n      },\\n      update: \{\\n        type: Types.spring,\\n        springDamping: 0.4,\\n      },\\n    },\\n  }",
      "",
      95
    ]
  ],
  "superClass": null,
  "type": "api",
  "line": 89,
  "name": "LayoutAnimation",
  "docblock": "/**\\n * All rights reserved.\\n *\\n * This source code is licensed under the BSD-style license found in the\\n * LICENSE file in the root directory of this source tree. An additional grant\\n * of patent rights can be found in the PATENTS file in the same directory.\\n *\\n * @flow\\n */\\n",
  "requires": [
    \{
      "name": "ReactPropTypes"
    },
    \{
      "name": "NativeModules"
    },
    \{
      "name": "createStrictShapeTypeChecker"
    },
    \{
      "name": "keyMirror"
    }
  ],
  "filepath": "Libraries/Animation/LayoutAnimation.js",
  "componentName": "LayoutAnimation"
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"layoutanimation","title":"LayoutAnimation","layout":"autodocs","category":"apis","permalink":"docs/layoutanimation.html","next":"linkingios"}}, content);
  }
});
Post.content = content;
module.exports = Post;
