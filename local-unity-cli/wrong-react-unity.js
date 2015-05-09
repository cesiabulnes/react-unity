#!/usr/bin/env node
console.error([
  '\033[31mLooks like you installed react-unity globally, maybe you meant react-unity-cli?',
  'To fix the issue, run:\033[0m',
  'npm uninstall -g react-unity',
  'npm install -g react-unity-cli'
].join('\n'));
