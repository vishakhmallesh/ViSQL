import React from "react";

export default function NotPresentText(props) {
  return (
    <div className="files d-f ai-c jc-sb" style={{ height: "36px", alignItems: "center" }}>
      <div className="file-name d-f ai-c">
        <span style={{ opacity: 0.5 }}>{props.text}</span>
      </div>
    </div>
  );
}
