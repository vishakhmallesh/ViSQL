import React, { useState, Suspense, lazy } from "react";
const Editor = lazy(() => import("@monaco-editor/react"));

export default function CodeEditorWindow({
  onChange,
  language,
  code,
  theme,
  viewHorizontal,
}) {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Editor
        height={
          viewHorizontal ? "calc(100vh - 100px - 3rem)" : "calc(50vh - 100px)"
        }
        width={`100%`}
        language={language}
        value={value}
        theme={theme}
        defaultValue="// enter query here."
        onChange={handleEditorChange}
      />
    </Suspense>
  );
}
