import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm from "remark-gfm";

const Markdown = ({ markdownPath }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch(markdownPath)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  });

  const renderers = {
    code: ({ language, value }) => {
      return <SyntaxHighlighter language={language} children={value} style={vscDarkPlus} />;
    },
  };

  return (
    <>
      <div className="pt-3 pb-4 markdown-body">
        <ReactMarkdown
          renderers={renderers}
          plugins={[gfm, { tableCellPadding: 5 }]}
          children={markdown}
        ></ReactMarkdown>
      </div>
    </>
  );
};

export default Markdown;
