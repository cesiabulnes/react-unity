/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 62,
      "source": "static create(obj: \{[key: string]: any}): \{[key: string]: number} \{\\n    var result = \{};\\n    for (var key in obj) \{\\n      StyleSheetValidation.validateStyle(key, obj);\\n      result[key] = StyleSheetRegistry.registerStyle(obj[key]);\\n    }\\n    return result;\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{[key: string]: any}",
          "name": "obj"
        }
      ],
      "tparams": null,
      "returntypehint": "\{[key: string]: number}",
      "name": "create"
    }
  ],
  "type": "api",
  "line": 61,
  "name": "StyleSheet",
  "docblock": "/**\\n * A StyleSheet is an abstraction similar to CSS StyleSheets\\n *\\n * Create a new StyleSheet:\\n *\\n * \`\`\`\\n * var styles = StyleSheet.create(\{\\n *   container: \{\\n *     borderRadius: 4,\\n *     borderWidth: 0.5,\\n *     borderColor: '#d6d7da',\\n *   },\\n *   title: \{\\n *     fontSize: 19,\\n *     fontWeight: 'bold',\\n *   },\\n *   activeTitle: \{\\n *     color: 'red',\\n *   },\\n * });\\n * \`\`\`\\n *\\n * Use a StyleSheet:\\n *\\n * \`\`\`\\n * <View style=\{styles.container}>\\n *   <Text style=\{[styles.title, this.props.isActive && styles.activeTitle]} />\\n * </View>\\n * \`\`\`\\n *\\n * Code quality:\\n *\\n *  - By moving styles away from the render function, you're making the code\\n *  easier to understand.\\n *  - Naming the styles is a good way to add meaning to the low level components\\n *  in the render function.\\n *\\n * Performance:\\n *\\n *  - Making a stylesheet from a style object makes it possible to refer to it\\n * by ID instead of creating a new style object every time.\\n *  - It also allows to send the style only once through the bridge. All\\n * subsequent uses are going to refer an id (not implemented yet).\\n */\\n",
  "requires": [
    \{
      "name": "StyleSheetRegistry"
    },
    \{
      "name": "StyleSheetValidation"
    }
  ],
  "filepath": "Libraries/StyleSheet/StyleSheet.js",
  "componentName": "StyleSheet"
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"stylesheet","title":"StyleSheet","layout":"autodocs","category":"apis","permalink":"docs/stylesheet.html","next":"vibrationios"}}, content);
  }
});
Post.content = content;
module.exports = Post;
