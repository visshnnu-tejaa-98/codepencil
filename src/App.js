import "./App.scss";
import Editors from "./components/Editors/Editors";
import Navbar from "./components/Navbar/Navbar";
import View from "./components/View/View";
import { CodeContextProvider } from "./contexts/codeContext";

function App() {
  return (
    <CodeContextProvider>
      <Navbar />
      <Editors />
      <View />
    </CodeContextProvider>
  );
}

export default App;
