/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 58,
      "source": "static get(): number \{\\n    return Dimensions.get('window').scale;\\n  }",
      "docblock": "/**\\n   * Returns the device pixel density. Some examples:\\n   *\\n   *   - PixelRatio.get() === 2\\n   *     - iPhone 4, 4S\\n   *     - iPhone 5, 5c, 5s\\n   *     - iPhone 6\\n   *   - PixelRatio.get() === 3\\n   *     - iPhone 6 plus\\n   *   - PixelRatio.get() === 3.5\\n   *     - Nexus 6\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
      "name": "get"
    },
    \{
      "line": 67,
      "source": "static getPixelSizeForLayoutSize(layoutSize: number): number \{\\n    return Math.round(layoutSize * PixelRatio.get());\\n  }",
      "docblock": "/**\\n   * Converts a layout size (dp) to pixel size (px).\\n   *\\n   * Guaranteed to return an integer number.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "layoutSize"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
      "name": "getPixelSizeForLayoutSize"
    }
  ],
  "type": "api",
  "line": 45,
  "name": "PixelRatio",
  "docblock": "/**\\n * PixelRatio class gives access to the device pixel density.\\n *\\n * There are a few use cases for using PixelRatio:\\n *\\n * ### Displaying a line that's as thin as the device permits\\n *\\n * A width of 1 is actually pretty thick on an iPhone 4+, we can do one that's\\n * thinner using a width of \`1 / PixelRatio.get()\`. It's a technique that works\\n * on all the devices independent of their pixel density.\\n *\\n * \`\`\`\\n * style=\{\{ borderWidth: 1 / PixelRatio.get() }}\\n * \`\`\`\\n *\\n * ### Fetching a correctly sized image\\n *\\n * You should get a higher resolution image if you are on a high pixel density\\n * device. A good rule of thumb is to multiply the size of the image you display\\n * by the pixel ratio.\\n *\\n * \`\`\`\\n * var image = getImage(\{\\n *   width: PixelRatio.getPixelSizeForLayoutSize(200),\\n *   height: PixelRatio.getPixelSizeForLayoutSize(100),\\n * });\\n * <Image source=\{image} style=\{\{width: 200, height: 100}} />\\n * \`\`\`\\n */\\n",
  "requires": [
    \{
      "name": "Dimensions"
    }
  ],
  "fullDescription": "## Pixel Grid Snapping\\n\\nIn iOS, you can specify positions and dimensions for elements with arbitrary precision, for example 29.674825. But, ultimately the physical display only have a fixed number of pixels, for example 640×960 for iphone 4 or 750×1334 for iphone 6. iOS tries to be as faithful as possible to the user value by spreading one original pixel into multiple ones to trick the eye. The downside of this technique is that it makes the resulting element look blurry.\\n\\nIn practice, we found out that developers do not want this feature and they have to work around it by doing manual rounding in order to avoid having blurry elements. In React Native, we are rounding all the pixels automatically.\\n\\nWe have to be careful when to do this rounding. You never want to work with rounded and unrounded values at the same time as you're going to accumulate rounding errors. Having even one rounding error is deadly because a one pixel border may vanish or be twice as big.\\n\\nIn React Native, everything in JS and within the layout engine work with arbitrary precision numbers. It's only when we set the position and dimensions of the native element on the main thread that we round. Also, rounding is done relative to the root rather than the parent, again to avoid accumulating rounding errors.\\n",
  "filepath": "Libraries/Utilities/PixelRatio.js",
  "componentName": "PixelRatio"
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"pixelratio","title":"PixelRatio","layout":"autodocs","category":"apis","permalink":"docs/pixelratio.html","next":"pushnotificationios"}}, content);
  }
});
Post.content = content;
module.exports = Post;
