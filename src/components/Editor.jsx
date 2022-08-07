const Editor = (props) => {
  const { text, handleChange } = props;
  return (
    <textarea
      id="editor"
      cols="200"
      rows="10"
      value={text}
      onChange={handleChange}
    ></textarea>
  );
};

export default Editor;
