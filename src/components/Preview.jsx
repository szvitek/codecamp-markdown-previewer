import DOMPurify from "dompurify";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

marked.setOptions({
	breaks: true,
	highlight: function (code, lang) {
	  const language = hljs.getLanguage(lang) ? lang : "plaintext";
	  return hljs.highlight(code, { language }).value;
	},
	langPrefix: "hljs language-",
  });

const Preview = (props) => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked.parse(props.text)),
      }}
    ></div>
  );
};

export default Preview;
