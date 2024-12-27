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
  FaUnlink,
} from "react-icons/fa";
import * as Tooltip from "@radix-ui/react-tooltip";
import { VscHorizontalRule } from "react-icons/vsc";

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
    <Tooltip.Provider>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
        <div className="mb-4 border-b pb-4">
          {/* Toolbar with icons */}
          <div className="flex flex-wrap gap-4">
            {/* Bold Font */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  disabled={!editor.can().chain().focus().toggleBold().run()}
                  className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
                    editor.isActive("bold") ? "bg-gray-300" : ""
                  }`}
                >
                  <FaBold />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Bold
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Italic Font */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  disabled={!editor.can().chain().focus().toggleItalic().run()}
                  className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
                    editor.isActive("italic") ? "bg-gray-300" : ""
                  }`}
                >
                  <FaItalic />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Italic
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Underline button */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                  disabled={
                    !editor.can().chain().focus().toggleUnderline().run()
                  }
                  className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
                    editor.isActive("underline") ? "bg-gray-300" : ""
                  }`}
                >
                  <FaUnderline />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Underline
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Strike button */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => editor.chain().focus().toggleStrike().run()}
                  disabled={!editor.can().chain().focus().toggleStrike().run()}
                  className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
                    editor.isActive("strike") ? "bg-gray-300" : ""
                  }`}
                >
                  <FaStrikethrough />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Strikethrough
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Code button */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => editor.chain().focus().toggleCode().run()}
                  disabled={!editor.can().chain().focus().toggleCode().run()}
                  className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
                    editor.isActive("code") ? "bg-gray-300" : ""
                  }`}
                >
                  <FaCode />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Code
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Clear Marks button */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => editor.chain().focus().unsetAllMarks().run()}
                  className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  Clear Marks
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Clear Marks
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Clear Nodes button */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => editor.chain().focus().clearNodes().run()}
                  className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  Clear Nodes
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Clear Nodes
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Paragraph button */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => editor.chain().focus().setParagraph().run()}
                  className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
                    editor.isActive("paragraph") ? "bg-gray-300" : ""
                  }`}
                >
                  <FaParagraph />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Paragraph
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Heading buttons */}
            {["H1", "H2", "H3", "H4", "H5", "H6"].map((level) => (
              <Tooltip.Root key={level}>
                <Tooltip.Trigger asChild>
                  <button
                    onClick={() =>
                      editor
                        .chain()
                        .focus()
                        .toggleHeading({
                          level: parseInt(level.replace("H", "")),
                        })
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
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="top"
                  align="center"
                  className="bg-black text-white rounded p-1 text-sm"
                >
                  {level}
                </Tooltip.Content>
              </Tooltip.Root>
            ))}

            {/* Unordered List button */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                  className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
                    editor.isActive("bulletList") ? "bg-gray-300" : ""
                  }`}
                >
                  <FaListUl />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Unordered List
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Ordered List button */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleOrderedList().run()
                  }
                  className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
                    editor.isActive("orderedList") ? "bg-gray-300" : ""
                  }`}
                >
                  <FaListOl />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Ordered List
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Code Block button */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                  className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
                    editor.isActive("codeBlock") ? "bg-gray-300" : ""
                  }`}
                >
                  <FaCode />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Code Block
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Blockquote button */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleBlockquote().run()
                  }
                  className={`px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${
                    editor.isActive("blockquote") ? "bg-gray-300" : ""
                  }`}
                >
                  <FaQuoteLeft />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Blockquote
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Horizontal Rule button */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() =>
                    editor.chain().focus().setHorizontalRule().run()
                  }
                  className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <VscHorizontalRule />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Horizontal Rule
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Hard Break button */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => editor.chain().focus().setHardBreak().run()}
                  className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  Hard Break
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Hard Break
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Undo & Redo buttons */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => editor.chain().focus().undo().run()}
                  disabled={!editor.can().chain().focus().undo().run()}
                  className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <FaUndo />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Undo
              </Tooltip.Content>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => editor.chain().focus().redo().run()}
                  disabled={!editor.can().chain().focus().redo().run()}
                  className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <FaRedo />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Redo
              </Tooltip.Content>
            </Tooltip.Root>

            {/* Link buttons */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={addLink}
                  className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <FaLink />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Add Link
              </Tooltip.Content>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={removeLink}
                  className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <FaUnlink />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white rounded p-1 text-sm"
              >
                Remove Link
              </Tooltip.Content>
            </Tooltip.Root>
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
    </Tooltip.Provider>
  );
};

export default Tiptap;
