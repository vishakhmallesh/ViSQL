// CodeEditorWindow.js

import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme, viewHorizontal }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };
  
  return (
    <Editor
      height={viewHorizontal ? "calc(100vh - 100px - 3rem)" : "calc(50vh - 100px)"}
      width={`100%`}
      language={language}
      value={value}
      theme={theme}
      defaultValue="// some comment"
      onChange={handleEditorChange}
    />
  );
};
export default CodeEditorWindow;
