/**
 * @generated
 * @jsx React.DOM
 */
var React = require("React");
var layout = require("AutodocsLayout");
var content = `\{
  "methods": [
    \{
      "line": 43,
      "source": "registerConfig: function(config: Array<AppConfig>) \{\\n    for (var i = 0; i < config.length; ++i) \{\\n      var appConfig = config[i];\\n      if (appConfig.run) \{\\n        AppRegistry.registerRunnable(appConfig.appKey, appConfig.run);\\n      } else \{\\n        AppRegistry.registerComponent(appConfig.appKey, appConfig.component);\\n      }\\n    }\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"generic\\",\\"value\\":[\{\\"type\\":\\"simple\\",\\"value\\":\\"Array\\",\\"length\\":1},\{\\"type\\":\\"simple\\",\\"value\\":\\"AppConfig\\",\\"length\\":1}],\\"length\\":4}",
          "name": "config"
        }
      ],
      "tparams": null,
      "returntypehint": null,
      "name": "registerConfig"
    },
    \{
      "line": 54,
      "source": "registerComponent: function(appKey: string, getComponentFunc: Function): string \{\\n    runnables[appKey] = \{\\n      run: (appParameters) =>\\n        renderApplication(getComponentFunc(), appParameters.initialProps, appParameters.rootTag)\\n    };\\n    return appKey;\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "appKey"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "getComponentFunc"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
      "name": "registerComponent"
    },
    \{
      "line": 62,
      "source": "registerRunnable: function(appKey: string, func: Function): string \{\\n    runnables[appKey] = \{run: func};\\n    return appKey;\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "appKey"
        },
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"Function\\",\\"length\\":1}",
          "name": "func"
        }
      ],
      "tparams": null,
      "returntypehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
      "name": "registerRunnable"
    },
    \{
      "line": 67,
      "source": "runApplication: function(appKey: string, appParameters: any): void \{\\n    console.log(\\n      'Running application \\"' + appKey + '\\" with appParams: ' +\\n      JSON.stringify(appParameters) + '. ' +\\n      '__DEV__ === ' + __DEV__ +\\n      ', development-level warning are ' + (__DEV__ ? 'ON' : 'OFF') +\\n      ', performance optimizations are ' + (__DEV__ ? 'OFF' : 'ON')\\n    );\\n    invariant(\\n      runnables[appKey] && runnables[appKey].run,\\n      'Application ' + appKey + ' has not been registered.'\\n    );\\n    runnables[appKey].run(appParameters);\\n  }",
      "modifiers": [
        "static"
      ],
      "params": [
        \{
          "typehint": "\{\\"type\\":\\"simple\\",\\"value\\":\\"string\\",\\"length\\":1}",
          "name": "appKey"
        },
        \{
          "typehint": "any",
          "name": "appParameters"
        }
      ],
      "tparams": null,
      "returntypehint": "void",
      "name": "runApplication"
    }
  ],
  "properties": [],
  "superClass": null,
  "type": "api",
  "line": 42,
  "name": "AppRegistry",
  "docblock": "/**\\n * \`AppRegistry\` is the JS entry point to running all React Native apps.  App\\n * root components should register themselves with\\n * \`AppRegistry.registerComponent\`, then the native system can load the bundle\\n * for the app and then actually run the app when it's ready by invoking\\n * \`AppRegistry.runApplication\`.\\n *\\n * \`AppRegistry\` should be \`require\`d early in the \`require\` sequence to make\\n * sure the JS execution environment is setup before other modules are\\n * \`require\`d.\\n */\\n",
  "requires": [
    \{
      "name": "invariant"
    },
    \{
      "name": "renderApplication"
    }
  ],
  "filepath": "Libraries/AppRegistry/AppRegistry.js",
  "componentName": "AppRegistry"
}`
var Post = React.createClass({
  render: function() {
    return layout({metadata: {"id":"appregistry","title":"AppRegistry","layout":"autodocs","category":"apis","permalink":"docs/appregistry.html","next":"appstateios"}}, content);
  }
});
Post.content = content;
module.exports = Post;
