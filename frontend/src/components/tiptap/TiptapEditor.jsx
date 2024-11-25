
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit"; 
import TiptapButtons from "./TiptapButtons";
import { Placeholder } from "@tiptap/extension-placeholder"; 
import "./tiptap.css"; 

const content = ` 
 
`;

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit, 
      Placeholder.configure({
        placeholder: "Say who you are to your readers..",
      }),
    ],
    content,
  });

  if (!editor) {
    return null;
  }

  // const editorContent = editor.getHTML();

  return (
    <div className="w-full">
      {/* Always visible buttons for formatting */}
      <TiptapButtons editor={editor} />

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="bg-[#F6F6F6] shadow-sm dark:bg-[#27272A] dark:text-white text-[.9rem] rounded-md p-4"
      />
    </div>
  );
};

export default TiptapEditor;
