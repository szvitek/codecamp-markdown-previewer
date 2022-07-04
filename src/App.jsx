import { useState } from "react";
import { marked } from "marked";
import "./App.css";

marked.setOptions({
  breaks: true,
});

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  return (
    <div className="App">
      <header>Markdown Previewer</header>
      <div className="App-body">
        <textarea
          id="editor"
          cols="80"
          rows="10"
          value={text}
          onChange={handleChange}
        ></textarea>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
