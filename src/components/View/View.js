import React, { useContext } from "react";
import CodeContext from "../../contexts/codeContext";

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
        height="255px"
        // width="99.8%"
        // height="100%"
      ></iframe>
    </div>
  );
};

export default View;
