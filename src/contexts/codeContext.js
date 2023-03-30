import { createContext, useState } from "react";

const CodeContext = createContext({
  htmlCode: null,
  cssCode: null,
  jsCode: null,
  view: null,
});

export const CodeContextProvider = (props) => {
  const [htmlCode, setHtmlCode] = useState(null);
  const [cssCode, setCssCode] = useState(null);
  const [jsCode, setJsCode] = useState(null);
  const [view, setView] = useState(null);

  const updateHtmlCode = (code) => {
    setHtmlCode(code);
  };
  const updateCssCode = (code) => {
    setCssCode(code);
  };
  const updateJsCode = (code) => {
    setJsCode(code);
  };
  const updateView = () => {
    let str = `
        <html>${htmlCode}</html>
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
