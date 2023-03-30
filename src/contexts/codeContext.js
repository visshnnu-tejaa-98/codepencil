import { createContext, useState } from "react";

const CodeContext = createContext({
  htmlCode: null,
  cssCode: null,
  jsCode: null,
  view: null,
});

export const CodeContextProvider = (props) => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [view, setView] = useState(null);

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
  return (
    <CodeContext.Provider
      value={{
        htmlCode: htmlCode,
        cssCode: cssCode,
        jsCode: jsCode,
        view: view,
        updateHtmlCode: updateHtmlCode,
        updateCssCode: updateCssCode,
        updateJsCode: updateJsCode,
        updateView: updateView,
      }}
    >
      {props.children}
    </CodeContext.Provider>
  );
};

export default CodeContext;
