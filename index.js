function markdownToCode(text, format) {
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

// module.exports = transformMarkdown;
module.exports = markdownToCode ;
