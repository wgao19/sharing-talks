import * as React from "react";

export default ({ children }) => {
  if (!children) {
    return;
  }
  const [left, right] = children;
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {left}
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {right}
      </div>
    </div>
  );
};
