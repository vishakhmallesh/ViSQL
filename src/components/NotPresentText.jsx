import React from "react";

export default function NotPresentText(props) {
  return (
    <div className="files" style={{ height: "36px", alignItems: "center" }}>
      <div className="file-name">
        <span style={{ opacity: 0.5 }}>{props.text}</span>
      </div>
    </div>
  );
}
