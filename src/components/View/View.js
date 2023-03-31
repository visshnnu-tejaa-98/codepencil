import React, { useContext } from "react";
import CodeContext from "../../contexts/codeContext";
import "./View.scss";

const View = () => {
  const codeCtx = useContext(CodeContext);
  const view = codeCtx.view;
  return (
    <div className="iframe-container">
      <iframe
        alt="render view"
        title="Render View"
        sandbox="allow-scripts"
        srcDoc={view}
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default View;
