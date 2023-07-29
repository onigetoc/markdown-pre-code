const markdownToCode = require('./transform.js')
// import transformMarkdown from './transform.js';

const Example_Text_Markdown = "Voici un exemple de code:\n```javascript\nconsole.log('Hello, World!');\n```";

const resultatCode = markdownToCode(Example_Text_Markdown, 'code');
console.log("Option 'code':", resultatCode);

const resultatPre = markdownToCode(Example_Text_Markdown, 'pre');
console.log("Option 'pre':", resultatPre);

const resultatCodePre = markdownToCode(Example_Text_Markdown, 'code-pre');
console.log("Option 'code-pre':", resultatCodePre);
