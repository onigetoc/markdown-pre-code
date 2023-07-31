/*! markdown-pre-code 1.0.5 | ISC */
// 'use strict';

/**
 * Markdown Pre Code
 * @param {string} name
 * @param {object} [{title:'Title 1', description:'Descriptions 1'}]
 * @return {string}
 */

// module.exports = markdownPreCode;

// console.log('IMPORT EXPORT OK');

// VERSION  V1

// function markdownPreCode(text, format) {
//   const regex = /```([\s\S]*?)```/g;
//   let transformedText = text.replace(regex, (match, codeBlock) => {
//     switch (format) {
//       case 'code':
//         return `<code>${codeBlock}</code>`;
//       case 'pre':
//         return `<pre>${codeBlock}</pre>`;
//       case 'code-pre':
//         return `<code><pre>${codeBlock}</pre></code>`;
//       default:
//         return match; // Si le format n'est pas valide, retourner le texte original
//     }
//   });
//   return transformedText;
// }

// VERSION  V2

const markdownPreCode = (text, format) => { 
  const regex = /```([\s\S]*?)```/g;
  let transformedText = text.replace(regex, (match, codeBlock) => {
    switch (format) {
      case 'code':
        return `<code>${codeBlock}</code>`;
      case 'pre':
        return `<pre>${codeBlock}</pre>`;
      case 'code-pre':
        return `<code><pre>${codeBlock}</pre></code>`;
      default:
        return match; // Si le format n'est pas valide, retourner le texte original
    }
  });
  return transformedText;
}



module.exports = markdownPreCode;
// export default markdownPreCode;

