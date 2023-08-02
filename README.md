# Markdown Pre Code
Transform triple backtick to code.

## Insert in project

```javascript
import markdownToCode from 'markdown-pre-code'; // should use "type": "module", in package.json
//const markdownToCode = require('markdown-pre-code');  // should remove "type": "module", in package.json or use "type": "commonjs",

const Example_Text_Markdown = "Here un example de code:\n```javascript\nconsole.log('Hello, World!');\n```";

const resultatCode = markdownToCode(Example_Text_Markdown, 'code');
console.
```

## Basic Usage

```html
Create <pre> or <code> or <code><pre> around triple backtick: ```
```

```javascript
const Example_Text_Markdown = "Here un example de code:\n```javascript\nconsole.log('Hello, World!');\n```";
```

```javascript
const resultatCode = markdownToCode(Example_Text_Markdown, 'code');
console.log("Option 'code':", resultatCode); // <code>javascript console.log('Hello, World!');</code>
```

```javascript
const resultatPre = markdownToCode(Example_Text_Markdown, 'pre');
console.log("Option 'pre':", resultatPre); // <pre>javascript console.log('Hello, World!');</pre>
```

```javascript
const resultatCodePre = markdownToCode(Example_Text_Markdown, 'code-pre');
console.log("Option 'code-pre':", resultatCodePre);  // <code><pre>javascript console.log('Hello, World!');</pre></code>
```


[![Npm package version](https://badgen.net/npm/v/https://www.npmjs.com/package/markdown-pre-code)](https://www.npmjs.com/package/markdown-pre-code)

[npmjs](https://www.npmjs.com/package/markdown-pre-code)

[Runkit Demo](https://runkit.com/onigetoc/64cacdd83b5ffc0008c90c27)

[Js fiddle Example](https://jsfiddle.net/onigetoc/jzbuve15/)
