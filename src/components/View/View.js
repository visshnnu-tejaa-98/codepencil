import React, { useContext } from "react";
import CodeContext from "../../contexts/codeContext";

const View = () => {
  const codeCtx = useContext(CodeContext);
  const view = codeCtx.view;
  console.log(view);
  return (
    <div>
      <iframe
        alt="render view"
        title="Render View"
        sandbox="allow-scripts"
        srcDoc={view}
      ></iframe>
    </div>
  );
};

export default View;
