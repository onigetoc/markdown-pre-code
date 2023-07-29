# Markdown-To-Code
Transform triple backtick to code.

# virtual-storage
Virtual Storage (node) for those who do not have access to localStorage like Dialogflow to create project like Google home, Google hub or any projects. If your project do not have access to localStorage or for simple projects to store data, for a web app ect.
It's based on some simple javascript cookies or localStrorage libraries.

## Insert in project

```javascript
markdownToCode = require('markdownToCode');
```
OR
```javascript
import transformMarkdown from './transform.js';
```

## Basic Usage

Create <pre> or <code> or <code><pre> around triple backtick: ```

```javascript
const Example_Text_Markdown = "Voici un exemple de code:\n```javascript\nconsole.log('Hello, World!');\n```";

const resultatCode = markdownToCode(Example_Text_Markdown, 'code');
console.log("Option 'code':", resultatCode); // <code>javascript console.log('Hello, World!');</code>

const resultatPre = markdownToCode(Example_Text_Markdown, 'pre');
console.log("Option 'pre':", resultatPre); // <pre>javascript console.log('Hello, World!');</pre>

const resultatCodePre = markdownToCode(Example_Text_Markdown, 'code-pre');
console.log("Option 'code-pre':", resultatCodePre);  // <code><pre>javascript console.log('Hello, World!');</pre></code>
```


[![Npm package version](https://badgen.net/npm/v/virtual-storage)](https://www.npmjs.com/package/virtual-storage)

[Test on Runkit](https://runkit.com/onigetoc/5e43f1d10888310014d63d5d)

[Runkit Demo](https://runkit.com/onigetoc/virtual-storage-by-gc)

[Js fiddle Example](https://jsfiddle.net/onigetoc/jzbuve15/)
