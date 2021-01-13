import React from "react";
import Markdown from "./Markdown.js";
import markdownPath from "../Markdown/Faqs.md";

const Faqs =   () => {
  return <Markdown markdownPath={markdownPath} />;
};

export default Faqs;
