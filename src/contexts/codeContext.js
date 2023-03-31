import { createContext, useState } from "react";

const CodeContext = createContext({
  htmlCode: null,
  cssCode: null,
  jsCode: null,
  view: null,
  openEditor: null,
});

export const CodeContextProvider = (props) => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [view, setView] = useState(null);
  const [openEditor, setOpenEditor] = useState({
    html: false,
    css: false,
    javascript: false,
  });

  const updateHtmlCode = (code) => {
    setHtmlCode(code);
    sessionStorage.setItem("htmlCode", code);
    updateView();
  };
  const updateCssCode = (code) => {
    setCssCode(code);
    sessionStorage.setItem("cssCode", code);
    updateView();
  };
  const updateJsCode = (code) => {
    setJsCode(code);
    sessionStorage.setItem("jsCode", code);
    updateView();
  };
  const updateView = () => {
    let htmlCode =
      sessionStorage.getItem("htmlCode") !== "undefined"
        ? sessionStorage.getItem("htmlCode")
        : "";
    let cssCode =
      sessionStorage.getItem("cssCode") !== "undefined"
        ? sessionStorage.getItem("cssCode")
        : "";
    let jsCode =
      sessionStorage.getItem("jsCode") !== "undefined"
        ? sessionStorage.getItem("jsCode")
        : "";
    let str = `
        <body>${htmlCode}</body>
        <style>${cssCode}</style>
        <script>${jsCode}</script>
    `;
    setView(str);
  };
  const updateOpenEditor = (editor) => {
    if (editor === "css")
      setOpenEditor({ html: false, css: !openEditor.css, javascript: false });
    else if (editor === "html")
      setOpenEditor({ html: !openEditor.html, css: false, javascript: false });
    else if (editor === "javascript")
      setOpenEditor({
        html: false,
        css: false,
        javascript: !openEditor.javascript,
      });
  };
  return (
    <CodeContext.Provider
      value={{
        htmlCode: htmlCode,
        cssCode: cssCode,
        jsCode: jsCode,
        view: view,
        openEditor: openEditor,
        updateHtmlCode: updateHtmlCode,
        updateCssCode: updateCssCode,
        updateJsCode: updateJsCode,
        updateView: updateView,
        updateOpenEditor: updateOpenEditor,
      }}
    >
      {props.children}
    </CodeContext.Provider>
  );
};

export default CodeContext;
