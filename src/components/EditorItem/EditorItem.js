// import Editor from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import CodeContext from "../../contexts/codeContext";
import "./EditorItem.scss";
const EditorItem = ({ icon, lang }) => {
  const codeCtx = useContext(CodeContext);
  let openEditor = codeCtx.openEditor;

  useEffect(() => {
    getEditorValue();
  }, []);

  const handleOnChange = (newValue) => {
    if (lang === "html") codeCtx.updateHtmlCode(newValue);
    if (lang === "css") codeCtx.updateCssCode(newValue);
    if (lang === "javascript") codeCtx.updateJsCode(newValue);
    return;
  };

  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function getEditorValue() {
    codeCtx.updateHtmlCode(editorRef.current?.getValue());
    codeCtx.updateCssCode(editorRef.current?.getValue());
    codeCtx.updateJsCode(editorRef.current?.getValue());
  }

  const handleToggle = (lang) => {
    codeCtx.updateOpenEditor(lang);
  };
  return (
    <>
      <div className={`editor ${openEditor[`${lang}`] === true && "open"}`}>
        <div className="nav">
          <span className="nav-container">
            <span className="cont">
              <img src={icon} alt={lang} width="17px" height="17px" />
              <span>{lang.toUpperCase()}</span>
            </span>
            <span className="resize-icon" onClick={() => handleToggle(lang)}>
              {openEditor[`${lang}`] === true ? (
                <span class="material-symbols-outlined">close_fullscreen</span>
              ) : (
                <span className="material-symbols-outlined">open_in_full</span>
              )}
            </span>
          </span>
        </div>
        <Editor
          height="calc(100% - 55px)"
          language={lang}
          theme="vs-dark"
          onMount={handleEditorDidMount}
          onChange={handleOnChange}
        />
        <button onClick={getEditorValue} className="btn">
          Run
        </button>
      </div>
    </>
  );
};

export default EditorItem;
