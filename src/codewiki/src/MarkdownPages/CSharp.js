import React from "react";
import Markdown from "./Markdown.js";
import markdownPath from "../Markdown/CSharp/CSharp.md";

const CSharp =   () => {
  return <Markdown markdownPath={markdownPath} />;
};

export default CSharp;
