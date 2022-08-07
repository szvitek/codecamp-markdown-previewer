import { useEffect, useState } from "react";
import { faFilePen, faEye } from "@fortawesome/free-solid-svg-icons";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Container from "./components/Container";
import "./App.css";

const sampleUrl = new URL("/sample.md", import.meta.url).href;
const loadSample = async () => {
  const res = await fetch(sampleUrl);
  return res.text();
};

function App() {
  const [text, setText] = useState("");
  const [windowStates, setWindowStates] = useState([false, false]);

  useEffect(() => {
    loadSample().then((md) => {
      setText(md);
    });
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const toggleWindow = (idx) => {
    setWindowStates((state) => {
      return state.map((s, i) => {
        if (i === idx) {
          return !s;
        }

        return s;
      });
    });
  };

  const editorClasses = windowStates[0]
    ? "active"
    : windowStates.every((s) => !s)
    ? ""
    : "hidden";
  const previewClasses = windowStates[1]
    ? "active"
    : windowStates.every((s) => !s)
    ? ""
    : "hidden";

  return (
    <div className="App">
      <div className="App-body">
        <Container
          title="Editor"
          expanded={windowStates[0]}
          toggleExpanded={() => toggleWindow(0)}
          classes={editorClasses}
          titleIcon={faFilePen}
        >
          <Editor text={text} handleChange={handleChange} />
        </Container>
        <Container
          title="Preview"
          expanded={windowStates[1]}
          toggleExpanded={() => toggleWindow(1)}
          classes={previewClasses}
          titleIcon={faEye}
        >
          <Preview text={text} />
        </Container>
      </div>
    </div>
  );
}

export default App;
