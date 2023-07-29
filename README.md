# Markdown-To-Code
Transform triple backtick to code.

## Insert in project

```javascript
import transformMarkdown from './transform.js';
//markdownToCode = require('markdownToCode');
```

## Basic Usage

```html
Create <pre> or <code> or <code><pre> around triple backtick: ```
```

```javascript
const Example_Text_Markdown = "Voici un exemple de code:\n```javascript\nconsole.log('Hello, World!');\n```";
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


[![Npm package version](https://badgen.net/npm/v/virtual-storage)](https://www.npmjs.com/package/virtual-storage)

[Test on Runkit](https://runkit.com/onigetoc/5e43f1d10888310014d63d5d)

[Runkit Demo](https://runkit.com/onigetoc/virtual-storage-by-gc)

[Js fiddle Example](https://jsfiddle.net/onigetoc/jzbuve15/)