import { useState } from "react";
import "react-quill/dist/quill.snow.css";
// const ReactQuill = dynamic(() => import("react-quill"), {
//   ssr: false,
// });
import ReactQuill from "react-quill";
// interface EditorProps {
//   placeholder?: string;
// }
// interface EditorStaticProps {
//   modules: Record;
//   formats: string[];
// }
const TextEditor = ({ placeholder }) => {
  const [editorHtml, setEditorHtml] = useState("");
  const handleChange = (html) => {
    setEditorHtml(html);
  };
  return (
    <div>
      <ReactQuill
        theme="snow"
        onChange={handleChange}
        value={editorHtml}
        modules={TextEditor.modules}
        formats={TextEditor.formats}
        bounds={".app"}
        placeholder={placeholder}
        className="quill-editor"
      />
    </div>
  );
};
TextEditor.modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6,] }, { font: [] }],
    [{ size: [ "small", false, "large", "huge" ] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image",],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};
TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
export default TextEditor;
