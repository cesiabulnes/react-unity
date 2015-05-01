/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 74,
      "source": "runAfterInteractions(callback: Function) \{\\n    invariant(\\n      typeof callback === 'function',\\n      'Must specify a function to schedule.'\\n    );\\n    scheduleUpdate();\\n    _queue.push(callback);\\n  }",
      "docblock": "/**\\n   * Schedule a function to run after all interactions have completed.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "callback"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "runAfterInteractions"
    },
    \{
      "line": 86,
      "source": "createInteractionHandle(): number \{\\n    scheduleUpdate();\\n    var handle = ++_inc;\\n    _addInteractionSet.add(handle);\\n    return handle;\\n  }",
      "docblock": "/**\\n   * Notify manager that an interaction has started.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
      "name": "createInteractionHandle"
    },
    \{
      "line": 96,
      "source": "clearInteractionHandle(handle: number) \{\\n    invariant(\\n      !!handle,\\n      'Must provide a handle to clear.'\\n    );\\n    scheduleUpdate();\\n    _addInteractionSet.delete(handle);\\n    _deleteInteractionSet.add(handle);\\n  }",
      "docblock": "/**\\n   * Notify manager that an interaction has completed.\\n   */\\n",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"number\\",\\"length\\":1}",
          "name": "handle"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "clearInteractionHandle"
    }
  ],
  "properties": [
    [
      [
        "static"
      ],
      "",
      "Events",
      "keyMirror(\{\\n    interactionStart: true,\\n    interactionComplete: true,\\n  })",
      "",
      66
    ],
    [
      [
        "static"
      ],
      "",
      "addListener",
      "_emitter.addListener.bind(_emitter)",
      "",
      106
    ]
  ],
  "superClass": null,
  "type": "api",
  "line": 65,
  "name": "InteractionManager",
  "docblock": "/**\\n * InteractionManager allows long-running work to be scheduled after any\\n * interactions/animations have completed. In particular, this allows JavaScript\\n * animations to run smoothly.\\n *\\n * Applications can schedule tasks to run after interactions with the following:\\n *\\n * \`\`\`\\n * InteractionManager.runAfterInteractions(() => \{\\n *   // ...long-running synchronous task...\\n * });\\n * \`\`\`\\n *\\n * Compare this to other scheduling alternatives:\\n *\\n * - requestAnimationFrame(): for code that animates a view over time.\\n * - setImmediate/setTimeout(): run code later, note this may delay animations.\\n * - runAfterInteractions(): run code later, without delaying active animations.\\n *\\n * The touch handling system considers one or more active touches to be an\\n * 'interaction' and will delay \`runAfterInteractions()\` callbacks until all\\n * touches have ended or been cancelled.\\n *\\n * InteractionManager also allows applications to register animations by\\n * creating an interaction 'handle' on animation start, and clearing it upon\\n * completion:\\n *\\n * \`\`\`\\n * var handle = InteractionManager.createInteractionHandle();\\n * // run animation... (\`runAfterInteractions\` tasks are queued)\\n * // later, on animation completion:\\n * InteractionManager.clearInteractionHandle(handle);\\n * // queued tasks run if all handles were cleared\\n * \`\`\`\\n */\\n",
  "requires": [
    \{
      "name": "ErrorUtils"
    },
    \{
      "name": "EventEmitter"
    },
    \{
      "name": "Set"
    },
    \{
      "name": "invariant"
    },
    \{
      "name": "keyMirror"
    },
    \{
      "name": "setImmediate"
    }
  ],
  "filepath": "Libraries/Interaction/InteractionManager.js",
  "componentName": "InteractionManager"
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"interactionmanager","title":"InteractionManager","layout":"autodocs","category":"apis","permalink":"docs/interactionmanager.html","next":"layoutanimation"}}, content);
  }
});
Post.content = content;
module.exports = Post;
