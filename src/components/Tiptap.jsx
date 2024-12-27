import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { Link } from "@tiptap/extension-link";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaCode,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaLink,
  FaUndo,
  FaRedo,
  FaParagraph,
} from "react-icons/fa";

// All Necessary Extensions.
const extensions = [StarterKit, Underline, Link];
const content = ``;

const Tiptap = ({ handleEventContentSave }) => {
  const editor = useEditor({
    extensions,
    content,
  });

  // Component renders only when the editor instance is properly initialized.
  if (!editor) return null;

  // Function for adding & removing Links
  const addLink = () => {
    const url = prompt("Enter the URL");
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  const removeLink = () => {
    editor.chain().focus().unsetLink().run();
  };

  const handleSave = () => {
    const html = editor.getHTML();
    handleEventContentSave(html);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
      <div className="mb-4 border-b pb-4">
        {/* Toolbar with icons */}
        <div className="flex flex-wrap gap-4">
          {/* Bold Font */}
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
              editor.isActive("bold") ? "bg-gray-300" : ""
            }`}
          >
            <FaBold />
          </button>

          {/* Italic Font */}
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
              editor.isActive("italic") ? "bg-gray-300" : ""
            }`}
          >
            <FaItalic />
          </button>

          {/* Underline button */}
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            disabled={!editor.can().chain().focus().toggleUnderline().run()}
            className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
              editor.isActive("underline") ? "bg-gray-300" : ""
            }`}
          >
            <FaUnderline />
          </button>

          {/* Strike button */}
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
              editor.isActive("strike") ? "bg-gray-300" : ""
            }`}
          >
            <FaStrikethrough />
          </button>

          {/* Code button */}
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
              editor.isActive("code") ? "bg-gray-300" : ""
            }`}
          >
            <FaCode />
          </button>

          {/* Clear Marks button */}
          <button
            onClick={() => editor.chain().focus().unsetAllMarks().run()}
            className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            Clear Marks
          </button>

          {/* Clear Nodes button */}
          <button
            onClick={() => editor.chain().focus().clearNodes().run()}
            className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            Clear Nodes
          </button>

          {/* Paragraph button */}
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
              editor.isActive("paragraph") ? "bg-gray-300" : ""
            }`}
          >
            <FaParagraph />
          </button>

          {/* Heading buttons */}
          {["H1", "H2", "H3", "H4", "H5", "H6"].map((level) => (
            <button
              key={level}
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .toggleHeading({ level: parseInt(level.replace("H", "")) })
                  .run()
              }
              className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
                editor.isActive("heading", {
                  level: parseInt(level.replace("H", "")),
                })
                  ? "bg-gray-300"
                  : ""
              }`}
            >
              {level}
            </button>
          ))}

          {/* Unordered List button */}
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
              editor.isActive("bulletList") ? "bg-gray-300" : ""
            }`}
          >
            <FaListUl />
          </button>

          {/* Ordered List button */}
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
              editor.isActive("orderedList") ? "bg-gray-300" : ""
            }`}
          >
            <FaListOl />
          </button>

          {/* Code Block button */}
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
              editor.isActive("codeBlock") ? "bg-gray-300" : ""
            }`}
          >
            <FaCode />
          </button>

          {/* Blockquote button */}
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
              editor.isActive("blockquote") ? "bg-gray-300" : ""
            }`}
          >
            <FaQuoteLeft />
          </button>

          {/* Horizontal Rule button */}
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            Horizontal Rule
          </button>

          {/* Hard Break button */}
          <button
            onClick={() => editor.chain().focus().setHardBreak().run()}
            className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            Hard Break
          </button>

          {/* Undo & Redo buttons */}
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <FaUndo />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <FaRedo />
          </button>

          {/* Link buttons */}
          <button
            onClick={addLink}
            className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <FaLink />
          </button>
          <button
            onClick={removeLink}
            className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            Remove Link
          </button>
        </div>
      </div>

      {/* Editor content */}
      <div className="bg-gray-50 border p-4 rounded-md">
        <EditorContent
          editor={editor}
          className="shadow-md max-h-60 overflow-y-scroll transition-all duration-300"
        />
      </div>

      {/* Save button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleSave}
          className="px-6 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Tiptap;
