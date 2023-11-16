import "./index.css";
import "./App.css";
import useLocalStorage from "use-local-storage";
import { Toggle } from "./components/Toggle";
function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <h1 className="title">Hello World!</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  );
}

export default App;
