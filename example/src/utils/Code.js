import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { prism } from "../../node_modules/react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({
  value,
  language,
}) => (
  <SyntaxHighlighter language={language}>
    {value}
  </SyntaxHighlighter>
)

export default CodeBlock;
