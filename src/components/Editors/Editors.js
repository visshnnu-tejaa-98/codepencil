import React from "react";
import "./Editors.scss";
import HtmlImg from "../../assets/html_icon.png";
import CssImg from "../../assets/css_icon.png";
import JsImg from "../../assets/js_icon.png";
import EditorItem from "../EditorItem/EditorItem";

const Editors = () => {
  return (
    <>
      <div className="parent-container">
        <div className="editor-container">
          <EditorItem lang="html" icon={HtmlImg} />
          <EditorItem lang="css" icon={CssImg} />
          <EditorItem lang="javascript" icon={JsImg} />
        </div>
      </div>
    </>
  );
};

export default Editors;
